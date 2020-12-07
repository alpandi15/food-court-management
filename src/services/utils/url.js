import {
  config
} from 'config'

const {
  apiProtocol,
  apiHost,
  apiPort,
  apiVersion
} = config

export const APIURL = `${apiProtocol}://${apiHost}:${apiPort}/${apiVersion}`
