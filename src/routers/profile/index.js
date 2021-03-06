import express from 'express'
import renderAndCache from '../../utils/cache'

const router = express.Router()

const routes = (app) => {
  return router
    .get('/profile', (req, res) => renderAndCache(app, req, res, '/profile'))
    .get('/profile/edit', (req, res) => renderAndCache(app, req, res, '/profile/edit'))
    .get('/profile/change-password', (req, res) => renderAndCache(app, req, res, '/profile/change-password'))
}

export default routes
