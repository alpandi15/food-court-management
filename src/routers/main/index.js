import express from 'express'
import renderAndCache from '../../utils/cache'

const router = express.Router()

const routes = (app) => {
  return router
    .get('/main', (req, res) => renderAndCache(app, req, res, '/main'))
}

export default routes
