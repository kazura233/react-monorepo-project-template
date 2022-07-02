import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IDemoStore {
  num: number
}

const initialState: IDemoStore = {
  num: 0,
}

export const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    increment: (state) => {
      state.num += 1
    },
    decrement: (state) => {
      state.num -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.num += action.payload
    },
  },
})

export const demoActions = demoSlice.actions
export * as demoGetters from './demo-getters'
