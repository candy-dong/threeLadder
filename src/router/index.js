import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/marketing',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('../views/Marketing.vue'),
        name: 'Marketing'
      }
    ]
  },
  {
    path: '/visual',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('../views/Visual.vue'),
        name: 'Visual'
      }
    ]
  },
  {
    path: '/model',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('../views/Model.vue'),
        name: 'Model'
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
