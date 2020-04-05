import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home/Home.vue'
import Me from '@/components/Me/Me.vue'
import SetMe from '@/views/SetMe/Setme.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "Home",
    component: Home
  },
  {
    path: '/me',
    name: 'Me',
    component: Me,
    // children: [
    //   {
    //     path: 'setme',
    //     name: 'SetMe',
    //     component: SetMe
    //   },
    // ]
  },
  {
    path: '/setme',
    component: SetMe
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
