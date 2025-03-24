import React from 'react';
import { Home, ShoppingCart, FileText, User } from 'lucide-react';

const BottomNavbar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md ">
      <div className="flex justify-around items-center py-3">
        {/* Dashboard */}
        <div className="flex flex-col items-center">
          <Home size={24} />
          <span className="text-xs">Dashboard</span>
        </div>

        {/* Order */}
        <div className="flex flex-col items-center">
          <ShoppingCart size={24} />
          <span className="text-xs">Order</span>
        </div>

        {/* Reports */}
        <div className="flex flex-col items-center">
          <FileText size={24} />
          <span className="text-xs">Reports</span>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center">
          <User size={24} />
          <span className="text-xs">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
