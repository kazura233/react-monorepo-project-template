import { Request } from '@react-monorepo-project-template/sdk-utils'

export const request = new Request({
  baseURL: '',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})
