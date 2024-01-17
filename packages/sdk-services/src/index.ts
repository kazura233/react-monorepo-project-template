import type { HttpRequestConfig, HttpInstance } from '@react-monorepo-project-template/sdk-utils'
import { request } from './helpers'
import * as demo from './demo'

export const services = {
  demo,
  use: (config?: HttpRequestConfig): HttpInstance => {
    request.instance = request.create(config)
    return request.instance
  },
}
