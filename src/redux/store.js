import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './book/categorySlice'

export const store = configureStore({
  reducer: {
    category : categoryReducer,
  },
})