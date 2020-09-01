import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/social/instagram',
    beforeEnter() { location.href = 'https://www.instagram.com/sos_vit/' }
  },
  {
    path: '/social/facebook',
    beforeEnter() { location.href = 'https://www.facebook.com/Smile-Over-Stress-VIT-117344306734480/' }
  },
  {
    path: '/social/linkedin',
    beforeEnter() { location.href = 'https://in.linkedin.com/company/smile-over-stress-sos-vit' }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
