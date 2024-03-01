import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './book/categorySlice'
import bookSlice from './book/bookSlice'

export const store = configureStore({
  reducer: {
    category : categoryReducer,
    book: bookSlice,
  },
})