import { api } from './api'

export const shipmentApi = api.injectEndpoints({
  endpoints: (build) => ({
    getShipments: build.query({
      query: () => ({ url: "shipments/" }),
      providesTags: ["Shipments"],
    }),
    getShipment: build.query({
      query: (id) => `shipments/${id}`,
      providesTags: (result, error, id) => [{ type: "Shipment", id }],
    }),
    getShipmentCost: build.query({
      query: ({ boxTierId, countryId }) => ({ url: "shipments/cost", params: { boxTierId, countryId } })
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
      invalidatesTags: (result, error, arg) => ["Shipments", { type: "Shipment", id: arg.id }],
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
    updateShipmentStatus: build.mutation({
      query(data) {
        const { shipmentId, status } = data
        return {
          url: `shipments/${shipmentId}`,
          method: 'PUT',
          body: status
        }
      },
      invalidatesTags: (result, error, arg) => ["Shipments", { type: "Shipment", id: arg.id }],
    }),
  })
})

export const {
  useAddShipmentMutation,
  useDeleteShipmentMutation,
  useGetShipmentQuery,
  useGetShipmentsQuery,
  useGetShipmentCostQuery,
  useUpdateShipmentMutation,
  useUpdateShipmentStatusMutation
} = shipmentApi

export const {
  endpoints: { getShipment },
} = shipmentApi
