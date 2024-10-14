import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   successMessage: "",
   errorMessage: "",
   loader: false,
   userInfo: ""
}

export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   
  },
})

export default authReducer.reducer