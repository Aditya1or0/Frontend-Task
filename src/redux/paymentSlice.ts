import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaymentState {
  grossAmount: number;
  pharmacyDiscount: number;
  deliveryCharges: string;
  roundOff: string;
  totalAmount: number;
  items: Array<{
    name: string;
    price: number;
    quantity: number;
    unit: string;
    manufacturer: string;
    deliveryDate: string;
    modificationReason: string;
  }>;
}

const initialState: PaymentState = {
  grossAmount: 200,
  pharmacyDiscount: -20,
  deliveryCharges: 'N/A',
  roundOff: 'N/A',
  totalAmount: 180,
  items: [
    {
      name: 'Paracetamol 500 Mg',
      price: 100,
      quantity: 50,
      unit: 'Tablets',
      manufacturer: 'Sun Pharmaceutical',
      deliveryDate: '04-02-2025',
      modificationReason: 'Medicine not available in stock',
    },
    {
      name: 'Paracetamol 500 Mg',
      price: 100,
      quantity: 50,
      unit: 'Tablets',
      manufacturer: 'Sun Pharmaceutical',
      deliveryDate: '04-02-2025',
      modificationReason: 'Medicine not available in stock',
    },
  
  ],
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentDetails(state, action: PayloadAction<PaymentState>) {
      return action.payload;
    },
  },
});

export const { setPaymentDetails } = paymentSlice.actions;
export default paymentSlice.reducer;
