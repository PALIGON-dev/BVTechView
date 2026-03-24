<template>
  <Navbar />

  <!-- HERO -->
  <section class="hero text-center">
    <div class="container">
      <h1 class="fw-bold mb-4">Уже знаете, за чем пришли?</h1>
      <p class="text-muted mb-4">
        Подробные спецификации и удобное сравнение техники в одном месте
      </p>

      <button class="btn btn-outline-dark btn-lg" @click="showSearch = !showSearch">
        Найти по модели
      </button>

      <a href="#popular" class="btn btn-outline-dark btn-lg">Выбрать из популярных</a>

      <div v-if="showSearch" class="mt-4">
        <div class="card card-body soft-shadow border-0">
          <div class="input-group">
            <input v-model="search" type="text" class="form-control" placeholder="Введите модель устройства">
            <button class="btn btn-dark">Найти</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- СРАВНЕНИЕ -->
  <section class="py-5 section-light text-center">
    <div class="container">
      <h3 class="fw-bold mb-3">Сравнение устройств</h3>

      <div class="row justify-content-center g-3">
        <div class="col-md-3">
          <input v-model="compare1" class="form-control" placeholder="Модель 1">
        </div>
        <div class="col-md-3">
          <input v-model="compare2" class="form-control" placeholder="Модель 2">
        </div>
        <div class="col-md-3">
          <input v-model="compare3" class="form-control" placeholder="Модель 3">
        </div>
      </div>

      <button class="btn btn-dark btn-lg mt-4">Сравнить устройства</button>
    </div>
  </section>

  <!-- ПОПУЛЯРНОЕ -->
  <section id="popular" class="py-5 section-gray">
    <div class="container">
      <h3 class="fw-bold mb-5 text-center">Подборки популярных моделей</h3>

      <div class="row g-4">
        <div class="col-md-4" v-for="item in categories" :key="item.title">
          <CategoryCard :title="item.title" :description="item.description" />
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import CategoryCard from '../components/CategoryCard.vue'

const showSearch = ref(false)
const search = ref('')

const compare1 = ref('')
const compare2 = ref('')
const compare3 = ref('')

const categories = [
  { title: 'Носимая электроника', description: 'От фитнес-браслетов до сенсоров' },
  { title: 'Бытовая техника', description: 'От пылесосов до кухонных плит' },
  { title: 'Персональные компьютеры', description: 'Производительные и для учёбы' },
  { title: 'Ноутбуки', description: 'Игровые и для офисных задач' },
  { title: 'Смартфоны и планшеты', description: 'Особенные и на каждый день' },
  { title: 'Телевизоры', description: 'Большие и не очень' }
]
</script>

<style>
.hero {
  padding: 110px 0;
  background: linear-gradient(to bottom, #ffffff, #f8f9fa);
}

.section-light {
  background-color: #ffffff;
}

.section-gray {
  background-color: #e9ecef;
}

.soft-shadow {
  box-shadow: 0 6px 20px rgba(0,0,0,0.05);
}
</style>