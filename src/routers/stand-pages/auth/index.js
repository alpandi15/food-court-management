import express from 'express'
import renderAndCache from '../../../utils/cache'

const router = express.Router()

const routes = (app) => {
  return router
    .get('/stand/auth/login', (req, res) => renderAndCache(app, req, res, '/stand-pages/auth/login'))
}

export default routes
