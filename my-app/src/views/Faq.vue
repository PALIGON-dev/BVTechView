<template>
  <section class="py-5 flex-grow-1" style="background-color: var(--bg-primary); min-height: 80vh;">
    <div class="container">
      <h2 class="fw-bold text-center mb-5 text-primary-theme animate-fade-in">Часто задаваемые вопросы</h2>

      <div class="row justify-content-center animate-fade-in" style="animation-delay: 0.15s;">
        <div class="col-md-8">
          <div class="accordion" id="faqAccordion">

            <div 
              v-for="(item, idx) in faqItems" 
              :key="idx" 
              class="accordion-item"
            >
              <h2 class="accordion-header">
                <button 
                  class="accordion-button" 
                  :class="{ collapsed: activeIndex !== idx }"
                  type="button"
                  @click="toggleActive(idx)"
                >
                  {{ item.question }}
                </button>
              </h2>
              <div 
                class="accordion-collapse collapse" 
                :class="{ show: activeIndex === idx }"
              >
                <div class="accordion-body">
                  {{ item.answer }}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(0)

const faqItems = [
  {
    question: 'Как работает сравнение устройств?',
    answer: 'Вы добавляете до 3 моделей на страницах категорий и нажимаете кнопку «Сравнить» в появившейся панели снизу, после чего получаете удобную таблицу сравнения характеристик.'
  },
  {
    question: 'Откуда берутся характеристики?',
    answer: 'Данные загружаются из открытых источников и базы данных бэкенд-сервера ASP.NET Core и обновляются автоматически.'
  },
  {
    question: 'Можно ли добавить больше 3 устройств?',
    answer: 'В текущей версии интерфейса сравнение ограничено тремя устройствами для обеспечения читаемости таблицы на мобильных устройствах.'
  },
  {
    question: 'Планируется ли добавление цен?',
    answer: 'Да, в будущих версиях планируется расширение функционала и вывод цен из крупнейших маркетплейсов в реальном времени.'
  }
]

const toggleActive = (idx) => {
  if (activeIndex.value === idx) {
    activeIndex.value = null
  } else {
    activeIndex.value = idx
  }
}
</script>

<style scoped>
.text-primary-theme {
  color: var(--text-primary);
}
</style>
