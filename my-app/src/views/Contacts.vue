<template>
  <section class="py-5 flex-grow-1" style="background-color: var(--bg-primary);">
    <div class="container">
      <div class="row justify-content-center g-4">

        <div class="col-md-7 animate-fade-in">
          <div class="card card-tech p-4 p-lg-5">
            <h3 class="fw-bold mb-2 text-primary-theme text-center">Связаться с нами</h3>
            <p class="text-secondary text-center mb-4">Оповестим вас в кратчайшие сроки по вашему вопросу</p>

            <form @submit.prevent="handleSubmit" novalidate>
              <div class="mb-3 text-start">
                <label for="fullname" class="form-label text-primary-theme fw-medium">
                  ФИО <span class="text-danger">*</span>
                </label>
                <input 
                  id="fullname" 
                  v-model="fullname" 
                  type="text" 
                  class="form-control"
                  :class="{ 'is-invalid': errors.fullname }"
                  placeholder="Иванов Иван Иванович"
                  @input="clearError('fullname')"
                >
                <div class="invalid-feedback">{{ errors.fullname }}</div>
              </div>

              <div class="mb-3 text-start">
                <label for="phone" class="form-label text-primary-theme fw-medium">
                  Телефон <span class="text-danger">*</span>
                </label>
                <input 
                  id="phone" 
                  v-model="phone" 
                  type="tel" 
                  class="form-control"
                  :class="{ 'is-invalid': errors.phone }"
                  placeholder="+7 (___) ___-__-__"
                  @input="clearError('phone')"
                >
                <div class="invalid-feedback">{{ errors.phone }}</div>
              </div>

              <div class="mb-3 text-start">
                <label for="email" class="form-label text-primary-theme fw-medium">
                  Email <span class="text-danger">*</span>
                </label>
                <input 
                  id="email" 
                  v-model="email" 
                  type="email" 
                  class="form-control"
                  :class="{ 'is-invalid': errors.email }"
                  placeholder="example@mail.ru"
                  @input="clearError('email')"
                >
                <div class="invalid-feedback">{{ errors.email }}</div>
              </div>

              <div class="mb-3 text-start">
                <label for="message" class="form-label text-primary-theme fw-medium">Сообщение</label>
                <textarea 
                  id="message" 
                  v-model="message" 
                  class="form-control" 
                  rows="4" 
                  maxlength="300"
                  placeholder="Введите сообщение..."
                ></textarea>
                <div class="form-text text-secondary mt-1 d-flex justify-content-between">
                  <span>До 300 символов</span>
                  <span>{{ message.length }}/300</span>
                </div>
              </div>

              <div class="form-check mb-4 text-start">
                <input 
                  id="agreement" 
                  v-model="agreement" 
                  class="form-check-input" 
                  :class="{ 'is-invalid': errors.agreement }"
                  type="checkbox"
                  @change="clearError('agreement')"
                >
                <label class="form-check-label text-secondary" for="agreement">
                  Я согласен на обработку персональных данных <span class="text-danger">*</span>
                </label>
                <div class="invalid-feedback">{{ errors.agreement }}</div>
              </div>

              <div class="text-secondary small mb-4 text-start">
                <span class="text-danger">*</span> — обязательные поля для заполнения
              </div>

              <div class="text-center">
                <button type="submit" class="btn btn-premium px-4 py-2 me-2">Отправить</button>
                <button type="button" class="btn btn-outline-secondary px-4 py-2" @click="handleReset">Очистить</button>
              </div>
            </form>
          </div>
        </div>

        <div class="col-md-4 animate-fade-in" style="animation-delay: 0.15s;">
          <div class="card card-tech p-4 text-center h-100 d-flex flex-column justify-content-center">
            <div class="fs-1 text-primary mb-3"><i class="bi bi-chat-left-dots"></i></div>
            <h4 class="fw-bold text-primary-theme mb-3">Либо напишите напрямую</h4>
            <p class="text-secondary mb-2">Email технической поддержки:</p>
            <p class="fw-bold text-primary-theme mb-4">info@TechView.ru</p>

            <p class="text-secondary mb-2">Наш Telegram канал:</p>
            <div class="mb-4">
              <a href="http://t.me/PALIGON4CK" target="_blank" class="btn btn-outline-premium btn-sm">
                <i class="bi bi-send-fill me-2"></i>PALIGON4CK
              </a>
            </div>

            <router-link to="/" class="btn btn-premium mt-auto">
              Вернуться на главную
            </router-link>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const fullname = ref('')
const phone = ref('')
const email = ref('')
const message = ref('')
const agreement = ref(false)

const errors = reactive({
  fullname: '',
  phone: '',
  email: '',
  agreement: ''
})

const clearError = (field) => {
  errors[field] = ''
}

const handleReset = () => {
  fullname.value = ''
  phone.value = ''
  email.value = ''
  message.value = ''
  agreement.value = false
  
  errors.fullname = ''
  errors.phone = ''
  errors.email = ''
  errors.agreement = ''
}

const validate = () => {
  let isValid = true
  
  const fullnameVal = fullname.value.trim()
  const phoneVal = phone.value.trim()
  const emailVal = email.value.trim()
  const phoneDigits = phoneVal.replace(/\D/g, '')


  if (fullnameVal === '') {
    errors.fullname = 'Введите фамилию и имя'
    isValid = false
  } else if (fullnameVal.split(/\s+/).length < 2) {
    errors.fullname = 'Введите фамилию и имя'
    isValid = false
  }


  if (phoneVal === '') {
    errors.phone = 'Введите номер телефона'
    isValid = false
  } else if (phoneDigits.length < 10) {
    errors.phone = 'Введите 10 цифр номера'
    isValid = false
  }


  if (emailVal === '') {
    errors.email = 'Введите email'
    isValid = false
  } else if (!emailVal.includes('@') || !emailVal.includes('.')) {
    errors.email = 'Введите корректный email'
    isValid = false
  }


  if (!agreement.value) {
    errors.agreement = 'Необходимо согласие'
    isValid = false
  }

  return isValid
}

const handleSubmit = () => {
  if (validate()) {
    console.log('ФИО:', fullname.value.trim())
    console.log('Телефон:', phone.value.trim())
    console.log('Email:', email.value.trim())
    console.log('Сообщение:', message.value.trim() || '(не заполнено)')
    
    const timestamp = new Date().toLocaleString()
    console.log('Время отправки:', timestamp)
    
    alert('Форма успешно отправлена!')
    handleReset()
  }
}
</script>

<style scoped>
.text-primary-theme {
  color: var(--text-primary);
}
</style>
