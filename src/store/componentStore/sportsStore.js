const SportsStore = {
    namespaced : true ,
    state: {
        sports : [
            {id : 81 , name : 'under armour' , image : 'https://m.media-amazon.com/images/I/41l2imvuWJL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '2000'},
            {id : 82 , name : 'nutica' , image : 'https://m.media-amazon.com/images/I/61SNUXUcDmS._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45 46' , price : '1000'},
            {id : 83 , name : 'adidas mens x' , image : 'https://m.media-amazon.com/images/I/71xnVsKmUdL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '1550'},
            {id : 84 , name : 'under armor' , image : 'https://m.media-amazon.com/images/I/71xnVsKmUdL._AC_UL480_FMwebp_QL65_.jpg' , size : '41 42 43 44 45' , price : '2500'},
            {id : 85 , name : 'cap sport' , image : 'https://m.media-amazon.com/images/I/915x-SaI2uL._AC_UL480_FMwebp_QL65_.jpg' , size : '40 41 42 43 44 45' , price : '1200'},
            {id : 86 , name : 'giama woamns' , image : 'https://m.media-amazon.com/images/I/81Lwjn8YbjL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '3000'},
            {id : 87 , name : 'russel shirt' , image : 'https://images-na.ssl-images-amazon.com/images/I/51zqruub4JL._AC._SR180,230.jpg' , size : '43 44 45' , price : '3000'},
            {id : 88 , name : 'slevee' , image : 'https://images-na.ssl-images-amazon.com/images/I/61w9fXUVZtL._AC._SR360,460.jpg' , size : '43 44 45' , price : '5000'},
            {id : 89 , name : 'appreal' , image : 'https://m.media-amazon.com/images/I/31V8Jc2VLtL._AC._SR360,460.jpg' , size : '40 41 42 43 44 45' , price : '2000'},
            {id : 90 , name : 'deal mens' , image : 'https://m.media-amazon.com/images/I/51yi1K6jVNL._AC._SR360,460.jpg' , size : '43 44 45' , price : '2000'},
            {id : 91 , name : 'spanish shirt' , image : 'https://m.media-amazon.com/images/I/61mm0WwdpaL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '2600'},
            {id : 92 , name : 'itlay shirt' , image : 'https://m.media-amazon.com/images/I/31JUFD344ML._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '2000'},
            {id : 93 , name : 'koear shirt womans' , image : 'https://m.media-amazon.com/images/I/61H67Dp+yhL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '2200'},
            {id : 94 , name : 'ball football' , image : 'https://m.media-amazon.com/images/I/71cTqYFokQL._AC_UL480_FMwebp_QL65_.jpg' , size : '40 41 42 43 44 45' , price : '7000'},
            {id : 95 , name : 'classic select' , image : 'https://m.media-amazon.com/images/I/71VnUTk4pqS._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '3000'},
            {id : 96 , name : 'gaiam' , image : 'https://m.media-amazon.com/images/I/71VnUTk4pqS._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '2000'},
            {id : 97 , name : 'nike mens' , image : 'https://m.media-amazon.com/images/I/81Xcmin6iuL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '3300'},
            {id : 98 , name : 'unix mens' , image : 'https://m.media-amazon.com/images/I/71sIdEPiXbL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '2000'},
            {id : 99 , name : 'superfily' , image : 'https://m.media-amazon.com/images/I/61aKhVfit1L._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '3000'},
        ]
    },
    getters: {
        getData(state){
            return state.sports
        }
    },
    mutations: {},
    actions: {},
}

export default SportsStore