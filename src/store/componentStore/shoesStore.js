const ShoesStore = {
    namespaced : true ,
    state: {
        shoes : [
            {id : 1 , name : 'black sneakers' , image : 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aa45540e-ad2a-40b5-a132-ff89d7cdfc33/air-zoom-alphafly-next-flyknit-mens-road-racing-shoes-fNntgL.png' , size : '43 44 45' , price : '2000'},
            {id : 2 , name : 'black stock' , image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuzfc3_J0_U4UgmHvVCtEBD1MFFX75fD79Gg&usqp=CAU' , size : '43 44 45 46' , price : '1000'},
            {id : 3 , name : 'vans ' , image : 'https://www.kindpng.com/picc/m/180-1805449_transparent-white-vans-png-vans-shoes-transparent-background.png' , size : '43 44 45' , price : '1550'},
            {id : 4 , name : 'sport minimal' , image : 'https://img.freepik.com/premium-photo/running-shoes-white-background_10541-635.jpg?w=2000' , size : '41 42 43 44 45' , price : '2500'},
            {id : 5 , name : 'sport gray' , image : 'https://img.freepik.com/premium-photo/blue-sport-running-shoes-white-background-sports-shoes-blue-color-trendy-sport-footwear_256259-2485.jpg?w=2000' , size : '40 41 42 43 44 45' , price : '1200'},
            {id : 6 , name : 'puma vegas' , image : 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/369573/01/sv01/fnd/PNA/fmt/png' , size : '43 44 45' , price : '3000'},
            {id : 7 , name : 'puma sneakers' , image : 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/369573/15/sv01/fnd/IND/fmt/png' , size : '43 44 45' , price : '3000'},
            {id : 8 , name : 'leater white' , image : 'https://www.shoesmade4me.com/7801-large/white-leather-shoes-for-men-with-steel-buckle.jpg' , size : '43 44 45' , price : '5000'},
            {id : 9 , name : 'versatile black' , image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTskR-F8SNqrosvGdmbyAG8YqbSv7_OQIlc-B9wOGZiL1QMEOHzkye2yCRj0YuryeaNJnk&usqp=CAU' , size : '40 41 42 43 44 45' , price : '2000'},
            {id : 10 , name : 'versatile brown' , image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfFdXy_U4iFHxI4LdjrTemGeLziqT8MVT0OCKjj0oKqfsF8WyIAyNmfma-egBTZ-C448&usqp=CAU' , size : '43 44 45' , price : '2000'},
            {id : 11 , name : 'black sport' , image : 'https://assets.reebok.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/999a931b5fcf463bb181ab96015d6905_9366/trail-cruiser-mens-shoes.jpg' , size : '43 44 45' , price : '2600'},
            {id : 12 , name : 'magic sport' , image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamcEOe5hhkuK74220z6Rjsx3jYJn9hU0YEE1FsflbRMSVtGMmHjF8wOt2QBeWodk0EWs&usqp=CAU' , size : '43 44 45' , price : '2000'},
            {id : 13 , name : 'black magic' , image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOK_MpG2Jpk1d2PFi8RgmtEEF2JrU0S2omP4nvhFSnstn0w1pFChHJaKjDpsC20tfoQJ0&usqp=CAU' , size : '43 44 45' , price : '2200'},
            {id : 14 , name : 'adidas black' , image : 'https://assets.adidas.com/images/w_600,f_auto,q_auto/49420bea1c664fe09e47acbc01162588_9366/NMD_R1_Primeblue_Shoes_Black_GZ9258.jpg' , size : '40 41 42 43 44 45' , price : '7000'},
            {id : 15 , name : 'nike black' , image : 'https://s3.amazonaws.com/nikeinc/assets/84925/Sp19_BB_Nike_Adapt_20181218_NIKE0538_Detail5_rectangle_1600.jpg?1547068102' , size : '43 44 45' , price : '3000'},
            {id : 16 , name : 'puma black' , image : 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/383052/06/sv01/fnd/IND/fmt/png/Supertec-Men-Shoes' , size : '43 44 45' , price : '2000'},
            {id : 17 , name : 'puma sport sneakers' , image : 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/374765/09/sv01/fnd/IND/fmt/png/PUMA-Rebound-JOY-SoftFoam+-Shoes' , size : '43 44 45' , price : '3300'},
            {id : 18 , name : 'adidas super star' , image : 'https://assets.adidas.com/images/w_600,f_auto,q_auto/3d0933f855c445fea224aad600bac8b7_9366/Superstar_Shoes_White_EG4958_09_standard.jpg' , size : '43 44 45' , price : '2000'},
            {id : 19 , name : 'adidas fantasty' , image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj7Vmct8uCO4MTxe6SPOTUG3BvJ9ghxq-fxw&usqp=CAU' , size : '43 44 45' , price : '3000'},
            {id : 20 , name : 'nike fantasy' , image : 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2d484182-8596-4d88-aa63-3d594d010d4a/pg-6-ep-basketball-shoes-9KkDtr.png' , size : '43 44 45' , price : '5000'},
        ]
    },
    getters: {
        getData(state){
            return state.shoes
        }
    },
    mutations: {},
    actions: {},
}

export default ShoesStore