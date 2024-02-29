import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  categories: ["Deneme"],
  products:[],
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    getCategories: async() => {
        this.state.categories = await axios('https://assign-api.piton.com.tr/api/rest/categories');
        console.log("categories : ",this.state.categories);
    },
    getProducts:async(categoryId) => {
        this.state.products = await axios(`https://assign-api.piton.com.tr/api/rest/products/${categoryId}`);
        console.log("products : ", this.state.products);
    },
  },
})

// Action creators are generated for each case reducer function
export const { getCategories, getProducts } = categorySlice.actions

export default categorySlice.reducer