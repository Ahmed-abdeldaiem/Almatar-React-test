// store.js
import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from './Slices/User-slice';

const store = configureStore({
  reducer: {
    loginAccess: userSliceReducer,
    // Add other reducers as needed
  },
});

export default store;
