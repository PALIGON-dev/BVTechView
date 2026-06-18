<template>

  <section class="hero text-center py-5">
    <div class="container">
      <h1 class="fw-bold mb-3 animate-fade-in display-5">Уже знаете, за чем пришли?</h1>
      <p class="text-secondary mb-4 animate-fade-in" style="animation-delay: 0.1s;">
        Подробные спецификации и удобное сравнение техники в одном месте, без лишней рекламы
      </p>

      <div class="row justify-content-center animate-fade-in" style="animation-delay: 0.15s;">
        <div class="col-md-7 position-relative">
          <div class="input-group input-group-lg bg-white rounded-3 overflow-hidden border border-secondary border-opacity-10 soft-shadow">
            <span class="input-group-text bg-transparent border-0 text-secondary"><i class="bi bi-search"></i></span>
            <input 
              v-model="searchQuery" 
              type="text" 
              class="form-control bg-transparent border-0 text-dark placeholder-secondary" 
              placeholder="Введите модель устройства (например: iPhone, Macbook, OLED...)"
              @focus="showSearchDropdown = true"
            >
          </div>
          

          <div 
            v-if="showSearchDropdown && searchQuery.trim()" 
            class="list-group search-results-wrapper"
          >
            <div v-if="searchLoading" class="list-group-item border-0 py-4 text-center bg-white">
              <div class="spinner-border spinner-border-sm text-primary me-2" role="status"></div>
              <span class="text-secondary" style="font-size: 0.9rem;">Ищем в базе знаний и Wikipedia...</span>
            </div>
            <template v-else-if="searchMatches.length > 0">
              <router-link
                v-for="m in searchMatches"
                :key="m.id"
                :to="getCategoryRoute(m.category)"
                class="list-group-item list-group-item-action border-0 py-3 px-4 d-flex justify-content-between align-items-center text-dark bg-white"
                style="border-bottom: 1px solid var(--border-color) !important;"
              >
                <div>
                  <i class="bi bi-device-ssd me-2 text-primary"></i>
                  <strong>{{ m.name }}</strong>
                </div>
                <span class="badge bg-secondary text-white">{{ m.brand }}</span>
              </router-link>
            </template>
            <div v-else class="list-group-item border-0 py-3 px-4 text-secondary text-center bg-white">
              Совпадений не найдено
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="py-5 bg-white border-bottom border-secondary border-opacity-10 text-center">
    <div class="container">
      <h3 class="fw-bold mb-2">Быстрое сравнение устройств</h3>
      <p class="text-secondary mb-4">Выберите до 3 моделей для мгновенного сопоставления их характеристик</p>

      <div class="row justify-content-center g-3">
        <div class="col-md-3" v-for="i in 3" :key="i">
          <select v-model="quickSelections[i - 1]" class="form-select form-control">
            <option value="">Выберите модель {{ i }}...</option>
            <optgroup v-for="(list, catKey) in devicesDb" :key="catKey" :label="getCategoryLabel(catKey)">
              <option v-for="dev in list" :key="dev.id" :value="catKey + ':' + dev.id">
                {{ dev.name }}
              </option>
            </optgroup>
          </select>
        </div>
      </div>

      <button class="btn btn-premium btn-lg mt-4 px-5" @click="handleQuickCompare">
        <i class="bi bi-columns-gap me-2"></i>Сравнить устройства
      </button>
    </div>
  </section>


  <section id="popular" class="py-5" style="background-color: var(--bg-primary);">
    <div class="container">
      <h3 class="fw-bold mb-5 text-center">Подборки популярных моделей</h3>

      <div class="row g-4 justify-content-center">
        <div class="col-md-4" v-for="cat in categories" :key="cat.link">
          <CategoryCard 
            :title="cat.title" 
            :description="cat.description" 
            :icon="cat.icon" 
            :link="cat.link"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import CategoryCard from '../components/CategoryCard.vue'
import { useCompare } from '../composables/useCompare'

const { selectedDevices, isModalOpen } = useCompare()

