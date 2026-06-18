import { ref, watch } from 'vue'

const selectedDevices = ref([])
const isModalOpen = ref(false)


const saved = localStorage.getItem('techview_compare')
if (saved) {
  try {
    selectedDevices.value = JSON.parse(saved)
  } catch (e) {
    selectedDevices.value = []
  }
}


watch(selectedDevices, (newVal) => {
  localStorage.setItem('techview_compare', JSON.stringify(newVal))
}, { deep: true })

export function useCompare() {
  const toggleCompare = (device, categoryId) => {
    const idx = selectedDevices.value.findIndex(d => d.id === device.id)
    if (idx > -1) {
      selectedDevices.value.splice(idx, 1)
    } else {
      if (selectedDevices.value.length >= 3) {
        alert('Вы можете сравнить не более 3 устройств одновременно!')
        return
      }
      selectedDevices.value.push({
        id: device.id,
        name: device.name,
        category: categoryId
      })
    }
  }

  const removeFromCompare = (deviceId) => {
    const idx = selectedDevices.value.findIndex(d => d.id === deviceId)
    if (idx > -1) {
      selectedDevices.value.splice(idx, 1)
    }
  }

  const isCompared = (deviceId) => {
    return selectedDevices.value.some(d => d.id === deviceId)
  }

  const clearCompare = () => {
    selectedDevices.value = []
  }

  return {
    selectedDevices,
    isModalOpen,
    toggleCompare,
    removeFromCompare,
    isCompared,
    clearCompare
  }
}
