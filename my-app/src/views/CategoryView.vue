<template>
  <div>

    <section class="hero text-center py-5">
      <div class="container">
        <h1 class="fw-bold mb-3 animate-fade-in">{{ title }}</h1>
        <p class="text-secondary mb-0 animate-fade-in" style="animation-delay: 0.1s;">
          {{ description }}
        </p>
      </div>
    </section>


    <section class="py-5" style="background-color: var(--bg-primary);">
      <div class="container">
        <div class="row g-4 justify-content-center">
          
          <div 
            v-for="dev in devices" 
            :key="dev.id" 
            class="col-md-4 animate-fade-in"
          >
            <div class="card card-tech h-100 p-3">
              <!-- Text-based device plate header -->
              <div class="device-text-header rounded-3 mb-3 d-flex flex-column justify-content-center align-items-center">
                <span class="device-initials">{{ dev.brand[0] || 'T' }}</span>
                <span class="device-slug-sub mt-2">{{ dev.brand }} Tech</span>
              </div>
              <div class="d-flex justify-content-between align-items-start mb-2">
                <span class="badge bg-secondary text-white">{{ dev.brand }}</span>
                <div class="score-badge">{{ dev.rating }} / 10</div>
              </div>
              <h5 class="fw-bold mb-3 text-primary-theme text-start">{{ dev.name }}</h5>
              
              <div class="mb-4 text-start">
                <div 
                  v-for="[key, val] in getTopSpecs(dev.specs)" 
                  :key="key" 
                  class="d-flex justify-content-between py-1 border-bottom border-secondary border-opacity-10"
                >
                  <span class="spec-label">{{ key }}</span>
                  <span class="spec-val text-truncate" style="max-width: 60%;">{{ val }}</span>
                </div>
              </div>
              
              <div class="d-flex justify-content-end align-items-center mt-auto">
                <button 
                  class="btn btn-sm animate-fade-in"
                  :class="isCompared(dev.id) ? 'btn-outline-premium' : 'btn-premium'"
                  @click="toggleCompare(dev, category)"
                >
                  {{ isCompared(dev.id) ? 'Убрать' : 'Сравнить' }}
                </button>
              </div>
            </div>
          </div>
          
          <div v-if="loading" class="text-center py-5 w-100">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Загрузка...</span>
            </div>
          </div>
          <div v-else-if="devices.length === 0" class="text-center py-5">
            <p class="text-secondary">Нет устройств в этой категории.</p>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useCompare } from '../composables/useCompare'

const props = defineProps({
  category: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

const { toggleCompare, isCompared } = useCompare()
const devices = ref([])
const loading = ref(false)

const fetchDevices = async () => {
  loading.value = true
  try {
    const res = await fetch(`http://localhost:5157/api/devices/category/${props.category}`)
    if (res.ok) {
      const data = await res.json()
      devices.value = data.map(dev => {
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
    console.error('Error fetching devices:', e)
  } finally {
    loading.value = false
  }
}

onMounted(fetchDevices)
watch(() => props.category, fetchDevices)

const getTopSpecs = (specs) => {
  return Object.entries(specs || {}).slice(0, 3)
}
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
</style>
