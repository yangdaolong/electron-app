import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import piniaPluginPersist from 'pinia-plugin-persist'
import { createPinia } from 'pinia'
const store = createPinia()
store.use(piniaPluginPersist)

createApp(App).use(router).use(store).mount('#app')
