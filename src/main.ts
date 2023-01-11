import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import { compileToFunctions } from 'vue-template-compiler'
import Index from './components/index.vue'
import 'animate.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import VueRouter from 'vue-router'
import './assets/main.css'
import 'uno.css'

// Routes


const routes = [
  { path: '/'},
  { path: '/index', component: Index }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

// Vue Use

Vue.use(PiniaVuePlugin)
Vue.use(VueRouter)
Vue.use(ElementUI)


// Start Vue

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App)
}).$mount('#app')
