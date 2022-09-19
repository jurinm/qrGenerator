import { createSlice } from "@reduxjs/toolkit";

export const qrAuth = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem('token'),
  },
  reducers: {
    login: (state, action) => {
      state.token = { token: action.payload };
    },
    logout: (state, action) => {
      state.token = null;
      localStorage.removeItem('token')
    },
  },
});

export const { login, logout } = qrAuth.actions;

export default qrAuth.reducer;
