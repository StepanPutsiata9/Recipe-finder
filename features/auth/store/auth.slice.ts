import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from '../types';

const initialState: AuthState = {
  user: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setLoading, setUser } = authSlice.actions;
export default authSlice.reducer;
