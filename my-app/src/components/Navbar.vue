<template>
  <nav class="navbar navbar-expand-lg sticky-top shadow-sm">
    <div class="container">
      <router-link class="navbar-brand fw-bold" to="/">TechView</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><router-link class="nav-link" to="/wearables">Носимая электроника</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/appliances">Бытовая техника</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/laptops">Ноутбуки и ПК</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/mobile">Смартфоны и планшеты</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/tv">Телевизоры</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/faq">FAQ</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/contacts">Контакты</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>