import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Character {
  data: unknown;
}

export const universeHPotterApi = createApi({
  reducerPath: 'universeHPotterApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.potterdb.com/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getPotterCharacters: builder.query<Character, void>({
      query: () => 'v1/characters',
    }),
  }),
});

export const { useGetPotterCharactersQuery } = universeHPotterApi;
