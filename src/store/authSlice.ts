// src/redux/slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  status: 'authenticated' | 'unauthenticated' | 'loading';
}

const initialState: AuthState = {
  status: 'unauthenticated',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.status = 'authenticated';
    },
    logout: (state) => {
      state.status = 'unauthenticated';
    },
    setLoading: (state) => {
      state.status = 'loading';
    },
  },
});

// Export the actions to dispatch them
export const { login, logout, setLoading } = authSlice.actions;

// Export the reducer to add it to the store
export default authSlice.reducer;

