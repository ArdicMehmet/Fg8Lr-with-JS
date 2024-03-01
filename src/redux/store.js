import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './book/categorySlice'
import bookSlice from './book/bookSlice'
import userSlice from './user/userSlice'

export const store = configureStore({
  reducer: {
    category : categoryReducer,
    book: bookSlice,
    user: userSlice,
  },
})