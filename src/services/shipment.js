import { api } from './api'

export const shipmentApi = api.injectEndpoints({
  endpoints: (build) => ({
    getShipments: build.query({
      query: () => ({ url: 'shipments' })
    }),
    getShipment: build.query({
      query: (id) => `shipments/${id}`,
    }),
    addShipment: build.mutation({
      query: (body) => ({
        url: `shipments`,
        method: 'POST',
        body,
      }),
      // update getShipments query manually, avoids refetch
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data: newShipment } = await queryFulfilled;
          dispatch(api.util.updateQueryData('getShipments', undefined, (shipments) => {
            shipments?.push(newShipment);
          }))
        } catch (e) {
          console.log(e);
        }
      }
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
      // update allShipments and getShipment queries manually
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
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
      }
    }),
    deleteShipment: build.mutation({
      query(id) {
        return {
          url: `shipments/${id}`,
          method: 'DELETE',
        }
      },
      async onQueryStarted(id, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          dispatch(api.util.updateQueryData('getShipments', undefined, (shipments) => {
            return shipments?.filter(shipment => shipment.id !== id)
          }))
        } catch (e) {
          console.log(e);
        }
      }
    }),
  }),
})

export const {
  useAddShipmentMutation,
  useDeleteShipmentMutation,
  useGetShipmentQuery,
  useGetShipmentsQuery,
  useUpdateShipmentMutation
} = shipmentApi

export const {
  endpoints: { getShipment },
} = shipmentApi
