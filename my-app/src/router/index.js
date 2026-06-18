import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/wearables',
      name: 'wearables',
      component: () => import('../views/CategoryView.vue'),
      props: { 
        category: 'wearables', 
        title: 'Носимая электроника', 
        description: 'Выбирайте и сравнивайте умные часы, спортивные трекеры и другие нательные датчики.' 
      }
    },
    {
      path: '/appliances',
      name: 'appliances',
      component: () => import('../views/CategoryView.vue'),
      props: { 
        category: 'appliances', 
        title: 'Бытовая техника', 
        description: 'Современные роботы-пылесосы, кофемашины и холодильники.' 
      }
    },
    {
      path: '/laptops',
      name: 'laptops',
      component: () => import('../views/CategoryView.vue'),
      props: { 
        category: 'laptops', 
        title: 'Ноутбуки и ПК', 
        description: 'Детальный технический анализ ноутбуков, ультрабуков и настольных рабочих станций.' 
      }
    },
    {
      path: '/mobile',
      name: 'mobile',
      component: () => import('../views/CategoryView.vue'),
      props: { 
        category: 'phones', 
        title: 'Смартфоны и планшеты', 
        description: 'Флагманские телефоны, планшеты и мобильные устройства.' 
      }
    },
    {
      path: '/tv',
      name: 'tv',
      component: () => import('../views/CategoryView.vue'),
      props: { 
        category: 'tv', 
        title: 'Телевизоры', 
        description: 'Панели высокого разрешения на базе OLED, QLED и LED.' 
      }
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/Faq.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/Contacts.vue')
    }
  ]
})

export default router