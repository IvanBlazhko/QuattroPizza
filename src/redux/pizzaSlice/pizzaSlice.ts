import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pizzaApi = createApi({
  reducerPath: 'pizza',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://63ece61531ef61473b2bb3fb.mockapi.io/quattro-pizza/api/v1/',
  }),
  tagTypes: ['pizza'],
  endpoints: builder => ({
    getAllPizza: builder.query<any, void>({
      query: () => ({
        url: '/pizza',
      }),
      providesTags: ['pizza'],
    }),
  }),
});

export const { useGetAllPizzaQuery } = pizzaApi;
