<template>
  <div class="card category-card h-100 text-center p-4">
    <div v-if="icon" class="icon-box"><i :class="'bi ' + icon"></i></div>
    <h5 class="fw-bold">{{ title }}</h5>
    <p class="text-secondary">{{ description }}</p>
    <router-link :to="link" class="btn btn-outline-premium mt-3">Перейти</router-link>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.icon-box {
  font-size: 2.2rem;
  color: var(--text-primary);
  margin-bottom: 15px;
  opacity: 0.85;
}
</style>