import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { GlobalStyle } from '~/styles/global'
import { RootRoute } from './root-router'
import { store } from '@react-monorepo-project-template/sdk-stores'
import { ConfigProvider } from 'antd-mobile'
import zhCN from 'antd-mobile/es/locales/zh-CN'

export const Root = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <GlobalStyle></GlobalStyle>
        <HashRouter>
          <RootRoute></RootRoute>
        </HashRouter>
      </Provider>
    </ConfigProvider>
  )
}
