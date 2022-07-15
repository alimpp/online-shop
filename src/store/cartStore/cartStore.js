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
        totalPrice(state){
            return state.cart.reduce((total , product) => {
                return total + product.price * product.quantity
            } , 0)
        }
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
        clearCart(state){
            localStorage.removeItem('cart')
            Swal.fire({
                position: 'top',
                icon: 'warning',
                title: 'Cart Clear',
                showConfirmButton: false,
                timerProgressBar : true , 
                toast : true , 
                timer: 1000
            })
            return state.cart = []
        } ,
        incrementQuantity(state , id){
            const item = state.cart.find(product => product.id == id)
            if(item){
                item.quantity++
            }
            updateLocalStorage(state.cart)
        } , 
        decrementQuantity(state , id){
            const item = state.cart.find(product => product.id == id)
            if(item){
                if(item.quantity > 1){
                    item.quantity--
                }
            }
            updateLocalStorage(state.cart)
        } , 
        deleteItem(state , id){
            state.cart = state.cart.filter(cart => cart.id != id)
            updateLocalStorage(state.cart)
        }
    },
    actions: {
        addToCart({commit} , data){
          commit('updateCart' , data)
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Shoes Added',
            showConfirmButton: false,
            timerProgressBar : true , 
            toast : true , 
            timer: 1000
         })
        } ,
        increment({commit} , id){
            commit('incrementQuantity' , id)
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Product Updated',
                showConfirmButton: false,
                timerProgressBar : true , 
                toast : true , 
                timer: 1000
            })
       } , 
       decrement({commit} , id){
            commit('decrementQuantity' , id)
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Product Updated',
                showConfirmButton: false,
                timerProgressBar : true , 
                toast : true , 
                timer: 1000
            })
       } , 
       delete({commit} , id){
            commit('deleteItem' , id)
            Swal.fire({
                position: 'top',
                icon: 'warning',
                title: 'Product Deleted',
                showConfirmButton: false,
                timerProgressBar : true , 
                toast : true , 
                timer: 1000
            })
       }
    },
}

export default CartStore