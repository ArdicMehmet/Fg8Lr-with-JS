import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  getProducts: [],
}

export const fetchAllBooks = createAsyncThunk(
  'getBooks',
  async (id) => {
    const response =  await axios(`https://assign-api.piton.com.tr/api/rest/products/${id}`);
    return ({id:id, books : response.data.product});
  },
)


export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAllBooks.fulfilled, (state, action) => {
      state.getProducts.push(action.payload);
    })
  },
})

// Action creators are generated for each case reducer function
export const {getProducts } = bookSlice.actions;

export default bookSlice.reducer