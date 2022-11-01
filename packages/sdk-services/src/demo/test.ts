import { request } from '../helpers'

interface IRequestResource {}

interface IResponseResource {}

export const test = (data: IRequestResource) =>
  request.request<IRequestResource, IResponseResource>({
    url: '/demo/test',
    method: 'POST',
    data,
  })
