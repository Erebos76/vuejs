import Vue from 'vue'
import Router from 'vue-router'
import Shopping from '@/components/ShoppingListComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shopping',
      component: Shopping
    }
  ]
})
