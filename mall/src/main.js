import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

import './icons' // icon

//解决移动端点击延迟300ms问题
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

Vue.config.productionTip = false


// 全局引入UI库 vant
import '@/plugins/vant'
// 全局引入 Reset-css
import 'reset-css'
// 全局引入rem
import '@/config/rem'
import '@/config/filter'

window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
