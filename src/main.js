/* eslint-disable camelcase */
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
// import router from './router'
// eslint-disable-next-line no-unused-vars
import './registerServiceWorker'
import SvgIcon from './components/SvgIcon'
import VueButton from './components/VueButton'
import VueLink from './components/VueLink'
import Container from './components/Container'
import SlideUpDown from './components/SlideUpDown'
import VueInput from './components/VueInput'
import VueSelect from './components/VueSelect'
import SelectBox from './components/SelectBox'
//import ComponentDataLoader from './components/ComponentDataLoader'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import IconSprite from './views/IconSprite'

const BASE_API_URL = process.env.VUE_APP_API_URL

Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = BASE_API_URL
Vue.axios.defaults.proxyHeaders = false
Vue.axios.defaults.credentials = false
Vue.axios.defaults.headers.common['Accept'] = 'application/json'
Vue.axios.defaults.headers.common['Content-Type'] = 'application/json'

Vue.use(VueAwesomeSwiper, {})

Vue.config.productionTip = false
Vue.config.performance = process.env.NODE_ENV !== 'production'
Vue.config.devtools = process.env.NODE_ENV !== 'production'
Vue.filter('truncate', function (value, limit) {
  if (value.length > limit) {
    value = value.substring(0, (limit - 3)) + '...'
  }

  return value
})
Vue.component('svg-icon', SvgIcon)
Vue.component('v-button', VueButton)
Vue.component('v-link', VueLink)
Vue.component('container', Container)
Vue.component('slide-up-down', SlideUpDown)
Vue.component('v-input', VueInput)
Vue.component('v-select', VueSelect)
//Vue.component('component-data-loader', ComponentDataLoader)
Vue.component('select-box', SelectBox)

Vue.axios.interceptors.response.use(undefined, (err) => {
  return new Promise((resolve, reject) => {

    throw err
  })
})



new Vue({
  IconSprite,
  render: h => h(App)
}).$mount('#app')
