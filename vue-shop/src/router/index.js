import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'

Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
    {
      // 重定向为login页面
      path: '/',
      redirect : '/login'
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
