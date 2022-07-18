const PantsStore = {
    namespaced : true ,
    state: {
        pants : [
            {id : 61 , name : 'hagger mens' , image : 'https://m.media-amazon.com/images/I/71bspKxrpOL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '2000'},
            {id : 62 , name : 'dockers' , image : 'https://m.media-amazon.com/images/I/81KUvNkzlQL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45 46' , price : '1000'},
            {id : 63 , name : 'van hausen' , image : 'https://m.media-amazon.com/images/I/71FlV5Bur9L._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '1550'},
            {id : 64 , name : 'werangler' , image : 'https://m.media-amazon.com/images/I/71umZg+vZLL._AC_UL480_FMwebp_QL65_.jpg' , size : '41 42 43 44 45' , price : '2500'},
            {id : 65 , name : 'slim mens' , image : 'https://m.media-amazon.com/images/I/61GpCsrudtL._AC_UL480_FMwebp_QL65_.jpg' , size : '40 41 42 43 44 45' , price : '1200'},
            {id : 66 , name : 'serangler mens' , image : 'https://m.media-amazon.com/images/I/51Oms123AdL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '3000'},
            {id : 67 , name : 'fleecs' , image : 'https://m.media-amazon.com/images/I/71Z4xRVPzEL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '3000'},
            {id : 68 , name : 'classic dockers' , image : 'https://m.media-amazon.com/images/I/514YpxhnM6L._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '5000'},
            {id : 69 , name : 'lee mens' , image : 'https://m.media-amazon.com/images/I/61L+xygbp0S._AC_UL480_FMwebp_QL65_.jpg' , size : '40 41 42 43 44 45' , price : '2000'},
            {id : 70 , name : 'relaxed fit' , image : 'https://m.media-amazon.com/images/I/81y+TabUAIL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '2000'},
            {id : 71 , name : 'van fit' , image : 'https://m.media-amazon.com/images/I/61WFPCR67AL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '2600'},
            {id : 72 , name : 'wrinkels' , image : 'https://m.media-amazon.com/images/I/71-Uc6yT1RL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '2000'},
            {id : 73 , name : 'big tall' , image : 'https://m.media-amazon.com/images/I/71-Uc6yT1RL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '2200'},
            {id : 74 , name : 'suorvior' , image : 'https://m.media-amazon.com/images/I/71sCst2F-vL._AC_UL480_FMwebp_QL65_.jpg' , size : '40 41 42 43 44 45' , price : '7000'},
            {id : 75 , name : 'classic fit' , image : 'https://m.media-amazon.com/images/I/51ICxlh5oYL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '3000'},
            {id : 76 , name : 'cargo' , image : 'https://m.media-amazon.com/images/I/61xEEdjIrlL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '2000'},
            {id : 77 , name : 'golf swi' , image : 'https://m.media-amazon.com/images/I/61qihajnXEL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '3300'},
            {id : 78 , name : 'clavin' , image : 'https://m.media-amazon.com/images/I/71hTmZ4wK3L._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '2000'},
            {id : 79 , name : 'unibay mens' , image : 'https://m.media-amazon.com/images/I/51MQ7qjK2zL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '3000'},
            {id : 80 , name : 'goodmens mens' , image : 'https://m.media-amazon.com/images/I/819ykf-WG-S._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '5000'},
        ]
    },
    getters: {
        getData(state){
            return state.pants
        }
    },
    mutations: {},
    actions: {},
}

export default PantsStore