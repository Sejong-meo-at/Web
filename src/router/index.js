import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import topBar from '@/components/topBar'
Vue.use(Router)

export default new Router({
  routes: [
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
