import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue"
import Discovery from "@/views/Discovery.vue";
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
    {
        path: '/discovery',
        name: 'discovery',
        component: Discovery
    },
]

const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes:routes
})

export default router

