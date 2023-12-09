import React, { PropsWithChildren } from 'react'
import styled from '@emotion/styled'

const StyledAside = styled.aside`
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
`

export interface IAsideProps {
  width?: string
  style?: React.CSSProperties
}

export const Aside: React.FC<PropsWithChildren<IAsideProps>> = (props) => {
  const { width = '300px', children, style } = props
  return <StyledAside style={{ width, ...style }}>{children}</StyledAside>
}

export default Aside
