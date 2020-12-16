import express from 'express'
import renderAndCache from '../../../utils/cache'

const router = express.Router()

const routes = (app) => {
  return router
    .get('/owner/auth/login', (req, res) => renderAndCache(app, req, res, '/owner-pages/auth/login'))
    .get('/owner/auth/register', (req, res) => renderAndCache(app, req, res, '/owner-pages/auth/register'))
}

export default routes
