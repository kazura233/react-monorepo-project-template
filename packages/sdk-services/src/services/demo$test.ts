import { type ResponsePacket, httpClient } from '../helpers'

export interface IRequestResource {}

export interface IResponseResource {}

export const demo$test = (data: IRequestResource) =>
  httpClient.request<ResponsePacket<IResponseResource>>({
    url: '/demo/test',
    method: 'POST',
    data
  })
