import { createStore } from 'vuex';
import toggleMenu from './modules/toggleMenu.js';
import auth from './modules/auth.js';

const store = createStore({
  modules:{
    toggleMenu,
    auth
  }
});

export default store;