import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../api/api';

export let admin_login = createAsyncThunk(
    "auth/admin_login",
    async(adminInfo)=>{
        console.log("adminInfo from reducer", adminInfo);
        
        try {
            let {data} = await api.post("/admin-login", adminInfo)
            
        } catch (error) {
            console.log(error);
            
        }
    }
)

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