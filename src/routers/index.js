import authRouter from './auth'
import mainRouter from './main'

const routes = (server, app) => {
  server.use(authRouter(app))
  server.use(mainRouter(app))
}

export default routes
