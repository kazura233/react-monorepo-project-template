import { configure } from 'mobx'
import { createStores } from '@kazura/react-mobx'
import { DemoStore } from './demo-store'

configure({ enforceActions: 'observed' })

export const stores = createStores([DemoStore])

export * from './demo-store'
