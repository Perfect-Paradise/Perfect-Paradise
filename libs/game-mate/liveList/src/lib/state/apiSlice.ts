import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface LiveItem {
  url: string;
  username: string;
  status_message: string;
}

export interface ApiResponse {
  items: LiveItem[];
}

export const liveListApi = createApi({
  reducerPath: 'liveListApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5566/api/', // https://jsoneditoronline.org/#left=cloud.151b5373525244b9805afc307f047416
  }),
  endpoints: (builder) => ({
    getAllLiveItems: builder.query<ApiResponse, void>({
      query: () => `items`,
    }),
  }),
});

export const { useGetAllLiveItemsQuery } = liveListApi;