import React from "react";
import BottomNavbar from "./components/BottomNavbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Order from "./page/Order";
import Reports from "./page/Reports";
import Profile from "./page/Profile";
import MiddlePage from "./page/MiddlePage";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<MiddlePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/order" element={<Order />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <div className="flex-1 pb-16">
        <BottomNavbar />
      </div>
    </div>
  );
};

export default App;
