import React from "react";
import { Button } from "./ui/button";
import { CalendarDays } from "lucide-react";

const Card: React.FC = () => {
  return (
    <div className="flex flex-col my-12  p-3">
      <div className="border border-gray-400 p-3 m-2 rounded-md">
        <div className="flex justify-between">
          <p className="flex gap-1 text-gray-500 font-bold  text-sm sm:text-lg">
            <CalendarDays className="text-gray-400" />
            Delivery Date: 04-02-2025
          </p>
          <Button variant="outline">Edit Split Delivery Date</Button>
        </div>

        <div className="border-2   border-sky-300 bg-sky-100/50 rounded-lg p-2 my-2">
          <div className="flex justify-between">
            <h1 className="font-bold text-gray-900 ">Paracetamol 500 Mg</h1>
            <span>Rs. 100</span>
          </div>

          <div className="mb-2">
            <h3 className="text-gray-700 font-medium">Qty: 1X 50</h3>
            <div className="flex justify-between ">
              <h3 className="text-gray-700 font-medium">
                MFR:SUn Pharmaceutical
              </h3>
              <Button className="bg-sky-800">Modify</Button>
            </div>
          </div>
          <hr className="border-t border-cyan-400 border-dashed" />
          <div className="mt-2">
            <p className="text-sky-800 font-bold">
              Reason for modification:{" "}
              <span className="font-semibold">
                Medicine not available in stock
              </span>
            </p>
          </div>
        </div>

        <div className="border-2 bg-sky-100/50  border-sky-300 rounded-lg p-2 my-2">
          <div className="flex justify-between">
            <h1 className="font-bold text-gray-900 ">Paracetamol 500 Mg</h1>
            <span>Rs. 100</span>
          </div>

          <div className="mb-2">
            <h3 className="text-gray-700 font-medium">Qty: 1X 50</h3>
            <div className="flex justify-between ">
              <h3 className="text-gray-700 font-medium">
                MFR:SUn Pharmaceutical
              </h3>
              <Button className="bg-sky-800">Modify</Button>
            </div>
          </div>
          <hr className="border-t border-cyan-400 border-dashed" />
          <div className="mt-2">
            <p className="text-sky-800 font-bold">
              Reason for modification:{" "}
              <span className="font-semibold">
                Medicine not available in stock
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="border border-gray-400 p-3 m-2 rounded-md">
        <div className="flex justify-between">
          <p className="flex gap-1 text-gray-500 font-bold text-sm sm:text-lg">
            {" "}
            <CalendarDays className="text-gray-400" />
            Delivery Date: 04-02-2025
          </p>
          <Button variant="outline">Edit Split Delivery Date</Button>
        </div>

        <div className="border-2   border-sky-300 bg-sky-100/50 rounded-lg p-2 my-2">
          <div className="flex justify-between">
            <h1 className="font-bold text-gray-900 ">Paracetamol 500 Mg</h1>
            <span>Rs. 100</span>
          </div>

          <div className="mb-2">
            <h3 className="text-gray-700 font-medium">Qty: 1X 50</h3>
            <div className="flex justify-between ">
              <h3 className="text-gray-700 font-medium">
                MFR:SUn Pharmaceutical
              </h3>
              <Button className="bg-sky-800">Modify</Button>
            </div>
          </div>
          <hr className="border-t border-cyan-400 border-dashed" />
          <div className="mt-2">
            <p className="text-sky-800 font-bold">
              Reason for modification:{" "}
              <span className="font-semibold">
                Medicine not available in stock
              </span>
            </p>
          </div>
        </div>

        <div className="border-2 bg-sky-100/50  border-sky-300 rounded-lg p-2 my-2">
          <div className="flex justify-between">
            <h1 className="font-bold text-gray-900 ">Paracetamol 500 Mg</h1>
            <span>Rs. 100</span>
          </div>

          <div className="mb-2">
            <h3 className="text-gray-700 font-medium">Qty: 1X 50</h3>
            <div className="flex justify-between ">
              <h3 className="text-gray-700 font-medium">
                MFR:SUn Pharmaceutical
              </h3>
              <Button className="bg-sky-800">Modify</Button>
            </div>
          </div>
          <hr className="border-t border-cyan-400 border-dashed" />
          <div className="mt-2">
            <p className="text-sky-800 font-bold">
              Reason for modification:{" "}
              <span className="font-semibold">
                Medicine not available in stock
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
