import React from "react";
import { Home, ShoppingCart, FileText, User } from "lucide-react";
import { Link } from "react-router-dom";

const BottomNavbar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md ">
      <div className="flex justify-around items-center py-3">
        {/* Dashboard */}
        <div className="flex flex-col items-center">
          <Link to="/dashboard">
            <Home size={24} />
            <span className="text-xs">Dashboard</span>
          </Link>
        </div>

        {/* Order */}
        <div className="flex flex-col items-center">
          <Link to="/order">
            <ShoppingCart size={24} />
            <span className="text-xs">Order</span>
          </Link>
        </div>

        {/* Reports */}
        <div className="flex flex-col items-center">
          <Link to="/reports">
            <FileText size={24} />
            <span className="text-xs">Reports</span>
          </Link>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center">
          <Link to="/profile">
            <User size={24} />
            <span className="text-xs">Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
