import Vue from 'vue'
import App from './App.vue'
import store from './store/chat-store'
import router from './router/chat-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
