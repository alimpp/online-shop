<template>
  <div class="navigationbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" style="color:blue;">Online Shop</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <i class="bi bi-list app-light-color app-text-size-b"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="link mx-2 py-1 app-light-color">Home</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/shoes" class="link mx-2 py-1 app-light-color">shoes</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/jackets" class="link mx-2 py-1 app-light-color">Jackets</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/tshirt" class="link mx-2 py-1 app-light-color">T-Shirt</router-link>
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
         <li class="nav-item">
          <router-link to="/buybasket" class="link mx-2 py-1 app-light-color"><i class="bi bi-bag-plus-fill"></i></router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped >
.router-link-active{border-bottom: 1px solid #fafafa;}
</style>