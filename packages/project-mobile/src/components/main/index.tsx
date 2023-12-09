import React, { PropsWithChildren } from 'react'
import styled from '@emotion/styled'

const StyledMain = styled.main`
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
  height: 100%;
`

export interface IMainProps {
  style?: React.CSSProperties
}

export const Main: React.FC<PropsWithChildren<IMainProps>> = (props) => {
  const { children, style } = props
  return <StyledMain style={style}>{children}</StyledMain>
}

export default Main
