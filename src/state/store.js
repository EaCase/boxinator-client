import { useDispatch, useSelector } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import { api } from '../services/api';
import authReducer from "./authSlice";

export const createStore = (
  options
) =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
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
