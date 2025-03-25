import React from "react";
import BottomButton from "./BottomButton";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const PaymentDetail: React.FC = () => {
  const payment = useSelector((state: RootState) => state.payment);
  return (
    <div className="bg-green-300/20 relative ">
      <div className="m-3">
        <h1 className="font-bold text-sky-800 text-xl ">
          Payment Details Batch 1
        </h1>
        <div className="flex justify-between">
          <h1 className="text-gray-900 font-semibold">Gross Amount</h1>
          <span className="text-gray-700 font-semibold">
            {payment.grossAmount}
          </span>
        </div>
        <div className="flex justify-between">
          <h1 className="text-gray-900 font-semibold">Pharmacy Discount</h1>
          <span className="text-gray-700 font-semibold">
            {payment.pharmacyDiscount}
          </span>
        </div>
        <div className="flex justify-between">
          <h1 className="text-gray-900 font-semibold">Delivery Charges</h1>
          <span className="text-gray-700 font-semibold">
            {payment.deliveryCharges}
          </span>
        </div>
        <div className="flex justify-between">
          <h1 className="text-gray-900 font-semibold">Round Off</h1>
          <span className="text-gray-700 font-semibold">
            {payment.roundOff}
          </span>
        </div>
        <div className="flex justify-between">
          <h1 className="text-gray-900 font-semibold">Total Amount</h1>
          <span className="text-gray-700 font-semibold">
            {payment.totalAmount}
          </span>
        </div>
      </div>
      <BottomButton />
    </div>
  );
};

export default PaymentDetail;
