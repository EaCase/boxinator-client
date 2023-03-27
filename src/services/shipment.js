import { api } from './api'

export const shipmentApi = api.injectEndpoints({
  endpoints: (build) => ({
    getShipments: build.query({
      query: () => ({ url: 'shipments/' }),
      providesTags: ["Shipments"],
    }),
    getShipment: build.query({
      query: (id) => `shipments/${id}`,
    }),
    getShipmentCost: build.query({
      query: ({ boxTierId, countryId }) => ({ url: 'shipments/cost', params: { boxTierId, countryId } })
    }),
    addShipment: build.mutation({
      query: (args) => ({
        url: `shipments/`,
        method: 'POST',
        body: args.body,
        params: args.params
      }),
      invalidatesTags: ["Shipments"]
    }),
    updateShipment: build.mutation({
      query(data) {
        const { shipmentId, body } = data
        return {
          url: `shipments/update/${shipmentId}`,
          method: 'PUT',
          body
        }
      },
      invalidatesTags: ["Shipments"]
    }),
    deleteShipment: build.mutation({
      query(id) {
        return {
          url: `shipments/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: ["Shipments"]
    }),
  }),
})

export const {
  useAddShipmentMutation,
  useDeleteShipmentMutation,
  useGetShipmentQuery,
  useGetShipmentsQuery,
  useGetShipmentCostQuery,
  useUpdateShipmentMutation
} = shipmentApi

export const {
  endpoints: { getShipment },
} = shipmentApi
