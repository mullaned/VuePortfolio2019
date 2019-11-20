import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ContentfulVue from 'contentful-vue'
import '@mdi/font/css/materialdesignicons.css'
var VueScrollTo = require('vue-scrollto')

Vue.use(axios)

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.use(ContentfulVue, {
  space: 'ym868unxauri',
  accessToken: '8fUnxHfs8Zwh7FkVXv-0kW7y-lxBdm18sTpkP-g_24M'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
