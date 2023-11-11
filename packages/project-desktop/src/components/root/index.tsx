import { HashRouter } from 'react-router-dom'
import { RootRoute } from './root-router'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

export const Root = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        <RootRoute />
      </HashRouter>
    </ConfigProvider>
  )
}
