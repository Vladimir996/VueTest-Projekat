import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes.js'
import VModal from 'vue-js-modal'
import Vuelidate from 'vuelidate'
import { store } from './store/store'

Vue.use(VueRouter);
Vue.use(VModal);
Vue.use(Vuelidate);
const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

