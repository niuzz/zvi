import Vue from 'vue'
import App from './App.vue'
import router from './router'
import DemoBlock from './components/demo-block.vue'
import zvi from '../libs'
import EventBus from './common/js/utils-bus'

import 'highlight.js/styles/shades-of-purple.css'

import './common/styles/index.scss'

Vue.config.productionTip = false
Vue.prototype.$bus = EventBus
Vue.use(zvi)
Vue.component('demo-block', DemoBlock)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
