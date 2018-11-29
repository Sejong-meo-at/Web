import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import topBar from '@/components/topBar'
import login from '@/components/login'
import register from '@/components/register'
import translation from '@/components/translation'
import notice from '@/components/notice'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
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
        },
        {
          path: '/translation',
          components: {
            topBar: translation
          }
        },
        {
          path: '/notice',
          components: {
            topbar: notice
          }
        }
      ]
    }
  ]
})
