import React, { type PropsWithChildren } from 'react'
import { css, cx } from '@emotion/css'

const headerStyle = css`
  box-sizing: border-box;
  flex-shrink: 0;
`

export interface IHeaderProps {
  height?: string
  style?: React.CSSProperties
  className?: string
}

export const Header: React.FC<PropsWithChildren<IHeaderProps>> = (props) => {
  const { height = '60px', children, style, className } = props
  return (
    <header style={{ height, ...style }} className={cx(headerStyle, className)}>
      {children}
    </header>
  )
}
