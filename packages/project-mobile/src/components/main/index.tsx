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
  className?: string
}

export const Main: React.FC<PropsWithChildren<IMainProps>> = (props) => {
  const { children, style, className } = props
  return (
    <StyledMain style={style} className={className}>
      {children}
    </StyledMain>
  )
}

export default Main
