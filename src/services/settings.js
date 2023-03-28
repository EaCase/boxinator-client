import { api } from './api'

export const settingsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCountries: build.query({
      query: () => ({ url: 'settings/countries' }),
      providesTags: ["Countries"]
    }),
    getCountryName: build.query({
      query: (id) => ({ url: `settings/countries/${id}` }),
    }),
    getTiers: build.query({
      query: () => ({ url: 'boxes/tiers' })
    }),
    addCountry: build.mutation({
      query: (body) => ({
        url: `settings/countries`,
        method: 'POST',
        body
      }),
      invalidatesTags: ["Countries"]
    }),
    updateCountry: build.mutation({
      query(data) {
        const { countryId, body } = data
        return {
          url: `settings/countries/${countryId}`,
          method: 'PUT',
          body
        }
      },
      invalidatesTags: ["Countries"]
    })
  })
})

export const { useGetCountriesQuery, useGetCountryNameQuery, useGetTiersQuery, useAddCountryMutation, useUpdateCountryMutation } = settingsApi
