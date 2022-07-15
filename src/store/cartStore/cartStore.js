import Swal from 'sweetalert2'

function updateLocalStorage(cart){
    localStorage.setItem('cart' , JSON.stringify(cart))
}

const CartStore = {
    namespaced : true ,
    state: {
        cart : localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [] ,
    },
    getters: {
        getCart(state){
            return state.cart
        } , 
        getCount(state){
            return state.cart.length
        } , 
    },
    mutations: {
        updateCart(state , data){
            const item = state.cart.find(product => product.id == data.id)
            if(!item){
                    state.cart.push({
                    ...data , 
                    quantity : 1
                }) 
            }else{
                item.quantity ++
            }
            updateLocalStorage(state.cart)
        } ,
    },
    actions: {
        addToCart({commit} , data){
          commit('updateCart' , data)
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Product Added',
            showConfirmButton: false,
            timerProgressBar : true , 
            toast : true , 
            timer: 1000
         })
        }
    },
}

export default CartStore