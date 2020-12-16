import authRouter from './auth'
import mainRouter from './main'
import homeRouter from './home'
import orderRouter from './order'
import profileRouter from './profile'
import sessionStandHome from './stand-pages/home'

// stand routing
import standAuth from './stand-pages/auth'

const routes = (server, app) => {
  server.use(authRouter(app))
  server.use(mainRouter(app))
  server.use(homeRouter(app))
  server.use(orderRouter(app))
  server.use(profileRouter(app))
  server.use(sessionStandHome(app))
  server.use(standAuth(app))
}

export default routes
