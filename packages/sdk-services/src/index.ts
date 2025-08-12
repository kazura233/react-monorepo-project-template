import { type HttpRequestConfig } from '@kazura/http-client'
import { httpClient } from './helpers'

export type { ResponsePacket } from './helpers'

import { demo$test } from './services/demo$test'

export const services = {
  mergeConfig: (config: HttpRequestConfig) => httpClient.mergeConfig(config),
  exportHttpInstance: () => httpClient.exportHttpInstance(),
  demo$test
}
