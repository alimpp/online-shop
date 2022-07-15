<template>
  <div class="dataCart">
    <div class="container">
       <span class="app-light-color">{{getCart}}</span>
    </div>
  </div>
</template>

<script>
export default {
   computed : {
    getCart(){
        return this.$store.getters['CartStore/getCart']
    }
   }
}
</script>

<style>

</style>