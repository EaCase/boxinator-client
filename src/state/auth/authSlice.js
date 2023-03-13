import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {}
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: {},
});

export const { addAll } = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
