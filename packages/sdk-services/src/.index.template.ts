import { type HttpRequestConfig } from '@kazura/http-client'
import { httpClient } from './helpers'

export type { ResponsePacket } from './helpers'

//import//

export const services = {
  mergeConfig: (config: HttpRequestConfig) => httpClient.mergeConfig(config),
  exportHttpInstance: () => httpClient.exportHttpInstance()
  //export//
}
