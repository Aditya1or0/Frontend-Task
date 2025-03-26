import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrdersState } from "./type"
import { Order } from "./type";

const initialState: OrdersState = {
  pendingAcceptance: {
    newRequests: [],
  },
  closed: {
    completed: [],
    cancelled: [],
    rejected: [],
  },
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders(state, action: PayloadAction<OrdersState>) {
      return action.payload; // Replace with new data
    },
    addNewRequest(state, action: PayloadAction<Order>) {
      state.pendingAcceptance.newRequests.push(action.payload);
    },
    addCompletedOrder(state, action: PayloadAction<Order>) {
      state.closed.completed.push(action.payload);
    },
    addRejectedOrder(state, action: PayloadAction<Order>) {
      state.closed.rejected.push(action.payload);
    },
  },
});

export const { setOrders, addNewRequest, addCompletedOrder, addRejectedOrder } =
  ordersSlice.actions;
export default ordersSlice.reducer;
