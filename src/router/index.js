import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'from',
      component: () => import('@/views/FormView.vue')
    }
  ]
})

export default router
