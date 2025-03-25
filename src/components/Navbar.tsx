import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">
              Pharmacy
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
