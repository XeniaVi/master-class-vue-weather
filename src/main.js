import { createApp } from 'vue'
import App from './App.vue'
import components from './ui'
const app = createApp(App)

//добавляем кастомные компоненты для использование по всему приложению без лишних импортов в файлах, где они нужны
components.forEach((component) => app.component(component.name, component))

app.mount('#app')
