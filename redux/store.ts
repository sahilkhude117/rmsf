import { configureStore } from '@reduxjs/toolkit';
import donationReducer from './donationSlice';

export const store = configureStore({
  reducer: {
    donation: donationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
