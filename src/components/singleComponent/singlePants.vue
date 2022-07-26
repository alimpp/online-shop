<template>
  <div class="singlePants opa-anim">
    <div class="container" style="height: 95vh;">
      <div class="row mt-5">
        <div class="col-lg-6 app-flex-justify-content">
          <img :src="singlePants.image" alt="Error" style="width:70%; height:330px; border-radius:5px;">
        </div>
        <div class="col-lg-6 app-flex-column app-flex-justify-content px-5 mt-2">
          <span class="app-text-size-x app-light-color">Product Name</span>
          <span class="app-text-size-z app-light-color">{{singlePants.name}}</span>
          <span class="app-text-size-x app-light-color">Size</span>
          <span class="app-text-size-y app-light-color">{{singlePants.size}}</span>
          <span class="app-text-size-x app-light-color">Price</span>
          <span class="app-text-size-y app-light-color">{{singlePants.price}} $</span>
          <div class="d-flex mt-2">
            <i class="bi bi-star-fill" style="color:yellow;"></i>
            <i class="bi bi-star-fill" style="color:yellow;"></i>
            <i class="bi bi-star-fill" style="color:yellow;"></i>
            <i class="bi bi-star-fill" style="color:yellow;"></i>
            <i class="bi bi-star-fill" style="color:yellow;"></i>
          </div>
          <div>
            <button class="app-btn-blue mt-2" @click="addToCart(singlePants)">Add To Cart</button>
            <button class="app-btn-yellow mt-2 mx-2" @click="back">Back To Pants</button>
          </div>
        </div>
      </div>
      <div class="d-flex mt-3 px-5">
        <span class="app-text-size-y app-light-color pointer" @click="descriptions">Description |</span>
        <span class="app-text-size-y app-light-color px-2 pointer" @click="comment">Comments</span>
      </div>
      <div class="d-flex px-5 py-3 app-flex-column opa-anim" v-if="description">
         <span class="app-text-size-x app-blue-color">About Product</span>
         <span class="app-text-size-z app-light-color">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga iste ducimus doloribus ut odit recusandae quaerat sapiente consectetur, eveniet maiores voluptatibus quia earum nihil harum. Dolorum libero aperiam architecto nostrum? Lorem ipsum dolor sit amet consectetur adipisicing elit. In architecto ducimus obcaecati porro ab minima a, velit est illo cumque ad optio adipisci odit dolorum. Aut repellendus molestiae nobis atque Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia molestias quasi corrupti perspiciatis ipsam maxime amet numquam, illo ab, eos eveniet possimus iure consequatur adipisci soluta alias autem perferendis.</span>
      </div>
      <comments v-if="comments"/>
      <coreFooter/>
    </div>
  </div>
</template>

<script>
import comments from '../comments.vue'
import coreFooter from '../coreFooter'
export default {
    components : {comments , coreFooter} ,
    data(){
      return{
        pants : [] , 
        singlePants : [] ,
        description : true , 
        comments : false ,
      }
    } , 
    mounted(){
      this.pants = this.$store.getters['PantsStore/getData']
      this.singlePants = this.pants.find(p => p.id == this.$route.params.id)
    } , 
    methods : {
      descriptions(){
          this.description = true 
          this.comments = false 
      } , 
      comment(){
        this.comments = true 
        this.description = false
      } , 
      addToCart(id){
        return this.$store.dispatch('CartStore/addToCart' , id)
      } , 
      back(){
        return this.$router.push('/pants')
      }
    }
}
</script>

<style>

</style>