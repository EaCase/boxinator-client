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
      invalidatesTags: ["Shipments"],
      /* Get this working instead of tags
      // update getShipments query manually, avoids refetch
      async onQueryStarted({ accountId, from, to }, { queryFulfilled, dispatch }) {
        try {
          const { data: newShipment } = await queryFulfilled;
          console.log("UPDATING")
          // Get rid of hard coded values once details are available
          dispatch(api.util.updateQueryData('getShipments', , (shipments) => {
            shipments?.push(newShipment);
          }))
        } catch (e) {
          console.log(e);
        }
      }*/
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
      // update allShipments and getShipment queries manually
      /*async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data: updatedShipment } = await queryFulfilled;

          dispatch(api.util.updateQueryData('getShipments', undefined, (shipments) => {
            shipments?.map(item => item.id === args.id ? updatedShipment : item);
          }))
          dispatch(api.util.updateQueryData('getShipment', undefined, (shipment) => {
            Object.assign(shipment, updatedShipment)
          }))
        } catch (e) {
          console.log(e);
        }
      }*/
    }),
    deleteShipment: build.mutation({
      query(id) {
        return {
          url: `shipments/${id}`,
          method: 'DELETE',
        }
      },
      /*async onQueryStarted(id, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          dispatch(api.util.updateQueryData('getShipments', undefined, (shipments) => {
            return shipments?.filter(shipment => shipment.id !== id)
          }))
        } catch (e) {
          console.log(e);
        }
      }*/
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
