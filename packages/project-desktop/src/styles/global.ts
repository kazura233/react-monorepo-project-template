import { Global, css } from '@emotion/react'
import 'antd/dist/antd.css'

const styles = css`
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

export const GlobalStyle = () => <Global styles={styles} />
