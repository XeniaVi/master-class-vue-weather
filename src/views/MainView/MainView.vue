<template>
  <!-- Передача функции-обработчика в дочерний компонент -->
  <FavoriteCities
    :selectedCity="selectedCity"
    :cities="cities"
    @getWeather="getWeatherByCityName"
  />

  <div class="input__container">
    <!-- Использование v-model -->
    <ui-input
      v-model="search"
      placeholder="Найти город"
      @update:model-value="(newValue) => (search = newValue)"
    />
  </div>

  <!-- Условный рендеринг -->
  <WeatherVue v-if="weatherDataForCity" :weatherDataForCity="weatherDataForCity" />
  <div v-else-if="isLoading" class="loading">Идет загрузка...</div>
  <div v-else class="empty">Нет данных</div>
</template>

<script src="./index.js"></script>

<style scoped>
@import url('index.css');
</style>
