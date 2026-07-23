import { HashRouter } from 'react-router'
import { RootRoute } from './root-router'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

import { MobxProvider } from '@kazura/react-mobx'
import { stores } from '@internal-packages/sdk-stores'

export const Root = () => {
  return (
    <MobxProvider stores={stores}>
      <ConfigProvider locale={zhCN}>
        <HashRouter>
          <RootRoute />
        </HashRouter>
      </ConfigProvider>
    </MobxProvider>
  )
}
