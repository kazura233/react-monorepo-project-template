import { css, createGlobalStyle } from 'styled-components'
import 'antd/dist/antd.css'

const style = css`
  * {
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #root {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
  }

  .ant-layout {
    min-height: 100vh;
    .ant-layout-header,
    .ant-layout-footer {
      padding: 0;
    }
  }
`

export const GlobalStyle = createGlobalStyle`
  ${style}
`
