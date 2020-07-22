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

export default router
