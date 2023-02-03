import Vue from 'vue'
import VueRouter from 'vue-router'
import SnakeVue from '../pages/SnakeVue.vue'
import TriviaVue from '../pages/TriviaVue.vue'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'snake',
      path: '/Snake',
      component: SnakeVue
    },
    {
      name: 'trivia',
      path: '/Trivia',
      component: TriviaVue
    },
  ]
})

export default router
