import { api } from './api'


export const accountApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAccount: build.query({
      query: () => `account/`,
    }),
    updateAccount: build.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `account/${id}`,
          method: 'PUT',
          body,
        }
      },
      invalidatesTags: (account) => [{ type: 'Account', id: account?.id }],
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
  useDeleteAccountMutation,
  useUpdateAccountMutation,
} = accountApi
