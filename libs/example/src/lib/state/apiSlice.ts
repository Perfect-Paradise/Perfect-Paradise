import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// https://lol-web-api.op.gg/api/v1.0/internal/bypass/meta
export const exampleApi = createApi({
  reducerPath: 'exampleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://lol-web-api.op.gg/api/v1.0/internal/bypass/meta',
  }),
  endpoints: (builder) => ({
    getAllChampions: builder.query({
      query: () => ({
        url: 'champions',
      }),
    }),
  }),
});

export const { useGetAllChampionsQuery } = exampleApi;
