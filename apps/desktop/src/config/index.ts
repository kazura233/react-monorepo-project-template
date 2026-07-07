import { Config, ConfigContextHolder } from '@kazura/vite-config'

console.log('META->ENV', import.meta.env)

export const config = new Config(import.meta.env)
ConfigContextHolder.setContext(config)
