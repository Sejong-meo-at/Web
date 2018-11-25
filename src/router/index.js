import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import topBar from '@/components/topBar'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/',
      component: topBar,
      children: [
        {
          path: '/',
          components: {
            topBar: main
          }
        }
      ]
    }
  ]
})
