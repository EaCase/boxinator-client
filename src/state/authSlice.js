import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../services/auth'
import { getTokenFields } from '../utils/utils'
import { logout, tokensReceived } from './actions'

const initialState = {
  token: null,
  refreshToken: null,
  role: null,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logout, (state) => {
        localStorage.removeItem("auth")
        state = initialState
      })
      .addCase(tokensReceived, (state, action) => {
        localStorage.setItem("auth", JSON.stringify(getTokenFields(action.payload)))
        state.token = action.payload.accessToken
        state.refreshToken = action.payload.refreshToken
        state.role = action.payload.accountType
      })
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        localStorage.setItem("auth", JSON.stringify(getTokenFields(action.payload)))
        state.token = action.payload.accessToken
        state.refreshToken = action.payload.refreshToken
        state.role = action.payload.accountType
      })
  },
})

export default slice.reducer
