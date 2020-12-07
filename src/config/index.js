import dotenv from 'dotenv'

dotenv.config()
const envState = process.env.REACT_APP_NODE_ENV

const config = {
  env: process.env.NODE_ENV,
  apiProtocol: envState === 'development' ? process.env.REACT_APP_API_PROTOCOL : 'http',
  apiHost: envState === 'development' ? process.env.REACT_APP_API_HOST : 'localhost',
  apiPort: envState === 'development' ? process.env.REACT_APP_API_PORT : '3000',
  apiVersion: process.env.REACT_APP_API_VERSION || '',
  appIdGoogle: process.env.REACT_APP_ID_GOOGLE || '',
  appIdFacebook: process.env.REACT_APP_ID_FACEBOOK || '',
  apiImage: process.env.REACT_APP_API_IMAGE || 'localhost',
  apiImagePort: process.env.REACT_APP_API_IMAGE_PORT || '3000',
  merchantCode: process.env.REACT_APP_PADIPAYCODE || '',
  marchantPass: process.env.REACT_APP_PADIPAYPASS || '',
  mapToken: process.env.REACT_APP_MAP_TOKEN || ''
}

const APIUPLOAD = `${config.apiProtocol}://${config.apiImage}:${config.apiImagePort}`

export {
  config,
  APIUPLOAD
}
