const toggleMenu={
    state:{
         isOpen: false,
    },
    mutations:{
     toggleMenu(state){
       state.isOpen=!state.isOpen;
     }
    },
    actions:{
      toggleMenu(state){
        state.isOpen=!state.isOpen;
      }
     }
  }

  export default toggleMenu;