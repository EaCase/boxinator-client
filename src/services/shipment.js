import { api } from './api'

export const shipmentApi = api.injectEndpoints({
  endpoints: (build) => ({
    getShipments: build.query({
      query: () => ({ url: 'shipments' }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Shipments', id })),
        { type: 'Shipments', id: 'LIST' },
      ],
    }),
    addShipment: build.mutation({
      query: (body) => ({
        url: `shipments`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Shipments', id: 'LIST' }],
    }),
    getShipment: build.query({
      query: (id) => `shipments/${id}`,
      providesTags: (_post, _err, id) => [{ type: 'Shipments', id }],
    }),
    updateShipment: build.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `shipments/${id}`,
          method: 'PUT',
          body,
        }
      },
      invalidatesTags: (post) => [{ type: 'Shipments', id: post?.id }],
    }),
    deleteShipment: build.mutation({
      query(id) {
        return {
          url: `shipments/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (post) => [{ type: 'Shipments', id: post?.id }],
    }),
    getErrorProne: build.query({
      query: () => 'error-prone',
    }),
  }),
})

export const {
  useAddShipmentMutation,
  useDeleteShipmentMutation,
  useGetShipmentQuery,
  useGetShipmentsQuery,
  useUpdateShipmentMutation,
  useGetErrorProneQuery,
} = shipmentApi

export const {
  endpoints: { login, getShipment },
} = shipmentApi
