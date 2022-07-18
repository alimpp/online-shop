import { createStore } from 'vuex'
import ShoesStore from './componentStore/shoesStore'
import JacketsStore from './componentStore/jacketsStore'
import HatsStore from './componentStore/hatsStore'
import PantsStore from './componentStore/pantsStore'
import SportsStore from './componentStore/sportsStore'
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
    HatsStore : HatsStore ,
    PantsStore : PantsStore ,
    SportsStore : SportsStore ,
    // cart store 
    CartStore : CartStore ,
  }
})
