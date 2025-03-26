export interface Medicine {
    id: number;
    medicineName: string;
    mrp: number;
    quantity: number;
    manufacturer: string;
    pharmacyReceivable: number;
  }
  
  export interface Order {
    orderId: string;
    status: string;
    customerName: string;
    address: string;
    amount: number;
    quantity: number;
    createdDate: number;
    createdTime: number;
    medicineDetails?: Medicine[];
  }
  
  export interface OrdersState {
    pendingAcceptance: {
      newRequests: Order[];
    };
    closed: {
      completed: Order[];
      cancelled: Order[];
      rejected: Order[];
    };
  }
  