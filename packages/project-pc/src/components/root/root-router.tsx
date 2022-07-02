import { Routes, Route, Navigate } from 'react-router-dom'
import LayoutHelloWorld from '~/layouts/hello-world'
import PageHelloWorld from '~/pages/hello-world'

export const RootRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/hello-world" element={<LayoutHelloWorld />}>
        <Route path="" element={<PageHelloWorld />}></Route>
      </Route>
      <Route path="*" element={<Navigate to="/hello-world" replace />}></Route>
    </Routes>
  )
}
