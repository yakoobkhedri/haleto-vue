const toggleMenu={
    state:{
         isOpen: false,
    },
    mutations:{
     toggleMenu(state){
       state.isOpen=!state.isOpen;
     }
    }
  }

  export default toggleMenu;