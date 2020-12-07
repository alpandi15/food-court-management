const NextWorkboxPlugin = require('next-workbox-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const path = require('path')

const development = process.env.NODE_ENV === 'development'

require('dotenv')
  .config({
    path: development ? '.env' : `.env.${(process.env.NODE_ENV || '').toLocaleLowerCase()}`
  })

module.exports = {
  poweredByHeader: false,
  distDir: '../dist',
  env: {
    APIPROTOCOL: process.env.APIPROTOCOL || 'http',
    APIHOST: process.env.APIHOST || 'localhost',
    APIPORT: process.env.APIPORT || 3000,
    APIVERSION: process.env.APIVERSION || '',

    APIHOSTIMAGE: process.env.APIHOSTIMAGE || 'localhost',
    APIPORTIMAGE: process.env.APIPORTIMAGE || 4000,
    APIVERSIONIMAGE: process.env.APIVERSIONIMAGE || ''
  },
  webpack (config, { isServer, buildId, dev, defaultLoaders }) {
    const workboxOptions = {
      clientsClaim: true,
      skipWaiting: true,
      globPatterns: ['.next/static/*', '.next/static/commons/*'],
      modifyUrlPrefix: {
        '.next': '/_next'
      },
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'networkFirst',
          options: {
            cacheName: 'html-cache'
          }
        },
        {
          urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
          handler: 'cacheFirst',
          options: {
            cacheName: 'image-cache',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }

    if (!isServer && !dev) {
      config.plugins.push(
        new NextWorkboxPlugin({
          buildId,
          ...workboxOptions
        }),
        new WebpackPwaManifest({
          filename: '/static/manifest.json',
          name: 'FCM',
          short_name: 'FCM',
          lang: 'id-ID',
          description: 'FCM - platform public food court management',
          display: 'standalone',
          orientation: 'portrait',
          fingerprints: false,
          start_url: '/',
          background_color: '#fafafa',
          theme_color: '#89A61F',
          inject: true,
          icons: [
            {
              // src: path.resolve('static/favicon/ms-icon-310x310.png'),
              src: path.resolve('src/static/logo512.png'),
              sizes: [72, 96, 120, 128, 144, 152, 167, 180, 192, 384, 512]
            },
            {
              // src: path.resolve('static/favicon/ms-icon-310x310.png'),
              src: path.resolve('src/static/logo192.png'),
              sizes: [120, 152, 167, 180],
              ios: true
            }
          ],
          ios: {
            'apple-mobile-web-app-title': 'FCM',
            'apple-mobile-web-app-status-bar-style': '#89A61F'
          },
          includeDirectory: true,
          publicPath: '..'
        })
      )

      config.node = {
        fs: 'empty'
      }
    }

    return config
  }
}
