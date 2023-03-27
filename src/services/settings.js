import { api } from './api'

export const settingsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCountries: build.query({
      query: () => ({ url: 'settings/countries' })
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
    }),
    updateCountry: build.mutation({
      query(data) {
        const { countryId, body } = data
        return {
          url: `settings/countries/update/${countryId}`,
          method: 'PUT',
          body
        }
      },
    }),
  })
})

export const { useGetCountriesQuery, useGetTiersQuery, useAddCountryMutation, useUpdateCountryMutation } = settingsApi
