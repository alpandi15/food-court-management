import express from 'express'
import renderAndCache from '../../utils/cache'

const router = express.Router()

const routes = (app) => {
  return router
    // .get('/home/order', (req, res) => renderAndCache(app, req, res, '/home/order'))
    .get('/home/order/view/:uuid', (req, res) => renderAndCache(app, req, res, '/home/order/view'))
    .get('/home/order/history', (req, res) => renderAndCache(app, req, res, '/home/order/history'))
    .get('/home/order/history/detail/:uuid', (req, res) => renderAndCache(app, req, res, '/home/order/history/detail'))
}

export default routes
