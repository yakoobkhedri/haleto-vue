import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import AosVue from "aos-vue";

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'

const app=createApp(App)
app.use(router)
app.use(AosVue)
app.mount('#app')
