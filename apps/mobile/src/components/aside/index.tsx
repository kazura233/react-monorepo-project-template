import React, { type PropsWithChildren } from 'react'
import { css, cx } from '@emotion/css'

const asideStyle = css`
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
`

export interface IAsideProps {
  width?: string
  style?: React.CSSProperties
  className?: string
}

export const Aside: React.FC<PropsWithChildren<IAsideProps>> = (props) => {
  const { width = '300px', children, style, className } = props
  return (
    <aside style={{ width, ...style }} className={cx(asideStyle, className)}>
      {children}
    </aside>
  )
}
