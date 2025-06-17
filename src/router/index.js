import { createRouter, createWebHistory } from 'vue-router'
import PdfAnalyzerView from '@/pages/PdfAnalyzerView.vue'

const routes = [
  { path: '/', component: PdfAnalyzerView }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})