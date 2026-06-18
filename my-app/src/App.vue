<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import CompareDrawer from './components/CompareDrawer.vue'
import CompareModal from './components/CompareModal.vue'
</script>

<template>
  <Navbar />
  <main class="flex-grow-1 d-flex flex-column">
    <router-view />
  </main>
  <Footer />
  

  <CompareDrawer />
  <CompareModal />
</template>
