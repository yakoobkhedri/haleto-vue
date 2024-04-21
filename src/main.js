import { createApp } from 'vue';
import App from './App.vue';
import router from '../src/router/router';
import AosVue from "aos-vue";
import store from './store/index.js';
import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker'
import './axios'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'



const app=createApp(App)
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
      //...
      //... And whatever you want to set as default.
      //...
    }
  })
app.use(store)
app.mount('#app')