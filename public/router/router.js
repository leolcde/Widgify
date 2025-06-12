import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../src/views/home.vue'
import RegisterView from '../src/views/register.vue'
import LoginView from '../src/views/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/register', name: 'register', component: RegisterView },
    { path: '/login', name: 'login', component: LoginView }
  ]
})

export default router
