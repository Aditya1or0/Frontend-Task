import React from "react";
import Card from "./components/Card";
import Top from "./components/Top";
import PaymentDetail from "./components/PaymentDetail";
import BottomNavbar from "./components/BottomNavbar";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Top />
      <Card />
      <PaymentDetail />

      <div className="flex-1 pb-16">
        <BottomNavbar />
      </div>
    </div>
  );
};

export default App;
