import express from 'express'
import renderAndCache from '../../utils/cache'

const router = express.Router()

const routes = (app) => {
  return router
    .get('/auth/register', (req, res) => renderAndCache(app, req, res, '/auth'))
}

export default routes
