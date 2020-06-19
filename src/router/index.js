import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/login/',
    name: 'login',
    component:resolve => require(['../views/Login.vue'],resolve)
  //  component: () => import('../views/Login.vue')
  },
  {
    path: '/woods/',
    name: 'woods',
    component:resolve => require(['../views/Orders.vue'],resolve)
   // component: () => import('../views/Orders.vue')
  },
//  {
  //  path: '/goods',
   // name: 'goods',
   // component: () => import('../views/Goods.vue')
 // }
]

const router = new VueRouter({
  mode : 'history',
  routes
})

export default router

