import { createRouter, createWebHistory } from 'vue-router'

import DocumentsView from '../views/DocumentsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'documents',
      component: DocumentsView
    }
  ]
})
export default router
