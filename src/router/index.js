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
    {
      path: '/login',
      name: 'Login',
      props: {default: true, sidebar: false},
      component: () => import('../views/Auth/Login')
    },
    {
      path: '/register',
      name: 'Register',
      props: {default: true, sidebar: false},
      component: () => import('../views/Auth/Register')
    },
    {
      path: '/details/:id',
      name: 'Details',
      props: { default: true, sidebar: false },
      component: () => import('../views/Detials')
    },
    {
      path: '/video/:id',
      name: 'Video',
      props: { default: true, sidebar: false },
      component: () => import('../views/Video')
    },
    {
      path: '/tag/:id',
      name: 'Tags',
      props: { default: true, sidebar: false},
      comments: () => import('../views/Detials')
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
