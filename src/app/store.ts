import { configureStore } from '@reduxjs/toolkit';
import { universeHPotterApi } from '../features/harry-potter/characters/charactersSlice';

export const store = configureStore({
  reducer: {
    [universeHPotterApi.reducerPath]: universeHPotterApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(universeHPotterApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
