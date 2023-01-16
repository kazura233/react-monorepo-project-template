import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { GlobalStyle } from '~/styles/global'
import { RootRoute } from './root-router'
import { store } from '@react-monorepo-project-template/sdk-stores'

export const Root = () => {
  return (
    <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <HashRouter>
        <RootRoute></RootRoute>
      </HashRouter>
    </Provider>
  )
}
