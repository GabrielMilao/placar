import Vue from 'vue'
import Router from 'vue-router'
import Futebol from '@/components/Futebol'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Futebol',
      component: Futebol
    }
  ]
})
