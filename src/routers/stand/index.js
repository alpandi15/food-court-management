import express from 'express'
import renderAndCache from '../../utils/cache'

const router = express.Router()

const routes = (app) => {
  return router
    .get('/home/stand/:uuid', (req, res) => renderAndCache(app, req, res, '/stand'))
    .get('/home/product/:uuid', (req, res) => renderAndCache(app, req, res, '/stand/product'))
}

export default routes
