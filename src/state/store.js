import { configureStore } from "@reduxjs/toolkit";
import shipmentReducer from "./shipment/shipmentSlice";
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    shipmentReducer,
    authReducer
  },
  devTools: true
});
