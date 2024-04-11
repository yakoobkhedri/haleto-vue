import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/router'
import AosVue from "aos-vue";
import store from './store/index.js'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'

const app=createApp(App)
app.use(router)
app.use(AosVue)
app.use(store)
app.mount('#app')