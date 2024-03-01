import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user : false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authChange :(state)=>{
            state.user = true;
        }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { authChange } = userSlice.actions;
  
  export default userSlice.reducer