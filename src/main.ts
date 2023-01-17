import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import { compileToFunctions } from 'vue-template-compiler'
import Inicio from './pages/inicio.vue'
import Login from './pages/login.vue'
import Register from './pages/register.vue'
import SacarTurno from './pages/sacarTurno.vue'
import TurnosPendientes from './pages/turnosPendientes.vue'
import 'animate.css'
import ElementUI from 'element-ui'
import locale 'element-ui/lib/locale/es'
import VCalendar from 'v-calendar'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import './assets/main.css'
import 'uno.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



// Routes


const routes = [
  { path: '/', name: "Index", component: Inicio},
  { path: '/login', name: "Login", component: Login},
  { path: '/register', name: "Register", component: Register},
  { path: '/sacarTurno', name: "SacarTurno", component: SacarTurno},
  { path: '/turnosPendientes', name: "TurnosPendientes", component: TurnosPendientes}
]

const router = new VueRouter({
  routes: routes
})

// Vue Use

Vue.use(PiniaVuePlugin)
Vue.use(VueRouter)
Vue.use(ElementUI, { locale })
Vue.use(VCalendar)


// Start Vue

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App)
}).$mount('#app')
