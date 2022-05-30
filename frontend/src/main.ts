import { createApp } from 'vue'
import App from './App.vue'

// Vue Router
import { createRouter, createWebHistory } from 'vue-router'

// i18n
import { createI18n } from 'vue-i18n'
import de from './i18n/de.json'
const i18n = createI18n({
  fallbackLocale: 'de',
  fallbackWarn: false,
  locale: 'de',
  messages: { de },
  missingWarn: false
})

// PrimeVue
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import HomeView from '../src/views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    }
  ]
})

const app = createApp(App)

app
  .use(i18n)
  .use(router)
  .use(PrimeVue)
  .component('PButton', Button)
  .mount('#app')
