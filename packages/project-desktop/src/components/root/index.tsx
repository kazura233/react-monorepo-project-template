import { HashRouter } from 'react-router-dom'
import { GlobalStyle } from '~/styles/global'
import { RootRoute } from './root-router'
import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider } from 'antd'

export const Root = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <GlobalStyle></GlobalStyle>
      <HashRouter>
        <RootRoute></RootRoute>
      </HashRouter>
    </ConfigProvider>
  )
}
