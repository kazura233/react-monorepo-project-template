import { Spin } from 'antd'
import { css } from '@emotion/css'
import React, { Suspense, useEffect, useState } from 'react'

export const Loading: React.FC = () => {
  return (
    <Spin
      size="large"
      className={css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `}
    />
  )
}

export const withLoading = (CurrentComponent: React.ComponentType) => {
  return (
    <Suspense fallback={<Loading />}>
      <CurrentComponent />
    </Suspense>
  )
}

export const withFetchLoading =
  (CurrentComponent: React.ComponentType<any>, requests: () => Promise<any>[]) => () => {
    const [result, setResult] = useState<any[] | null>(null)

    useEffect(() => {
      Promise.all(requests()).then((_) => setResult(_))
    }, [])

    return result ? <CurrentComponent result={result} /> : <Loading />
  }
