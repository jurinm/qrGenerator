import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Conteiners/Auth/authSlice";
import qrReducer from '../Components/QrCode/qrSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    qr: qrReducer,
  },
});
