import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home'
import shoes from '../views/shoes'
import jackets from '../views/jackets'
import hats from '../views/hats'
import pants from '../views/pants'
import sports from '../views/sports'
import cart from '../views/cart'
import singleShoes from '../components/singleComponent/singleShoes'
import singleJacket from '../components/singleComponent/singleJacket'
import singleHats from '../components/singleComponent/singleHats'
import singlePants from '../components/singleComponent/singlePants'
const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/shoes',
    name: 'shoes',
    component: shoes
  },
  {
    path: '/shoes/:id',
    name: 'singleShoes',
    component: singleShoes
  },
  {
    path: '/jackets',
    name: 'jackets',
    component: jackets
  },
  {
    path: '/jackets/:id',
    name: 'singleJacket',
    component: singleJacket
  },
  {
    path: '/hats',
    name: 'hats',
    component: hats
  },
  {
    path: '/hats/:id',
    name: 'singleHats',
    component: singleHats
  },
  {
    path: '/pants',
    name: 'pants',
    component: pants
  },
  {
    path: '/pants/:id',
    name: 'singlePants',
    component: singlePants
  },
  {
    path: '/sports',
    name: 'sports',
    component: sports
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
