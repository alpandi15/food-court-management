import authRouter from './auth'
import mainRouter from './main'
import standRouter from './stand'

const routes = (server, app) => {
  server.use(authRouter(app))
  server.use(mainRouter(app))
  server.use(standRouter(app))
}

export default routes
