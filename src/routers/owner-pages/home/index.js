import express from 'express'
import renderAndCache from '../../../utils/cache'

const router = express.Router()

const routes = (app) => {
  return router
    .get('/owner/home/selection', (req, res) => renderAndCache(app, req, res, '/owner-pages/home/selection'))
}

export default routes
