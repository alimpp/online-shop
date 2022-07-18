const HatsStore = {
    namespaced : true ,
    state: {
        hats : [
            {id : 41 , name : 'black mens' , image : 'https://media.istockphoto.com/photos/hat-on-white-background-picture-id526131500?k=20&m=526131500&s=170667a&w=0&h=oqI3_4EK5j4iUPp1Uk3BBvLx2acb5mPN-vJKh67xnmg=' , size : '43 44 45' , price : '2000'},
            {id : 42 , name : 'black light' , image : 'https://www.usnews.com/object/image/00000181-deef-dad4-a58f-feef5c8b0001/hat-gill.jpg?update-time=1657302880597&size=responsiveFlow300' , size : '43 44 45 46' , price : '1000'},
            {id : 43 , name : 'rvs Mens' , image : 'https://m.media-amazon.com/images/I/81ZZN924pWL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '1550'},
            {id : 44 , name : 'adidas mens' , image : 'https://m.media-amazon.com/images/I/81fobZZxLES._AC_UL480_FMwebp_QL65_.jpg' , size : '41 42 43 44 45' , price : '2500'},
            {id : 45 , name : 'Flexfit Men' , image : 'https://m.media-amazon.com/images/I/61pSuZP7SVL._AC_UL480_FMwebp_QL65_.jpg' , size : '40 41 42 43 44 45' , price : '1200'},
            {id : 46 , name : 'puma womans' , image : 'https://m.media-amazon.com/images/I/91Uzaia0b6L._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '3000'},
            {id : 47 , name : 'armour' , image : 'https://m.media-amazon.com/images/I/71xEQ8tZtnL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '3000'},
            {id : 48 , name : 'wolcom' , image : 'https://m.media-amazon.com/images/I/81+Be8JEcYL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '5000'},
            {id : 49 , name : 'callaway' , image : 'https://m.media-amazon.com/images/I/71gTztzMD8L._AC_UL480_FMwebp_QL65_.jpg' , size : '40 41 42 43 44 45' , price : '2000'},
            {id : 50 , name : 'outdoor' , image : 'https://m.media-amazon.com/images/I/A1IXSz69KyL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '2000'},
            {id : 51 , name : 'golf' , image : 'https://m.media-amazon.com/images/I/81iiu3TDcKL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '2600'},
            {id : 52 , name : 'concept' , image : 'https://m.media-amazon.com/images/I/61JThfYb3XL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '2000'},
            {id : 53 , name : 'columbia' , image : 'https://m.media-amazon.com/images/I/71A3vT-pERS._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '2200'},
            {id : 54 , name : 'costa delf' , image : 'https://m.media-amazon.com/images/I/71CDU2BZ7iL._AC_UL480_FMwebp_QL65_.jpg' , size : '40 41 42 43 44 45' , price : '7000'},
            {id : 55 , name : 'woman full' , image : 'https://m.media-amazon.com/images/I/817JGtQ9tQL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '3000'},
            {id : 56 , name : 'roxy' , image : 'https://m.media-amazon.com/images/I/71LmC2wGMML._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '2000'},
            {id : 57 , name : 'mesh snap' , image : 'https://m.media-amazon.com/images/I/71vhQvGgEIL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '3300'},
            {id : 58 , name : 'white golf' , image : 'https://m.media-amazon.com/images/I/81WmHHx51uL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '2000'},
            {id : 59 , name : 'black snap' , image : 'https://m.media-amazon.com/images/I/71mvl2ZPgEL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '3000'},
            {id : 60 , name : 'okley' , image : 'https://m.media-amazon.com/images/I/819RiX6ckNL._AC_UL480_FMwebp_QL65_.jpg' , size : '43 44 45' , price : '5000'},
        ]
    },
    getters: {
        getData(state){
            return state.hats
        }
    },
    mutations: {},
    actions: {},
}

export default HatsStore