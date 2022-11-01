import { HttpRequestConfig } from '@react-monorepo-project-template/sdk-utils'
import { request } from './helpers'
import * as demo from './demo'

export const services = {
  demo,
  use: (config?: HttpRequestConfig) => {
    request.instance = request.create(config)
  },
}
