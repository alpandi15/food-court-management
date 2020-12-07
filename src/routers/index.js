import authRouter from './auth'

const routes = (server, app) => {
  server.use(authRouter(app))
}

export default routes
