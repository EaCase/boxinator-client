import { retry } from '@reduxjs/toolkit/query/react'
import { api } from './api'

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
      extraOptions: {
        backoff: () => {
          retry.fail({ fake: 'error' })
        },
      },
    }),
  }),
})

export const { useLoginMutation } = authApi
export const { endpoints: { login } } = authApi
