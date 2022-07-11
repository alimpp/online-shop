<template>
 <div class="app-flex-justify-content app-flex-column app-flex-align-items mt-5" style="width:100%;">
    <div class="loader"></div>
    <div class="mt-2">
        <span class="app-light-color app-text-size-x loading-anim-text">Loading...!</span>
    </div>
 </div>
</template>

<script>
export default {

}
</script>

<style scoped >
.loader  {
  animation: rotate 1s infinite;  
  height: 50px;
  width: 50px;
}

.loader:before,
.loader:after {   
  border-radius: 50%;
  content: '';
  display: block;
  height: 20px;  
  width: 20px;
}
.loader:before {
  animation: ball1 1s infinite;  
  background-color: #fafafa;
  box-shadow: 30px 0 0 #fafafa;
  margin-bottom: 10px;
}
.loader:after {
  animation: ball2 1s infinite; 
  background-color: #fafafa;
  box-shadow: 30px 0 0 #fafafa;
}

@keyframes rotate {
  0% { 
    -webkit-transform: rotate(0deg) scale(0.8); 
    -moz-transform: rotate(0deg) scale(0.8);
  }
  50% { 
    -webkit-transform: rotate(360deg) scale(1.2); 
    -moz-transform: rotate(360deg) scale(1.2);
  }
  100% { 
    -webkit-transform: rotate(720deg) scale(0.8); 
    -moz-transform: rotate(720deg) scale(0.8);
  }
}

@keyframes ball1 {
  0% {
    box-shadow: 30px 0 0 #fafafa;
  }
  50% {
    box-shadow: 0 0 0 #fafafa;
    margin-bottom: 0;
    -webkit-transform: translate(15px,15px);
    -moz-transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 #fafafa;
    margin-bottom: 10px;
  }
}

@keyframes ball2 {
  0% {
    box-shadow: 30px 0 0 #fafafa;
  }
  50% {
    box-shadow: 0 0 0 #fafafa;
    margin-top: -20px;
    -webkit-transform: translate(15px,15px);
    -moz-transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 #fafafa;
    margin-top: 0;
  }
}
.loading-anim-text{animation: 0.5s loading-anim-text infinite;}
@keyframes loading-anim-text {
    0%{opacity: 0;}
    100%{opacity: 1;}
}
</style>