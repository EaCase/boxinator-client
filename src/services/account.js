import { api } from './api'

export const accountApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMyAccount: build.query({
      query: () => `account/`,
      providesTags: ['Account'],
    }),
    getAccount: build.query({
      query: (id) => `account/${id}`,
    }),
    updateAccount: build.mutation({
      query(body) {
        return {
          url: `account/`,
          method: 'PUT',
          body
        }
      },
      invalidatesTags: ['Account'],
    }),
    deleteAccount: build.mutation({
      query(id) {
        return {
          url: `account/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (account) => [{ type: 'Account', id: account?.id }],
    }),
  }),
})

export const {
  useGetAccountQuery,
  useGetMyAccountQuery,
  useDeleteAccountMutation,
  useUpdateAccountMutation,
} = accountApi
