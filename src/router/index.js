import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import ElementUI from '@/components/ElementUI'

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
      path: '/elementui',
      name: 'ElementUI Test',
      component: ElementUI
    },

    {
      path: '/login',
      name: 'AT-UI Login',
      component: Login
    }
  ]
})
