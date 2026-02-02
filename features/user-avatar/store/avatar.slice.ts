import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getAvatar, storeAvatar } from '../storage';
import { AvatarState } from '../types';

const initialState: AvatarState = {
  avatar: null,
  avatarLoading: false,
  avatarError: null,
};

export const setAva = createAsyncThunk(
  'auth/setavatar',
  async (avatar: string | null, { rejectWithValue }) => {
    try {
      if (avatar) {
        await storeAvatar(avatar);
        const userAva = await getAvatar();
        return userAva;
      }
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
  }
);

const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.avatarLoading = action.payload;
    },
    setError(state, action) {
      state.avatarError = action.payload;
    },
    clearAvatar(state) {
      state.avatar = null;
    },
  },
  extraReducers: (builder) => {},
});

export const { setLoading, setError, clearAvatar } = avatarSlice.actions;
export default avatarSlice.reducer;
