import Vue from 'vue'
import VueRouter from 'vue-router';
import App from '@/App.vue'
import routes from '@/routes';
import eventBus from '@/puglins/event-bus';
import msToMm from '@/filters/ms-to-mm';
import blur from '@/directives/blur';
import store from '@/store';

Vue.use(eventBus)
Vue.use(VueRouter)
Vue.use(msToMm)
Vue.use(blur)

const router = new VueRouter({
  routes,
  mode: 'history' // con esto activamos el history mode y quitamos caracteres como "#" de la url
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
