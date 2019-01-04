import Vue from 'vue'
import 'lib-flexible'
import App from './App.vue'
import router from './router'
import Toast from '@/directives/toast'

Vue.config.productionTip = false

Vue.prototype.$toast = Toast

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
