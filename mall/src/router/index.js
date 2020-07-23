import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err);
}

import Dashboard from './../views/dashboard/Dashboard.vue'

// 懒加载二级组件 Tarbar
const Home = () => import('../views/home/Home.vue');
const Category = () => import('../views/category/Category.vue');
const Eat = () => import('../views/eat/Eat.vue');
const Cart = () => import('../views/cart/Cart.vue');
const Mine = () => import('../views/mine/Mine.vue');

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    children: [
      {
        path: '/dashboard',
        redirect: '/dashboard/home',
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'home',
        name: 'home',
        component: Home,
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'category',
        name: 'category',
        component: Category,
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'eat',
        name: 'eat',
        component: Eat,
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'cart',
        name: 'cart',
        component: Cart,
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'mine',
        name: 'mine',
        component: Mine,
        meta: {
          keepAlive: true
        }
      }]
  }
]

const router = new Router({
  scrollBehavior (to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes
})

//路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (state.userInfo.token) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
