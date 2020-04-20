import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home';
import Index from '@/views/Index';
import store from '../store';
import {
  Dialog
} from 'vant';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Index,
    redirect: '/home',
    children: [{
        path: '/home',
        name: 'home',
        component: Home,
      },
      {
        path: '/classify',
        name: 'classify',
        component: () => import( /* webpackChunkName: "classify" */ '@/views/Classify'),
      },

      {
        path: '/user',
        name: 'user',
        component: () => import( /* webpackChunkName: "user" */ '@/views/User'),
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "login" */ '../views/Login')
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      needLogin: true,
    },
    component: () => import( /* webpackChunkName: "cart" */ '@/views/Cart'),
  },
  {
    path: '/goods/:id',
    name: 'goods',
    component: () => import( /* webpackChunkName: "goods" */ '../views/Goods')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // 判断需要登录信息
  if (to.matched.some(record => record.meta.needLogin)) {
    // 有 user 说明当前用户已经登录
    let userIsEmpty = Object.keys(store.state.user).length === 0;
    if (!userIsEmpty) {
      next();
    } else {
      Dialog({
        title: '没有登录',
        message: '当前用户没有登录，是否条转到登录页进行登录',
        showCancelButton: true,
      }).then(() => {
        next({path: '/login', query: {from: '/cart'}});
      }).catch(() => {
        next(false);
      });
    }
  } else {
    next();
  }
 
});

export default router