import {
  demoActions,
  demoGetters,
} from '@react-monorepo-project-template/sdk-stores'
import { Button, Input } from 'antd'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const PageHelloWorld: React.FC = () => {
  const num = useSelector(demoGetters.numGetter())
  const dispatch = useDispatch()

  const [value, setValue] = useState(0)

  return (
    <div>
      <p>PageHelloWorld</p>
      <p>num: {num}</p>
      <p>
        <Button onClick={() => dispatch(demoActions.increment())}>
          increment
        </Button>
      </p>
      <p>
        <Button onClick={() => dispatch(demoActions.decrement())}>
          decrement
        </Button>
      </p>
      <p>
        <Input
          type="number"
          value={value}
          onChange={(event) => {
            const int = parseInt(event.currentTarget.value)
            setValue(isNaN(int) ? 0 : int)
          }}
          style={{ width: 150 }}
        />
        <Button onClick={() => dispatch(demoActions.incrementByAmount(value))}>
          incrementByAmount
        </Button>
      </p>
      <p>This project was generated with by react-monorepo-project-template</p>
    </div>
  )
}

export default PageHelloWorld
