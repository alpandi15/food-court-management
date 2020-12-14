import express from 'express'
import renderAndCache from '../../utils/cache'

const router = express.Router()

const routes = (app) => {
  return router
    .get('/home/stand/:uuid', (req, res) => renderAndCache(app, req, res, '/home/stand'))
    .get('/home/stand/:standId/product/:uuid', (req, res) => renderAndCache(app, req, res, '/home/stand/product'))
}

export default routes
