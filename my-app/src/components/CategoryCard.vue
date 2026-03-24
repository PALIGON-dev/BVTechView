<template>
  <div class="card category-card h-100 text-center p-4">
    <h5 class="fw-bold">{{ title }}</h5>
    <p class="text-muted">{{ description }}</p>
    <button class="btn btn-outline-dark">Перейти</button>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String
})
</script>

<style scoped>
.category-card {
  border: none;
  background-color: #ffffff;
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}
</style>