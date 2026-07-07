import '~/styles/global'
import '~/config'

import { services } from '@react-monorepo-project-template/sdk-services'

services.exportHttpInstance().interceptors.request.use((request) => {
  console.log('Request->interceptors->request->', request)

  return request
})
services.exportHttpInstance().interceptors.response.use((response) => {
  console.log('Request->interceptors->response->', response)

  return response
})
