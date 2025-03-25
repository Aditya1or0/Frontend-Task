import { configureStore } from '@reduxjs/toolkit';
import paymentReducer from './paymentSlice';

const store = configureStore({
  reducer: {
   payment:paymentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
