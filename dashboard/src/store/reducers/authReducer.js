import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export let admin_login = createAsyncThunk(
  "auth/admin_login",
  async (adminInfo, { rejectWithValue, fulfillWithValue }) => {
    console.log("adminInfo from reducer", adminInfo);

    try {
      let { data } = await api.post("/admin-login", adminInfo, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
);

const initialState = {
  successMessage: "",
  errorMessage: "",
  loader: false,
  userInfo: "",
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearMessage: (state, action)=>{
        state.errorMessage = ""
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(admin_login.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(admin_login.rejected, (state, { payload }) => {
        (state.loader = false), (state.errorMessage = payload.error);
      });
  },
});

export const {clearMessage} = authReducer.actions

export default authReducer.reducer;
