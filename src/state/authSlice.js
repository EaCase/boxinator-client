import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../services/auth'

const initialState = {
  token: null,
  refreshToken: null,
  role: null,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchPending, (state, action) => {
        console.log('pending', action)
      })
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        console.log('fulfilled', action)
        state.token = action.payload.accessToken
        state.refreshToken = action.payload.refreshToken
        state.role = action.payload.accountType
      })
      .addMatcher(authApi.endpoints.login.matchRejected, (state, action) => {
        console.log('rejected', action)
      })
  },
})

export const { logout } = slice.actions
export default slice.reducer

export const selectIsAuthenticated = (state) =>
  state.auth.isAuthenticated
