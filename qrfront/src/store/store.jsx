import { configureStore } from "@reduxjs/toolkit";
import qrReducer from '../Components/QrCode/qrSlice';
import authReducer from '../Conteiners/Auth/authSlice';

export default configureStore({
  reducer: {
    qr: qrReducer,
    auth: authReducer
  },
});
