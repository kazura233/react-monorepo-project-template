import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { GlobalStyle } from '~/styles/global'
import { RootRoute } from './root-router'
import { store } from '@react-monorepo-project-template/sdk-stores'
import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider } from 'antd'

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
