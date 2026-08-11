import React, { type PropsWithChildren } from 'react'
import { css, cx } from '@emotion/css'

const footerStyle = css`
  box-sizing: border-box;
  flex-shrink: 0;
`

export interface IFooterProps {
  height?: string
  style?: React.CSSProperties
  className?: string
}

export const Footer: React.FC<PropsWithChildren<IFooterProps>> = (props) => {
  const { height = '60px', children, style, className } = props
  return (
    <footer style={{ height, ...style }} className={cx(footerStyle, className)}>
      {children}
    </footer>
  )
}
