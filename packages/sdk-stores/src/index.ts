import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'
import { demoSlice } from './demo'

export * from 'immer'
export * from 'redux-thunk'

export * from './demo'

export const store = configureStore({
  reducer: {
    demo: demoSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
