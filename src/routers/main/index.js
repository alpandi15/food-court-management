import express from 'express'
import renderAndCache from '../../utils/cache'

const router = express.Router()

const routes = (app) => {
  return router
    .get('/main', (req, res) => renderAndCache(app, req, res, '/main'))
    .get('/main/scan', (req, res) => renderAndCache(app, req, res, '/main/scan'))
    .get('/main/manual', (req, res) => renderAndCache(app, req, res, '/main/manual'))
}

export default routes
