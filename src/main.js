import { createApp } from 'vue';
import App from './App.vue';
import router from '../src/router/router';
import AosVue from "aos-vue";
import store from './store/index.js';
import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker';
import PrimeVue from "primevue/config"
import { createPinia } from 'pinia'
import Dropdown from 'primevue/dropdown';
import "primevue/resources/themes/mdc-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";


import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'

const app=createApp(App)
app.component('simpleDropdown', Dropdown)

app.use(PrimeVue)
app.use(createPinia())
app.use(router)
app.use(AosVue)
app.use(Vue3PersianDatetimePicker, {
    name: 'CustomDatePicker',
    props: {
      format: 'YYYY-MM-DD HH:mm',
      displayFormat: 'jYYYY-jMM-jDD',
      editable: false,
      inputClass: 'form-control my-custom-class-name',
      placeholder: 'لطفا تاریخ را وارد کنید',
      altFormat: 'YYYY-MM-DD HH:mm',
      color: '#75bf7a',
      autoSubmit: true,
    }
  })
app.use(store)
app.mount('#app')