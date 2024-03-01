import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  getCategories: [],
}

export const fetchAllCategories = createAsyncThunk(
  'getCategories',
  async () => {
    const response =  await axios('https://assign-api.piton.com.tr/api/rest/categories');
    return (await response.data.category);
  },
)

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
      state.getCategories = [...action.payload];
    })
  },
})

// Action creators are generated for each case reducer function
export const { getCategories} = categorySlice.actions;

export default categorySlice.reducer