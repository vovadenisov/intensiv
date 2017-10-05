import Root from './Root'
import Home from './Home'
import Child from './Child'


const routes = [
  { component: Root,
    routes: [
      { path: '/',
        exact: true,
        component: Home
      },
      { path: '/child/',
        component: Child,
      }
    ]
  }
]

export default routes
