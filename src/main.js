import Vue from 'vue'
import App from './App'
import SlideVerify from './lib/index'

Vue.config.productionTip = false
Vue.use(SlideVerify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
