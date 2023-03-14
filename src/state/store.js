import { useDispatch, useSelector } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import { api } from '../services/api';
import shipmentReducer from "./shipment/shipmentSlice";
import authReducer from "./auth/authSlice";

export const createStore = (
  options
) =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      shipment: shipmentReducer,
      auth: authReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    ...options,
  })

export const store = createStore()

export const useAppDispatch = useDispatch
export const useTypedSelector = useSelector