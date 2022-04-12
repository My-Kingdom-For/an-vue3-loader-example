import { ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const isLoading = ref(true)
const dtLoader = 2000 // minimum display time
let debounceLoading = 0

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(() => {
  window.clearTimeout(debounceLoading)
  isLoading.value = true
})
router.afterEach(() => {
  window.clearTimeout(debounceLoading)
  debounceLoading = window.setTimeout(() => (isLoading.value = false), dtLoader)
})

export default router
