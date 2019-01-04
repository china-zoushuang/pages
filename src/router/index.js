import Vue from 'vue'
import Router from 'vue-router'
import animateRoutes from './interfaces/animate_routes'

Vue.use(Router)

export default new Router({
  base: '/',
  routes: [
    ...animateRoutes
  ]
})
