import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import keycloak from '../keycloak'

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8080/',
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = (getState()).auth.token
    //const { token } = keycloak

    if (token) {
      headers.set('authentication', `Bearer ${token}`)
    }

    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Auth', 'Account'],
  endpoints: () => ({}),
})
