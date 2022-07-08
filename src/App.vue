<template>
  <div class="app">
    <navigationbar/>
    <div class="app-router bg-dark scrollbar">
       <router-view/>
    </div>
  </div>
</template>

<script>
import navigationbar from './components/navigationbar.vue'
export default {
  components : {navigationbar}
}
</script>

<style scoped >
.app-router{width: 100%; height: 95vh; overflow: scroll;}
</style>
