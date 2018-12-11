import Vue from 'vue'
import Router from 'vue-router'
import homeRoutes from './interfaces/homeRoutes'

Vue.use(Router)

export default new Router({
  base: '/',
  routes: [
    ...homeRoutes
  ]
})
