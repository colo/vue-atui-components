// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'at-ui-style'
import AtUI from 'at-ui'

Vue.use(AtUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // data () {
  //   return {
  //     router: router
  //   }
  // },
  // template: '<App :router="router"/>',
  template: '<App/>',
  components: { App }
})
