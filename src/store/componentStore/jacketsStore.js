const JacketsStore = {
    namespaced : true ,
    state: {
        jackets : [
            {id : 21 , name : 'male black jacket' , image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmwnkkNc-ZmQK8TQIZo4GdXR-lnbShCaU9k8zzOyZBCcB1TrN-PS4JcowMcuoA-fI2njI&usqp=CAU' , size : '43 44 45' , price : '2000'},
            {id : 22 , name : 'black bomber' , image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwxLteD8kvEwlCWCoHm0YIiEUWLLxWC9_o7shjmm1tBvxYhZi-RaiqHkCRedbOmVMKbQ&usqp=CAU' , size : '43 44 45 46' , price : '1000'},
            {id : 23 , name : 'black jacket' , image : 'https://m.media-amazon.com/images/I/910yzuZklGL._AC_UL480_QL65_.jpg' , size : '43 44 45' , price : '1550'},
            {id : 24 , name : 'blue jacket' , image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRnYaoqsNsVyV7cv3V28IgMDVtTdjkNK-5NndXtgCEHUjWVGzyA5E4ogT6SihADIfhp78&usqp=CAU' , size : '41 42 43 44 45' , price : '2500'},
            {id : 25 , name : 'panda model men' , image : 'https://www.prada.com/content/dam/pradanux_products/2/29X/29X956/1ZT6F0002/29X956_1ZT6_F0002_S_212_SLF.png/jcr:content/renditions/cq5dam.web.hebebed.500.500.jpg' , size : '40 41 42 43 44 45' , price : '1200'},
            {id : 26 , name : 'prada men' , image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmROn9pmzN40mhLKXOok9wsa4p3qqSub_cnjbAmP1rRZx9JWD-NlNaO5qxkwMhiiJVuhE&usqp=CAU' , size : '43 44 45' , price : '3000'},
            {id : 27 , name : 'prada women' , image : 'https://brands-hub.ru/wp-content/uploads/2021/11/Prada-Women-Light-Polyester-Hooded-Puffer-Coat-1.jpg' , size : '43 44 45' , price : '3000'},
            {id : 28 , name : 'orange bomber' , image : 'https://assets.adidas.com/images/w_600,f_auto,q_auto/2824d2f0550c4f0ba730ab9f0120dbfc_9366/Short_Puffer_Jacket_Red_GK8556.jpg' , size : '43 44 45' , price : '5000'},
            {id : 29 , name : 'brown jacket' , image : 'https://assets.adidas.com/images/w_600,f_auto,q_auto/a9d3439ed25449a58fdaab9f011fc479_9366/Short_Puffer_Jacket_Black_GK8554.jpg' , size : '40 41 42 43 44 45' , price : '2000'},
            {id : 30 , name : 'men model' , image : 'https://www.fashionbeans.com/wp-content/uploads/2021/10/CalvinKleinPufferJacket.jpeg' , size : '43 44 45' , price : '2000'},
            {id : 31 , name : 'adidas men' , image : 'https://assets.adidas.com/images/w_600,f_auto,q_auto/dbe3d851e3e14d32beafaaa2017a22e6_9366/Iconic_Tricot_Jacket_Black_CJ9532_01_laydown.jpg' , size : '43 44 45' , price : '2600'},
            {id : 32 , name : 'adidas mens' , image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMR8Pen0JNFh8Dc7NhqP5thnxfndS6kjRzh-gaw1csh_D8IbJTu_CPB9RDRsj1vF9mfA8&usqp=CAU' , size : '43 44 45' , price : '2000'},
            {id : 33 , name : 'adidas sport' , image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo7hvqzAldoja61OK7Nc4YEAXT6xumIHZKOg&usqp=CAU' , size : '43 44 45' , price : '2200'},
            {id : 34 , name : 'nike woman' , image : 'https://4.imimg.com/data4/OM/NY/MY-10764091/mens-nike-jacket-500x500.jpg' , size : '40 41 42 43 44 45' , price : '7000'},
            {id : 35 , name : 'nike sport' , image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yrGUAOHN32wIje6BLfe1qj_f_rco0o1e9A&usqp=CAU' , size : '43 44 45' , price : '3000'},
            {id : 36 , name : 'nike full' , image : 'https://belk.scene7.com/is/image/Belk?layer=0&src=3200193_727324_A_101_T10L00&layer=comp&$DWP_PRODUCT_PDP_LARGE$' , size : '43 44 45' , price : '2000'},
            {id : 37 , name : 'nike full black' , image : 'https://cdn-images.farfetch-contents.com/18/18/03/06/18180306_38693909_300.jpg' , size : '43 44 45' , price : '3300'},
            {id : 38 , name : 'nike jacket' , image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4Aw9xe7eOa8Ghwfc__0OOxjYlYVY0tzio35ZAWf4C4v1VEs9itk8PXeolbDsF6ds8rk&usqp=CAU' , size : '43 44 45' , price : '2000'},
            {id : 39 , name : 'nike woman sport' , image : 'https://thumblr.uniid.it/product/184509/a8550ec2d416.jpg' , size : '43 44 45' , price : '3000'},
            {id : 40 , name : 'woamn sport' , image : 'https://cdn.idealo.com/folder/Product/7028/8/7028852/s1_produktbild_gross_2/nike-dry-academy-18-trainingsjacke.jpg' , size : '43 44 45' , price : '5000'},
        ]
    },
    getters: {
        getData(state){
           return state.jackets
        }
    },
    mutations: {},
    actions: {},
}

export default JacketsStore