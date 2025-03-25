// Card.tsx
import React from "react";
import { useSelector } from "react-redux";
import { Button } from "./ui/button";
import { CalendarDays } from "lucide-react";
import { RootState } from "../redux/store";

const Card: React.FC = () => {
  const items = useSelector((state: RootState) => state.payment.items);

  return (
    <div className="flex flex-col my-12 p-3">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-400 p-3 m-2 rounded-md">
          <div className="flex justify-between">
            <p className="flex gap-1 text-gray-500 font-bold text-sm sm:text-lg">
              <CalendarDays className="text-gray-400" />
              Delivery Date: {item.deliveryDate}
            </p>
            <Button variant="outline">Edit Split Delivery Date</Button>
          </div>

          <div className="border-2 border-sky-300 bg-sky-100/50 rounded-lg p-2 my-2">
            <div className="flex justify-between">
              <h1 className="font-bold text-gray-900">{item.name}</h1>
              <span className="font-semibold text-gray-900">
                Rs. {item.price}
              </span>
            </div>

            <div className="mb-2">
              <h3 className="text-gray-700 font-medium">
                Qty: {item.quantity}X {item.unit}
              </h3>
              <div className="flex justify-between">
                <h3 className="text-gray-700 font-medium">
                  MFR: {item.manufacturer}
                </h3>
                <Button className="bg-sky-800">Modify</Button>
              </div>
            </div>
            <hr className="border-t border-cyan-400 border-dashed" />
            <div className="mt-2">
              <p className="text-sky-800 font-bold">
                Reason for modification:{" "}
                <span className="font-semibold">{item.modificationReason}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
