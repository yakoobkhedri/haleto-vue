import { createStore } from 'vuex';
import toggleMenu from './modules/toggleMenu.js';

const store = createStore({
  modules:{
    toggleMenu,
  }
});

export default store;