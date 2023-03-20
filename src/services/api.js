import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

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

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Auth', 'Account'],
  endpoints: (build) => ({
    getTiers: build.query({
      query: () => ({ url: 'tiers' })
    }),
    getCountries: build.query({
      query: () => ({ url: 'countries' })
    }),
    getPrice: build.query({
      query: () => ({ url: 'price' })
    }),
  }),
})

export const {
  useGetTiersQuery,
  useGetCountriesQuery,
  useGetPriceQuery
} = api
