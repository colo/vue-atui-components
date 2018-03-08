import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: {
        template: '<div></div>'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
