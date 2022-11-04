import { createSlice } from "@reduxjs/toolkit";

export const qrSlice = createSlice({
  name: "qrsettings",
  initialState: {
    qrSetting: {
    text: "https://bit.ly/3wOViMn",
    backgroundColor: "#F5F5F5",
    foregroundColor: "#000000",
    drawer: "square",
    preset: null,}
  },
  reducers: {
    setText: (state, action) => {
        console.log(action)
        state.qrSetting = {...state.qrSetting, text: action.payload}
    },
    setBackground: (state, action) => {
        state.qrSetting = {...state.qrSetting, backgroundColor: action.payload}
    },
    setForeground: (state, action) => {
        state.qrSetting = {...state.qrSetting, foregroundColor: action.payload}
    },
    setDrawer: (state, action) => {
        state.qrSetting = {...state.qrSetting, drawer: action.payload}
    },
    setPreset: (state, action) => {
        state.qrSetting = {...state.qrSetting, preset: action.payload}
    },
  },
});

export const { setText, setBackground, setForeground, setDrawer, setPreset } =
  qrSlice.actions;

export default qrSlice.reducer;
