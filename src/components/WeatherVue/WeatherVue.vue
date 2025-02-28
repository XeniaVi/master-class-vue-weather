<template>
  <div class="wrapper">
    <div class="container">
      <div class="main-text">{{ Math.round(weatherDataForCity.temperature) }} °C</div>

      <div class="inner">
        <div class="common-text">
          Ощущается как {{ Math.round(weatherDataForCity.feelsLikeTemperature) }} °C
        </div>

        <div class="common-text">Скорость ветра: {{ weatherDataForCity.windSpeed }} м/с</div>

        <div class="common-text">
          Атмосферное давление: {{ weatherDataForCity.atmosphericPressure }} мм рт. ст.
        </div>

        <div class="common-text">
          Местоположение: <strong>{{ weatherDataForCity.cityName }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    weatherDataForCity: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
@import url('index.css');
</style>