const searchQuery = ref('')
const showSearchDropdown = ref(false)

const quickSelections = ref(['', '', ''])
const devicesDb = ref({})
const loading = ref(false)

const searchMatches = ref([])
const searchLoading = ref(false)
let debounceTimeout = null

const fetchDevices = async () => {
  loading.value = true
  try {
    const res = await fetch('http://localhost:5157/api/devices')
    if (res.ok) {
      const data = await res.json()
      
      const grouped = {}
      data.forEach(dev => {
        const catSlug = dev.category.slug
        if (!grouped[catSlug]) {
          grouped[catSlug] = []
        }
        
        const specs = {}
        dev.specifications?.forEach(s => {
          specs[s.key] = s.value
        })
        
        grouped[catSlug].push({
          id: dev.slug,
          name: dev.name,
          brand: dev.brand,
          rating: dev.rating,
          description: dev.description,
          specs: specs
        })
      })
      
      devicesDb.value = grouped
    }
  } catch (e) {
    console.error('Error fetching devices:', e)
  } finally {
    loading.value = false
  }
}


watch(searchQuery, (newQuery) => {
  const query = newQuery.trim()
  if (!query) {
    searchMatches.value = []
    return
  }

  if (debounceTimeout) clearTimeout(debounceTimeout)
  
  debounceTimeout = setTimeout(async () => {
    searchLoading.value = true
    try {
      const res = await fetch(`http://localhost:5157/api/devices/search?query=${encodeURIComponent(query)}`)
      if (res.ok) {
        const data = await res.json()
        searchMatches.value = data.map(dev => {
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
            specs: specs,
            category: dev.category?.slug || 'phones'
          }
        })
      }
    } catch (e) {
      console.error('Error searching devices:', e)
    } finally {
      searchLoading.value = false
    }
  }, 400)
})


const closeDropdown = (e) => {
  const el = e.target
  if (!el.closest('.position-relative')) {
    showSearchDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
  fetchDevices()
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})


const categories = [
  { title: 'Носимая электроника', description: 'От фитнес-браслетов до продвинутых спортивных датчиков', icon: 'bi-watch', link: '/wearables' },
  { title: 'Бытовая техника', description: 'Современные роботы-пылесосы, кофемашины и холодильники', icon: 'bi-house-gear', link: '/appliances' },
  { title: 'Ноутбуки и ПК', description: 'Игровые ноутбуки, ультрабуки и офисные рабочие станции', icon: 'bi-laptop', link: '/laptops' },
  { title: 'Смартфоны и планшеты', description: 'Флагманские телефоны, планшеты и мобильные устройства', icon: 'bi-phone', link: '/mobile' },
  { title: 'Телевизоры', description: 'Панели высокого разрешения на базе OLED, QLED и LED', icon: 'bi-tv', link: '/tv' }
]


const getCategoryRoute = (catKey) => {
  if (catKey === 'phones') return '/mobile'
  return `/${catKey}`
}

const getCategoryLabel = (catKey) => {
  switch(catKey) {
    case 'phones': return 'Смартфоны и планшеты'
    case 'laptops': return 'Ноутбуки и ПК'
    case 'wearables': return 'Носимая электроника'
    case 'appliances': return 'Бытовая техника'
    case 'tv': return 'Телевизоры'
    default: return catKey
  }
}


const handleQuickCompare = () => {
  const chosen = []
  quickSelections.value.forEach(val => {
    if (val) {
      const [category, id] = val.split(':')
      const dev = devicesDb.value[category]?.find(d => d.id === id)
      if (dev) {
        chosen.push({
          id: dev.id,
          name: dev.name,
          category: category
        })
      }
    }
  })

  if (chosen.length === 0) {
    alert('Пожалуйста, выберите хотя бы одно устройство для сравнения.')
    return
  }


  selectedDevices.value = chosen
  isModalOpen.value = true
}
</script>

<style scoped>
.search-results-wrapper {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0,0,0,0.06);
  border: 1px solid var(--border-color);
}
</style>