import { createRouter, createWebHistory } from 'vue-router'

import DocumentsPage from '../pages/DocumentsUi.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'documents',
      component: DocumentsPage
    }
  ]
})
export default router
