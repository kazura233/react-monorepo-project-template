import React, { type PropsWithChildren } from 'react'
import { css, cx } from '@emotion/css'

const mainStyle = css`
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
    <main style={style} className={cx(mainStyle, className)}>
      {children}
    </main>
  )
}
