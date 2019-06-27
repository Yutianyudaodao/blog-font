import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import BlogList from '@/components/BlogList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/blog/list',
      name: 'BlogList',
      component: BlogList
    }
  ],
  mode:'history'
})
