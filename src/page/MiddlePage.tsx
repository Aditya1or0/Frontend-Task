import React from "react";
import Top from "../components/Top";
import Card from "../components/Card";
import PaymentDetail from "../components/PaymentDetail";

const MiddlePage: React.FC = () => {
  return (
    <div>
      <Top />
      <Card />
      <PaymentDetail />
    </div>
  );
};

export default MiddlePage;
