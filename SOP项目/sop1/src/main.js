// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios'
import swooleNews from '@/components/hhl/swoole'
// import VueAxios from 'vue-axios'
import VueResource from 'vue-resource'  // 请求数据
import '@/assets/css/tailwind.css'  // 导入tailwind

Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.component("swooleNews", swooleNews)
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(ElementUI)
// 判断用户是否需要登录
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  const type = to.meta.type
  const toUrl = to.path
  // 判断该路由是否需要登录权限
  if (type === 'login') {
    if (window.localStorage.getItem('login')) {
      next()
    } else {
      next('/')
    }
  } else {
    next()  // 确保一定要有next()被调用
  }
})
// function next(){
//   this.$router.replace(toUrl)
// }
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
