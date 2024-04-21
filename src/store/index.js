import { createStore } from 'vuex';
import toggleMenu from './modules/toggleMenu.js';
import login from './modules/login.js';

const store = createStore({
  modules:{
    toggleMenu,
    login
  }
});

export default store;