import { retry } from '@reduxjs/toolkit/query/react'
import { api } from './api'

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
      extraOptions: {
        backoff: () => {
          retry.fail({ fake: 'error' })
        },
      },
    }),
    createAccount: build.mutation({
      query: (body) => ({
        url: `auth/register`,
        method: 'POST',
        body,
      })
    }),
  }),
})

export const { useLoginMutation, useCreateAccountMutation } = authApi
export const { endpoints: { login } } = authApi
