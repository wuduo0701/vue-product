import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home/Home.vue'
import Me from '@/components/Me/Me.vue'
import SetMe from '@/views/SetMe/Setme.vue'
import Message from '@/views/Message/Message.vue'
import Like from '@/views/Like/Like.vue'
import Download from '@/views/Download/Download.vue'
import Likelist from '@/views/LikeList/Likelist.vue'
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
  },
  {
    path: '/message',
    component: Message
  },
  {
    path: '/like',
    component: Like
  },
  {
    path: '/download',
    component: Download
  },
  {
    path: '/likelist',
    component: Likelist
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
