import { configureStore } from "@reduxjs/toolkit";
import qrReducer from '../Components/QrCode/qrSlice';

export default configureStore({
  reducer: {
    qr: qrReducer,
  },
});
