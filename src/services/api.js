import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex';
import { logout, tokensReceived } from '../state/actions';
import { API_BASE_URL } from '../constants';

// Create a new mutex
const mutex = new Mutex();
const baseUrl = API_BASE_URL

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: (headers, { getState, endpoint }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = (getState()).auth.token

    if (token && endpoint !== "refresh") {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
})

const customFetchBase = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  const result = await baseQuery(args, api, extraOptions);

  if ((result.error)?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        const refreshResult = await baseQuery(
          {
            url: 'auth/refresh',
            method: 'POST',
            body: { refreshToken: api.getState().auth?.refreshToken ?? '' }
          },
          {
            ...api,
            endpoint: 'refresh'
          },
          extraOptions
        );

        if (refreshResult.data) {
          // Retry the initial query
          api.dispatch(tokensReceived(refreshResult.data))
          return await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(logout());
          window.location.href = '/login';
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      return await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: customFetchBase,
  tagTypes: ['Auth', 'Account'],
  endpoints: () => ({}),
})
