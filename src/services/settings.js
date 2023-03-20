import { api } from './api'

export const settingsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCountries: build.query({
      query: () => ({ url: 'settings/countries' })
    }),
    getTiers: build.query({
      query: () => ({ url: 'boxes/tiers' })
    }),
  }),
})

export const { useGetCountriesQuery, useGetTiersQuery } = settingsApi
