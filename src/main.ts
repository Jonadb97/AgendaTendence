import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import { compileToFunctions } from 'vue-template-compiler'
import Inicio from './components/inicio.vue'
import 'animate.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import VueRouter from 'vue-router'
import './assets/main.css'
import 'uno.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Routes


const routes = [
  { path: '/', name: "Index", component: Inicio},
]

const router = new VueRouter({
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
