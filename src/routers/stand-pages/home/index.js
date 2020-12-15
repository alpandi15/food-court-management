import express from 'express'
import renderAndCache from '../../../utils/cache'

const router = express.Router()

const routes = (app) => {
  return router
    .get('/sessions/stand/home', (req, res) => renderAndCache(app, req, res, '/stand-pages/home'))
}

export default routes
