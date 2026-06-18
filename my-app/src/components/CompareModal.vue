<template>
  <div v-if="isModalOpen">
    <div class="modal-backdrop fade show" @click="closeModal"></div>
    
    <div class="modal fade show d-block" tabindex="-1" aria-modal="true" role="dialog" @keydown.esc="closeModal">
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content border-0" style="background-color: var(--bg-secondary); border-radius: 24px;">
          
          <div class="modal-header border-bottom border-secondary border-opacity-10 p-4">
            <h4 class="modal-title fw-bold text-primary-theme"><i class="bi bi-columns-gap me-2"></i>Таблица сравнения</h4>
            <button type="button" class="btn-close" aria-label="Close" @click="closeModal"></button>
          </div>
          
          <div class="modal-body p-4 overflow-auto">
            <div v-if="loading" class="text-center py-5">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Загрузка...</span>
              </div>
            </div>
            <div v-else-if="devicesToCompare.length === 0" class="text-muted text-center py-5">
              Нет выбранных устройств для сравнения.
            </div>
            
            <div v-else>
              <table class="compare-table">
                <thead>
                  <tr>
                    <th style="width: 20%;">Параметры</th>
                    <th 
                      v-for="d in devicesToCompare" 
                      :key="d.id"
                      :style="{ width: (80 / devicesToCompare.length) + '%' }"
                    >
                      <div class="device-text-header-mini rounded-3 mb-2 d-flex flex-column justify-content-center align-items-center mx-auto">
                        <span class="device-initials-mini">{{ d.brand[0] || 'T' }}</span>
                      </div>
                      <div class="fw-bold text-primary-theme fs-6">{{ d.name }}</div>
                      <div class="mt-2 d-flex justify-content-center align-items-center gap-2 flex-wrap">
                        <span class="score-badge">{{ d.rating }} / 10</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="specName in allSpecKeys" :key="specName">
                    <td>{{ specName }}</td>
                    <td v-for="d in devicesToCompare" :key="d.id">
                      {{ d.specs[specName] || '—' }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useCompare } from '../composables/useCompare'

const { selectedDevices, isModalOpen } = useCompare()
const devicesToCompare = ref([])
const loading = ref(false)

const closeModal = () => {
  isModalOpen.value = false
}

const fetchComparedDevices = async () => {
  if (selectedDevices.value.length === 0) {
    devicesToCompare.value = []
    return
  }
  loading.value = true
  try {
    const queryParams = selectedDevices.value.map(d => `slugs=${d.id}`).join('&')
    const res = await fetch(`http://localhost:5157/api/devices/compare?${queryParams}`)
    if (res.ok) {
      const data = await res.json()
      devicesToCompare.value = data.map(dev => {
        const specs = {}
        dev.specifications?.forEach(s => {
          specs[s.key] = s.value
        })
        return {
          id: dev.slug,
          name: dev.name,
          brand: dev.brand,
          rating: dev.rating,
          description: dev.description,
          specs: specs
        }
      })
    }
  } catch (e) {
    console.error('Error fetching compared devices:', e)
  } finally {
    loading.value = false
  }
}

watch([isModalOpen, selectedDevices], () => {
  if (isModalOpen.value) {
    fetchComparedDevices()
  }
}, { deep: true, immediate: true })

const allSpecKeys = computed(() => {
  const keys = new Set()
  devicesToCompare.value.forEach(d => {
    if (d.specs) {
      Object.keys(d.specs).forEach(k => keys.add(k))
    }
  })
  return Array.from(keys)
})
</script>

<style scoped>
.text-primary-theme {
  color: var(--text-primary);
}
.text-gradient {
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
