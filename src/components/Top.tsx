import React from "react";
import { ArrowLeft, User } from 'lucide-react';


const Top: React.FC = () => {
  return <div className="fixed top-0 left-0 right-0 p-4 border-b shadow bg-white">
    <div className="flex justify-between ">
    <div className="flex gap-2">
    <ArrowLeft />
    <h1 className="font-bold text-gray-800">New Request Medicine Details</h1>
    </div>
    <div>
  <User />
  </div>
    </div>
  </div>;
};

export default Top;
