import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue"
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      },
]

const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes:routes
})

export default router

