import { Outlet } from 'react-router-dom'
import { Container } from '~/components/container'
import { Header } from '~/components/header'
import { Main } from '~/components/main'

export const LayoutHelloWorld: React.FC = () => {
  return (
    <Container direction="vertical">
      <Header>
        <h1>LayoutHelloWorld</h1>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Container>
  )
}

export default LayoutHelloWorld
