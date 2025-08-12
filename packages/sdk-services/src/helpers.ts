import HttpClient from '@kazura/http-client'
import { ConfigContextHolder } from '@kazura/vite-config'
import { SERVER_BASE_API } from '@react-monorepo-project-template/sdk-commons'

export interface ResponsePacket<T = any> {
  code: number
  message: string
  success: boolean
  resource: T
}

export const httpClient = new HttpClient({
  baseURL: ConfigContextHolder.getContext()?.get(SERVER_BASE_API),
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})
