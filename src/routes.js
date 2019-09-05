import About from '~pages/About'
import Home from '~pages/Home'
import Todo from '~pages/Todo'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/todos',
    component: Todo
  }
]

export default routes