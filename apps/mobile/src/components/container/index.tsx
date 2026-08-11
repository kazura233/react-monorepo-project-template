import React, { type PropsWithChildren } from 'react'
import { css, cx } from '@emotion/css'

type direction = 'vertical' | 'horizontal'

const containerStyle = css`
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
  height: 100%;
`

const columnStyle = css`
  flex-direction: column;
`

export interface IContainerProps {
  direction: direction
  style?: React.CSSProperties
  className?: string
}

export const Container: React.FC<PropsWithChildren<IContainerProps>> = (props) => {
  const { direction, children, style, className } = props
  return (
    <section
      className={cx(containerStyle, direction === 'vertical' ? columnStyle : undefined, className)}
      style={style}
    >
      {children}
    </section>
  )
}
