import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getAvatar, storeAvatar } from '../storage';
import { AvatarState } from '../types';

const initialState: AvatarState = {
  avatar: null,
  avatarLoading: false,
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
      return null;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
  }
);

export const loadAvatar = createAsyncThunk('auth/loadAvatar', async (_, { rejectWithValue }) => {
  try {
    const userAva = await getAvatar();
    return userAva;
  } catch (error) {
    return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
  }
});
const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.avatarLoading = action.payload;
    },
    clearAvatar(state) {
      state.avatar = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setAva.fulfilled, (state, action) => {
        state.avatar = action.payload;
      })

      .addCase(loadAvatar.fulfilled, (state, action) => {
        state.avatar = action.payload;
      });
  },
});

export const { setLoading, clearAvatar } = avatarSlice.actions;
export default avatarSlice.reducer;
