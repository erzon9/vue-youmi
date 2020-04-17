import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home';
import AppLayout from '@/components/AppLayout';


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: AppLayout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
      }, 
      {
        path: '/classify',
        name: 'classify',
        component: () => import(/* webpackChunkName: "classify" */'@/views/Classify'),
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import(/* webpackChunkName: "cart" */'@/views/Cart'),
      },
      {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "user" */'@/views/User'),
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
