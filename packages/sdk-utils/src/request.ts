import axios, {
  AxiosStatic,
  AxiosInstance,
  AxiosRequestConfig,
  CreateAxiosDefaults,
  AxiosResponse,
} from 'axios'

export interface HttpStatic extends AxiosStatic {}
export interface HttpInstance extends AxiosInstance {}
export interface HttpRequestConfig<D = any> extends AxiosRequestConfig<D> {}
export interface CreateHttpDefaults<D = any> extends CreateAxiosDefaults<D> {}
export interface HttpResponse<T = any, D = any> extends AxiosResponse<T, D> {}

export const http: HttpStatic = axios

export class Request {
  public instance: HttpInstance

  public constructor(config?: HttpRequestConfig) {
    this.instance = this.create(config)
  }

  public create(config?: HttpRequestConfig): HttpInstance {
    const instance = http.create(config)
    this.init(instance)
    return instance
  }

  public init(instance: HttpInstance) {
    instance.interceptors.request.use(
      (request) => {
        return request
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    instance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }

  public request<T = any, D = any, R = HttpResponse<T, D>>(
    config: HttpRequestConfig<D>
  ): Promise<R> {
    return this.instance.request<T, R, D>(config)
  }
}
