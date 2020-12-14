import express from 'express'
import renderAndCache from '../../utils/cache'

const router = express.Router()

const routes = (app) => {
  return router
    .get('/home', (req, res) => renderAndCache(app, req, res, '/home'))
    .get('/home/stand/:uuid', (req, res) => renderAndCache(app, req, res, '/home/stand'))
    .get('/home/stand/:standId/voucher', (req, res) => renderAndCache(app, req, res, '/home/stand/voucher'))
    .get('/home/stand/:standId/voucher/:uuid', (req, res) => renderAndCache(app, req, res, '/home/stand/voucher/detail'))
    .get('/home/stand/:standId/product/:uuid', (req, res) => renderAndCache(app, req, res, '/home/stand/product'))
    .get('/home/favorite', (req, res) => renderAndCache(app, req, res, '/home/favorite'))
    .get('/home/cart', (req, res) => renderAndCache(app, req, res, '/home/cart'))
}

export default routes
