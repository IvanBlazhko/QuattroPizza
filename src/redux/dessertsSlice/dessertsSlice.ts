import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dessertsApi = createApi({
  reducerPath: 'desserts',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://63ece61531ef61473b2bb3fb.mockapi.io/quattro-pizza/api/v1/',
  }),
  tagTypes: ['desserts'],
  endpoints: builder => ({
    getDesserts: builder.query<any, void>({
      query: () => ({
        url: '/desserts',
      }),
      providesTags: ['desserts'],
    }),
  }),
});

export const { useGetDessertsQuery } = dessertsApi;
