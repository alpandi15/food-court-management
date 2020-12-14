import authRouter from './auth'
import mainRouter from './main'
import homeRouter from './home'
import orderRouter from './order'

const routes = (server, app) => {
  server.use(authRouter(app))
  server.use(mainRouter(app))
  server.use(homeRouter(app))
  server.use(orderRouter(app))
}

export default routes
