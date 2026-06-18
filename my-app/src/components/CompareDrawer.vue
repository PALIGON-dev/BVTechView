<template>
  <div 
    class="comparison-drawer" 
    :class="{ active: isOpen && selectedDevices.length > 0 }"
  >
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h6 class="fw-bold m-0 text-primary-theme">
        <i class="bi bi-shuffle me-2"></i>Сравнение устройств ({{ selectedDevices.length }})
      </h6>
      <button class="btn-close" aria-label="Close" @click="isOpen = false"></button>
    </div>
    <div class="row align-items-center g-3">
      <div class="col-md-9">
        <div class="d-flex flex-wrap gap-2">
          <div 
            v-for="dev in selectedDevices" 
            :key="dev.id" 
            class="drawer-item"
          >
            <span class="text-truncate me-2" style="max-width: 150px; font-size: 0.85rem;">
              {{ dev.name }}
            </span>
            <button 
              class="btn-close" 
              style="font-size: 0.65rem;" 
              aria-label="Remove"
              @click="removeFromCompare(dev.id)"
            ></button>
          </div>
        </div>
      </div>
      <div class="col-md-3 text-end">
        <button class="btn btn-premium w-100" @click="openCompareModal">
          Сравнить
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useCompare } from '../composables/useCompare'

const { selectedDevices, isModalOpen, removeFromCompare } = useCompare()
const isOpen = ref(true)

watch(() => selectedDevices.value.length, (newLength, oldLength) => {
  if (newLength > oldLength) {
    isOpen.value = true
  }
})

const openCompareModal = () => {
  isModalOpen.value = true
}
</script>

<style scoped>
.text-primary-theme {
  color: var(--text-primary);
}
</style>
