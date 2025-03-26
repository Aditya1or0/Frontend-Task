import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "./store";

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
