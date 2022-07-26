<template>
  <div class="navigationbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" style="color:#A084CF;">SHOPPING CART</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <i class="bi bi-list app-light-color app-text-size-b"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="link mx-2 py-1 app-light-color">Home</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/shoes" class="link mx-2 py-1 app-light-color">Shoes</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/jackets" class="link mx-2 py-1 app-light-color">Jackets</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/hats" class="link mx-2 py-1 app-light-color">Hats</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/pants" class="link mx-2 py-1 app-light-color">Pants</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/sports" class="link mx-2 py-1 app-light-color">Sports</router-link>
        </li>
      </ul>
      <form class="d-flex">
       <div> <router-link to="/cart" class="link"><i class="bi bi-bag-plus-fill app-light-color"  style="font-size:30px;"></i></router-link></div>
       <div class="mb-2 mx-1"> <span class="badge app-red-bg">{{getCount}}</span></div>
      </form>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  computed : {
    getCount(){
      return this.$store.getters['CartStore/getCount']
    }
  }
}
</script>

<style scoped >
.router-link-active{border-bottom: 1px solid #fafafa;}
</style>