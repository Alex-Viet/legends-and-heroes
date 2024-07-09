import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

interface LikesState {
  likedCharacters: string[];
}

const initialState: LikesState = {
  likedCharacters: [],
};

const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.likedCharacters.includes(id)) {
        state.likedCharacters = state.likedCharacters.filter(
          (charId) => charId !== id,
        );
      } else {
        state.likedCharacters.push(id);
      }
    },
  },
});

export const { toggleLike } = likesSlice.actions;
export const selectLikedCharacters = (state: RootState) =>
  state.likes.likedCharacters;
export default likesSlice.reducer;
