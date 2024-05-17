import { injectGlobal } from '@emotion/css'
import 'antd/dist/reset.css'

injectGlobal`
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
    height: 100%;
    .ant-layout-header,
    .ant-layout-footer {
      padding: 0;
    }
  }
`
