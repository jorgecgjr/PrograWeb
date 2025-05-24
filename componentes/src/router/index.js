import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ViewLogin from '@/components/sesion/ViewLogin.vue'
import LoginView from '@/components/sesion/LoginView.vue'
import RegisterView from '@/components/sesion/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },

    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },

    {
      path: '/loginprofe',
      name: 'loginprofe',
      component: ViewLogin,
    },

    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },

    {
      path: '/dispositivos',
      name: 'dispositivos',
      component: () => import('../views/ViewDispositivos.vue'),
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: () => import('../components/main/comp.vue'),
    }

  ],
})

export default router
