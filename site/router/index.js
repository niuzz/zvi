import Vue from 'vue'
import Router from 'vue-router'
import routers from './routers'

import Home from '../components/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [routers]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
