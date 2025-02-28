<template>
  <h2 class="title">Избранные города</h2>
  <ul class="list">
    <li class="list__item" v-for="city in cities" :key="city">
      <!-- Применения функции-обработчика и динамичного класса -->
      <button
        class="btn__link"
        :class="city === selectedCity && 'btn__link_active'"
        @click="getWeatherByCityName(city)"
        :disabled="city === selectedCity"
      >
        {{ city }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    selectedCity: {
      type: String,
      required: true,
    },
    cities: {
      type: Array,
      required: true,
    },
  },
  methods: {
    // Инициализация функции-обработчика и связывание с родительским компонентом
    getWeatherByCityName(city) {
      this.$emit('getWeather', city)
    },
  },
}
</script>

<style scoped>
@import url('index.css');
</style>
