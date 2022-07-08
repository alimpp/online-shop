<template>
  <div class="app">
    <navigationbar/>
    <router-view/>
  </div>
</template>

<script>
import navigationbar from './components/navigationbar.vue'
export default {
  components : {navigationbar}
}
</script>

<style>

</style>
