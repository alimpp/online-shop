<template>
  <div class="dataSports">
     <div class="container">
       <div class="row app-flex-justify-content opa-anim" v-if="!loading">
            <div class="col-lg-10 my-3">
                <input type="text" class="form-control" placeholder="Search Product" v-model="search">
            </div>
      </div>
        <loading v-if="loading"/>
        <div v-else class="app-flex-wrap app-flex-justify-content opa-anim"  style="width:100%;">
        <div class="app-cart my-2 mx-2 pointer opa-anim" v-for="data in dataSource" :key="data.id">
           <router-link :to="`/sports/${data.id}`" class="app-flex-justify-content link">
                <div class="app-cart-img">
                <img :src="data.image" class="app-img-cart" alt="error">
                </div>
           </router-link>
                <div class="app-cart-text px-3 app-flex-justify-content">
                  <router-link :to="`/sports/${data.id}`" class="app-flex-column link">
                    <span class="app-text-size-y app-light-color">Product Name :</span>
                    <span class="app-text-size-y app-light-color">{{data.name}}</span>
                    <span class="app-text-size-x app-light-color">{{data.price}} $</span>
                      <div class="d-flex">
                        <i class="bi bi-star-fill" style="color:yellow;"></i>
                        <i class="bi bi-star-fill" style="color:yellow;"></i>
                        <i class="bi bi-star-fill" style="color:yellow;"></i>
                        <i class="bi bi-star-fill" style="color:yellow;"></i>
                        <i class="bi bi-star-fill" style="color:yellow;"></i>
                      </div>
                  </router-link>
                    <div> 
                    <button class="app-btn-blue mt-2" @click="addToCart(data)">Add To Cart</button>
                    </div>
                </div>
       
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
          loading : false , 
          search : ''
        }
    } ,
   mounted(){
     this.loading = true 
     setTimeout( () => {
        this.loading = false
     } , 2000)
   } ,
   components : {loading} ,
   computed : {
    dataSource(){
        const products = this.$store.getters['SportsStore/getData']
        return products.filter(product => {
          return product.name.match(this.search)
        })
    }
   } , 
   methods : {
      addToCart(data){
         return this.$store.dispatch('CartStore/addToCart' , data)
      }
   }
}
</script>

<style>

</style>