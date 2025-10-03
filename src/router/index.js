import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../components/Estructura_Web/Dashboard.vue'),
      redirect: '/home',
      children: [
        { 
          path: 'home', 
          name: 'home',
          meta: { title: 'Home' },
          component: () => import('../views/home/Home.vue') 
        },
        { 
          path: 'perfil', 
          name: 'perfil',
          meta: { title: 'Perfil' },
          component: () => import('../views/perfil/Perfil.vue') 
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/Login.vue')
    }
  ],
})

export default router;