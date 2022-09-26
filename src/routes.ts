import Index from './pages/index.vue'
import Test from './pages/test.vue'
import Lesson1 from './pages/lesson1.vue'
import Lesson2 from './pages/lesson2.vue'

export const routes = [
  { path: '/', component: Index },
  { path: '/test', component: Test },
  { path: '/lesson1', component: Lesson1 },
  { path: '/lesson2', component: Lesson2 },
]

export default routes
