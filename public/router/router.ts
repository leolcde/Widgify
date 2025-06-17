/// <reference types="vite/client" />

import { createRouter, createWebHistory } from 'vue-router'

// Views are the different pages of the website
import HomeView from '../src/views/home.vue'
import RegisterView from '../src/views/register.vue'
import LoginView from '../src/views/login.vue'
import FeedView from '../src/views/feed.vue'
import PrivateMessageView from '../src/views/private_msg.vue'
import ProfileView from '../src/views/profile.vue'
import ResearchView from '../src/views/research.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/register', name: 'register', component: RegisterView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/feed', name: 'feed', component: FeedView },
    { path: '/private_msg', name: 'private_msg', component: PrivateMessageView },
    { path: '/profile', name: 'profile', component: ProfileView },
    { path: '/research', name: 'research', component: ResearchView },
  ]
})

export default router
