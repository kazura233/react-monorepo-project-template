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
