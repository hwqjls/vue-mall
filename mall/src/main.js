import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
