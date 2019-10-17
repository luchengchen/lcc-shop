import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/App.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: '小鹿的外卖软件'
      }
    }
  ]
})
