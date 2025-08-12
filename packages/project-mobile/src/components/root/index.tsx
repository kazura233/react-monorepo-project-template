import { HashRouter } from 'react-router'
import { RootRoute } from './root-router'
import { ConfigProvider } from 'antd-mobile'
import zhCN from 'antd-mobile/es/locales/zh-CN'

import { MobxProvider } from '@kazura/react-mobx'
import { stores } from '@react-monorepo-project-template/sdk-stores'

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
