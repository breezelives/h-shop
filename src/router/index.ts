import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/Category.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart.vue'),
    meta: {
      needLogin: 1
    }
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/Mine.vue'),
    meta: {
      needLogin: 1
    }
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/Product.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.needLogin === 1 && to.name !== 'login') {
//     console.log(to.name)
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router
