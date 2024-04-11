import { createStore } from 'vuex';

const store = createStore({
   state:{
        isOpen: false,
   },
   mutations:{
    closeMenu(state){
      state.isOpen=!state.isOpen;
    }
   }
});

export default store;