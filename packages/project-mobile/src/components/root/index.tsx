import { HashRouter } from 'react-router-dom'
import { RootRoute } from './root-router'
import { ConfigProvider } from 'antd-mobile'
import zhCN from 'antd-mobile/es/locales/zh-CN'

export const Root = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        <RootRoute />
      </HashRouter>
    </ConfigProvider>
  )
}
