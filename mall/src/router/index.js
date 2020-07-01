import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err);
}

Vue.use(VueRouter)

const routes = [
]

const router = new VueRouter({
  routes
})

export default router
