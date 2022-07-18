import { createStore } from 'vuex'
import ShoesStore from './componentStore/shoesStore'
import JacketsStore from './componentStore/jacketsStore'
import CartStore from './cartStore/cartStore'
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    //components store
    ShoesStore : ShoesStore , 
    JacketsStore : JacketsStore ,

    // cart store 
    CartStore : CartStore ,
  }
})
