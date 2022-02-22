import Vue from 'vue'
import Antd from 'ant-design-vue'
import VueCompositionAPI from '@vue/composition-api'

import App from './App.vue'

import 'ant-design-vue/dist/antd.css'
import './styles/main.scss'
import './assets/tailwind.css'

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(VueCompositionAPI)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
