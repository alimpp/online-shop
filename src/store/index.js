import { createStore } from 'vuex'
import ShoesStore from './componentStore/shoesStore'
import CartStore from './cartStore/cartStore'
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ShoesStore : ShoesStore , 
    CartStore : CartStore ,
  }
})
