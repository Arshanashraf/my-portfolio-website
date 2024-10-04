// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Import the auth slice

// Create the Redux store by combining reducers
const store = configureStore({
  reducer: {
    auth: authReducer, // Add the auth slice to the store
    // Add other slices here as needed
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>; // RootState type
export type AppDispatch = typeof store.dispatch; // AppDispatch type

// Export the store to provide it to the app
export default store;
