<template>
 <div class="app-flex-justify-content app-flex-column app-flex-align-items mt-5" style="width:100%;">
     <div class="loading">
    <div class="progress"></div>
  </div>
  <div class="mt-2">
    <span class="app-light-color app-text-size-y loading-anim-text">Loading...!</span>
  </div>
 </div>
</template>

<script>
export default {

}
</script>

<style scoped >
.loading{
    border: 1px solid #fafafa;
    border-radius: 5px;
    width: 300px;
    height: 40px;
    padding: 5px 4px;
}
.progress{
    background: #fafafa;
    border-radius: 2px;
    width: 290px;
    height: 28px;
    animation: 3s loading-anim;
}
.loading-anim-text{animation: 0.5s loading-anim-text infinite;}
@keyframes loading-anim {
    0%{width: 0px;}
    100%{width: 290px;}
}
@keyframes loading-anim-text {
    0%{opacity: 0;}
    100%{opacity: 1;}
}
</style>