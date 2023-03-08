import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const drinksApi = createApi({
  reducerPath: 'drinks',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://63ed21a53d9c852c3f56a38d.mockapi.io/quattro-pizza/api/v1/',
  }),
  tagTypes: ['drinks'],
  endpoints: builder => ({
    getDrinks: builder.query<any, void>({
      query: () => ({
        url: '/drinks',
      }),
      providesTags: ['drinks'],
    }),
  }),
});

export const { useGetDrinksQuery } = drinksApi;
