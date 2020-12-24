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
      // 创作中心
    {
      path: '/creator',
      name: 'Home',
      component: () => import('../views/Creator/Home')
    },
    {
      path: '/creator/my-data',
      name: 'MyData',
      component: () => import('../views/Creator/MyData')
    },
    {
      path: '/creator/upload',
      name: 'Upload',
      component: () => import('../views/Creator/Upload')
    },
    {
      path: '/creator/my-upload',
      name: 'MyVideo',
      component: () => import('../views/Creator/MyVideo')
    },
    {
      path: '/creator/my-sub',
      name: 'MySub',
      component: () => import('../views/Creator/MySub')
    },
    {
      path: '/creator/my-comment',
      name: 'MyComment',
      component: () => import('../views/Creator/MyComment')
    },
    {
      path: '/creator/my-fans',
      name: 'MyFans',
      component: () => import('../views/Creator/MyFans')
    },
    {
      path: '/creator/my-upload/edit/:id',
      name: 'Edit',
      component: () => import('../views/Creator/EditVideo/Edit')
    },
      // 认证系统
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
      // 视频详情
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
