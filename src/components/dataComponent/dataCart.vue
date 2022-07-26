<template>
  <div class="dataCart">
    <div class="container">
       <div class="app-flex-wrap app-flex-justify-content opa-anim"  style="width:100%;">
        <div class="app-cart my-2 mx-2 pointer" v-for="data in getCart" :key="data.id">
            <div class="app-cart-img">
            <img :src="data.image" class="app-img-cart" alt="error">
            </div>
            <div class="app-cart-text px-3 app-flex-justify-content">
                <span class="app-text-size-y app-light-color">Product Name :</span>
                <span class="app-text-size-y app-light-color">{{data.name}}</span>
                <span class="app-text-size-x app-light-color">{{data.price}} $</span>
                <span class="app-text-size-y app-light-color">Sub Total :</span>
                <span class="app-text-size-y app-light-color">{{data.price * data.quantity}}</span>
                <div class="d-flex mt-1">
                 <button class="btn btn-light" @click="increment(data.id)">+</button>
                 <span class="app-text-size-c app-light-color px-2 pt-1">{{data.quantity}}</span>
                 <button class="btn btn-light" @click="decrement(data.id)">-</button>
                 <button class="btn btn-danger mx-2"  @click="deleteProduct(data.id)"><i class="bi bi-trash"></i></button>
                </div>
            </div>
        </div>
      </div>
      <div class="d-flex app-flex-justify-content mt-3">
           <div>
            <button class="app-btn-red mt-2" @click="clearCart">Clear Cart</button>
           </div>
            <span class="app-text-size-y app-light-color px-2 pt-3">Total Price</span>
            <span class="app-text-size-y app-light-color px-2 pt-3">{{totalPrice}} $</span>
      </div>
      <coreFooter/>
    </div>
  </div>
</template>

<script>
import coreFooter from '../coreFooter.vue'
export default {
   components : {coreFooter} ,
   computed : {
    getCart(){
        return this.$store.getters['CartStore/getCart']
    } , 
    totalPrice(){
        return this.$store.getters['CartStore/totalPrice']
    }
   } ,
   methods : {
    increment(id){
      return this.$store.dispatch('CartStore/increment' , id)
    } ,
    decrement(id){
      return this.$store.dispatch('CartStore/decrement' , id)
    } , 
    deleteProduct(id){
      return this.$store.dispatch('CartStore/delete' , id)
    } , 
    clearCart(){
      return this.$store.commit('CartStore/clearCart')
    }
   }
}
</script>

<style>

</style>