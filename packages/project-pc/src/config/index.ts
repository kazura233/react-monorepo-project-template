import local from './local.config'
import development from './development.config'
import production from './production.config'

export enum ENV {
  local = 'local',
  development = 'development',
  production = 'production',
}

export interface IConfig {
  ENV: ENV
  BASE_API: string
}

export const defineConfig = (config: IConfig): IConfig => config

class Config implements IConfig {
  public readonly ENV: ENV
  public readonly BASE_API: string

  public constructor(config: IConfig) {
    this.ENV = config.ENV
    this.BASE_API = config.BASE_API
  }

  public isLocal(): boolean {
    return this.ENV === ENV.local
  }

  public isDevelopment(): boolean {
    return this.ENV === ENV.development
  }

  public isProduction(): boolean {
    return this.ENV === ENV.production
  }
}

const init = (env: ENV) => {
  switch (env) {
    case ENV.local:
      return new Config(local)
    case ENV.development:
      return new Config(development)
    case ENV.production:
      return new Config(production)
    default:
      throw new Error('Unknown env')
  }
}

export const config = init(import.meta.env.VITE_ENV)
