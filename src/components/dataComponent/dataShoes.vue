<template>
  <div class="dataShoes">
     <div class="container">
        <loading v-if="loading"/>
        <div v-else class="app-flex-wrap app-flex-justify-content opa-anim"  style="width:100%;">
        <div class="app-cart my-2 mx-2 pointer" v-for="data in getShoes" :key="data.id">
           <router-link :to="`/shoes/${data.id}`" class="app-flex-wrap app-flex-justify-content link">
                <div class="app-cart-img">
                <img :src="data.image" class="app-img-cart" alt="error">
                </div>
                <div class="app-cart-text px-3 app-flex-justify-content">
                    <span class="app-text-size-y app-light-color">Product Name :</span>
                    <span class="app-text-size-y app-light-color">{{data.name}}</span>
                    <span class="app-text-size-y app-light-color">Size :</span>
                    <span class="app-text-size-y app-light-color">{{data.size}}</span>
                    <span class="app-text-size-x app-light-color">{{data.price}} $</span>
                    <div> 
                    <button class="app-btn-blue mt-2">Add To Cart</button>
                    </div>
                </div>
           </router-link>
        </div>
      </div>
     </div>
  </div>
</template>

<script>
import loading from '../loading.vue'
export default {
    data(){
        return{
          loading : false
        }
    } ,
   mounted(){
     this.loading = true 
     setTimeout( () => {
        this.loading = false
     } , 3000)
   } ,
   components : {loading} ,
   computed : {
    getShoes(){
        return this.$store.getters['ShoesStore/getShoes']
    }
   }
}
</script>

<style>

</style>