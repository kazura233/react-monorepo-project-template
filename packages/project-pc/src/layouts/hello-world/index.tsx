import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
const { Header, Content } = Layout

export const LayoutHelloWorld: React.FC = () => {
  return (
    <Layout>
      <Header>
        <h1>LayoutHelloWorld</h1>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  )
}

export default LayoutHelloWorld
