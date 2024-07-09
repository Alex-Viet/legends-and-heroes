import { configureStore } from '@reduxjs/toolkit';
import { universeHPotterApi } from '../features/harry-potter/characters/charactersSlice';
import likesReducer from '../features/harry-potter/likes/likesSlice';

export const store = configureStore({
  reducer: {
    [universeHPotterApi.reducerPath]: universeHPotterApi.reducer,
    likes: likesReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(universeHPotterApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
