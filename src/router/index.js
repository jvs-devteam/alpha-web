import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const Detials = () => import('../views/Detials')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
      path: '/details/:id',
      name: 'Details',
      props: { default: true, sidebar: false },
      component: Detials
    },
    {
      path: '/tag/:id',
      name: 'Tags',
      props: { default: true, sidebar: false},
      comments: Detials
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
