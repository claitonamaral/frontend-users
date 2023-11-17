import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import UserCreate from '../views/UserCreate.vue'
import UserList from '../views/UserList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/create',
    name: 'userCreate',
    component: UserCreate
  },
  {
    path: '/users',
    name: 'userList',
    component: UserList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
