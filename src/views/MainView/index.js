import axios from 'axios'
import WeatherVue from '@/components/WeatherVue/WeatherVue.vue'
import FavoriteCities from '@/components/FavoriteCities/FavoriteCities.vue'
import config from '../../../config'

const CITIES = ['Москва', 'Пятигорск', 'Владивосток', 'Сочи', 'Санкт-Петербург']

const debounce = (callback, interval = 0) => {
  let prevTimeoutId

  return (...args) => {
    clearTimeout(prevTimeoutId)
    prevTimeoutId = setTimeout(() => callback(...args), interval)
  }
}

export default {
  data() {
    return {
      cities: CITIES,
      selectedCity: 'Москва',
      weatherDataForCity: null,
      isLoading: false,
      search: '',
    }
  },
  components: {
    WeatherVue,
    FavoriteCities,
  },
  methods: {
    async getWeatherByCityName(cityName) {
      this.isLoading = true
      this.weatherDataForCity = null
      this.selectedCity = cityName

      try {
        const response = await axios.get(`${config.API_URL}city-weather`, {
          params: { cityName },
        })

        this.weatherDataForCity = response.data
      } catch (error) {
        console.error(error)
      } finally {
        this.isLoading = false
      }
    },
  },
  mounted() {
    this.getWeatherByCityName(this.selectedCity)
  },
  created() {
    this.debouncedFetch = debounce(this.getWeatherByCityName, 1000)
  },
  watch: {
    search: {
      handler() {
        this.debouncedFetch(this.search)
      },
    },
  },
}
