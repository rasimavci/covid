import Vue from 'vue'
import Router from 'vue-router'
//import Meta from 'vue-meta'
import Home from './views/Home'
import IconSprite from './views/IconSprite'
// import VueBreadcrumbs from 'vue-breadcrumbs'

// Vue.use(VueBreadcrumbs)
Vue.use(Router)
//Vue.use(Meta)
  
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    { 
      path: '/',
      name: 'home',
      component: Home,
      meta: { pageClass: 'home', breadcrumb: 'Covid19' }
    },
    {
      path: '/icon-sprite',
      name: 'IconSprite',
      component: IconSprite
    },
  ]

})
