import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3001/',
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = (getState()).auth.token
    if (token) {
      headers.set('authentication', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 })

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Auth', 'Shipment'],
  endpoints: () => ({}),
})

export const enhancedApi = api.enhanceEndpoints({
  endpoints: () => ({
    getPost: () => 'test',
  }),
})