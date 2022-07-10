<template>
  <div class="dataHome">
    <div class="container opa-anim">
        <div class="row" style="height:100vh;">
            <div class="col-lg-6 my-3 app-flex-column app-flex-justify-content">
                <span class="app-blue-color app-text-size-x">Welocome To My Online Shop</span>
                <span class="app-light-color app-text-size-z">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quo odit, consequuntur cupiditate animi non. Nulla vero nemo consequuntur est quibusdam corrupti quam similique, distinctio aut labore illum inventore! Repellat...</span>
                <div>
                    <button class="app-btn-light mt-3" @click="started">Get Started</button>
                </div>
            </div>
            <div class="col-lg-6 app-flex-align-items app-flex-justify-content">
                <img style="width:350px; height:350px; border-radius:50%;" src="https://img.freepik.com/free-vector/cartoon-style-cafe-front-shop-view_134830-697.jpg?w=2000" alt="Error">
            </div>
        </div>
        <div class="row" ref="started">
            <div class="row mt-2">
                <div class="col-lg-4 app-flex-justify-content app-flex-column my-2">
                    <img style="width:350px; height:250px;border-radius:50%;" src="https://media.istockphoto.com/vectors/start-up-launch-venture-entrepreneurship-concept-with-tiny-character-vector-id1316676285?b=1&k=20&m=1316676285&s=612x612&w=0&h=elgTABSI9Q6mQfs_y9ozBFz6KC0GG8tmWxRmmbCOe5M=" alt="">
                    <span class="app-blue-color app-text-size-x py-1">Best Sale Lorem ipsum</span>
                    <span class="app-light-color app-text-size-z py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa aspernatur praesentium harum consectetur eum sed expedita dolores corporis amet repellendus blanditiis, sunt nemo. Natus dolorem quibusdam animi quam officia?</span>
                    <div>
                        <button class="app-btn-yellow my-2" @click="goToSale">Best Sale</button>
                    </div>
                </div>
                <div class="col-lg-4 app-flex-justify-content app-flex-column my-2">
                    <img style="width:350px; height:250px;border-radius:50%;" src="https://media.istockphoto.com/vectors/flat-cartoon-character-vector-id1156845835?b=1&k=20&m=1156845835&s=612x612&w=0&h=Xk5YiO1RD95codmT_K288rx-_TI_HxXo7SibirhYPyM=" alt="">
                    <span class="app-blue-color app-text-size-x py-1">About Update Shop Lorem ipsum</span>
                    <span class="app-light-color app-text-size-z py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa aspernatur praesentium harum consectetur eum sed expedita dolores corporis amet repellendus blanditiis, sunt nemo. Natus dolorem quibusdam animi quam officia?</span>
                    <div>
                        <button class="app-btn-red my-2" @click="goToUpdate">About Update</button>
                    </div>
                </div>
                <div class="col-lg-4 app-flex-justify-content app-flex-column my-2">
                    <img style="width:350px; height:250px;border-radius:50%;" src="https://img.freepik.com/free-vector/shop-with-we-are-open-sign_23-2148557016.jpg?w=2000" alt="">
                    <span class="app-blue-color app-text-size-x py-1">About Store Lorem ipsum</span>
                    <span class="app-light-color app-text-size-z py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa aspernatur praesentium harum consectetur eum sed expedita dolores corporis amet repellendus blanditiis, sunt nemo. Natus dolorem quibusdam animi quam officia?</span>
                    <div>
                        <button class="app-btn-light-dark my-2" @click="goToAbout">About Store</button>
                    </div>
                </div>
            </div>
        </div>

        
        <div class="app-flex-column mt-5" ref="sale">
            <span class="app-blue-color app-text-size-c py-1">Best Sale Lorem ipsum</span>
            <span class="app-light-color app-text-size-z py-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolorem, nihil voluptatibus odit voluptas repellat ad doloremque neque exercitationem quod culpa nemo, ratione laborum totam dolore? Sit earum illum modi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio non, corporis atque, sed commodi nulla enim architecto accusantium quasi exercitationem eveniet impedit natus dicta, vitae similique saepe quos minima porro.</span>      
        </div>
         <div class="app-flex-column mt-5" ref="update">
            <span class="app-blue-color app-text-size-c py-1">About Update Shop Lorem ipsum</span>
            <span class="app-light-color app-text-size-z py-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolorem, nihil voluptatibus odit voluptas repellat ad doloremque neque exercitationem quod culpa nemo, ratione laborum totam dolore? Sit earum illum modi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio non, corporis atque, sed commodi nulla enim architecto accusantium quasi exercitationem eveniet impedit natus dicta, vitae similique saepe quos minima porro.</span>      
        </div>
         <div class="app-flex-column mt-5" ref="about">
            <span class="app-blue-color app-text-size-c py-1">About store Lorem ipsum</span>
            <span class="app-light-color app-text-size-z py-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dolorem, nihil voluptatibus odit voluptas repellat ad doloremque neque exercitationem quod culpa nemo, ratione laborum totam dolore? Sit earum illum modi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio non, corporis atque, sed commodi nulla enim architecto accusantium quasi exercitationem eveniet impedit natus dicta, vitae similique saepe quos minima porro.</span>      
        </div>

        <div class="row my-5">
            <div class="col-lg-6">
                <img style="width:100%; height:400px;border-radius:10px;" src="https://img.pixers.pics/pho_wat(s3:700/FO/39/97/85/42/700_FO39978542_3d72ac6bb2914f4a63330ef93bb4b186.jpg,700,504,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,454,jpg)/wall-murals-central-london-vector-map.jpg.jpg" alt="Error">
            </div>
            <div class="col-lg-6 app-flex-column mt-3">
                <span class="app-text-size-z app-light-color">You Can Send The Ticket...</span>
                <input type="text" class="ticket" placeholder="Your Name">
                <input type="text" class="ticket" placeholder="Email">
                <textarea rows="5" class="ticket-message" placeholder="Message"></textarea>
                <div>
                    <button class="app-btn-blue">Send Ticket</button>
                </div>
            </div>
        </div>
        

    </div>
  </div>
</template>

<script>
export default {
   methods : {
    started(){
       const elem = this.$refs.started
       elem.scrollIntoView()
    } ,
    goToSale(){
        const elem = this.$refs.sale 
        elem.scrollIntoView()
    } , 
    goToUpdate(){
        const elem = this.$refs.update 
        elem.scrollIntoView()
    } ,
    goToAbout(){
        const elem = this.$refs.about 
        elem.scrollIntoView()
    } ,
   }
}
</script>

<style scoped >
.ticket{
    border: none;
    margin: 5px 0px;
    border-radius: 5px;
    padding: 5px 5px;
    outline: none;
    height: 35px;
}
.ticket-message{
    border: none;
    margin: 5px 0px;
    border-radius: 5px;
    padding: 5px 5px;
    outline: none;
}
</style>