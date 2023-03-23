import { api } from './api'


export const accountApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAccount: build.query({
      query: () => `account/`,
    }),
    updateAccount: build.mutation({
      query(data) {
        const { values } = data
        console.log(values)

        return {
          url: `account/`,
          method: 'PUT',
          body:values,
        }
      },
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
