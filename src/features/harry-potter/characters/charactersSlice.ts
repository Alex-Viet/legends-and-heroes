import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface CharacterAttributes {
  alias_names: string[];
  blood_status: string | null;
  born: string | null;
  died: string | null;
  family_members: string[];
  house: string | null;
  image: string | null | undefined;
  jobs: string[];
  name: string;
  patronus: string | null;
  romances: string[];
  slug: string | null;
  titles: string[];
  wands: string[];
  wiki: string;
}

export interface Character {
  id: string;
  attributes: CharacterAttributes;
}

export interface Characters {
  data: Character[];
}

export const universeHPotterApi = createApi({
  reducerPath: 'universeHPotterApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.potterdb.com/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getPotterCharacters: builder.query<Characters, void>({
      query: () => 'v1/characters',
    }),
  }),
});

export const { useGetPotterCharactersQuery } = universeHPotterApi;
