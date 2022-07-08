import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home'
import shoes from '../views/shoes'
import jackets from '../views/jackets'
import tshirt from '../views/tshirts'
import hats from '../views/hats'
import pants from '../views/pants'
import sports from '../views/sports'
import cart from '../views/cart'
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
    path: '/jackets',
    name: 'jackets',
    component: jackets
  },
  {
    path: '/tshirt',
    name: 'tshirt',
    component: tshirt
  },
  {
    path: '/hats',
    name: 'hats',
    component: hats
  },
  {
    path: '/pants',
    name: 'pants',
    component: pants
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
