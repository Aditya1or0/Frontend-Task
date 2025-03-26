import React, { useEffect, useState } from "react";
import Liv from "../images/livlong-main-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setOrders } from "../redux/redux/store";
import datajson from "../jsondata/data.json";
import { RootState } from "../redux/redux/redux";

const FirstUI: React.FC = () => {
  const [activeTab, setActiveTab] = useState("newRequest");
  const [activeTabs, setActiveTabs] = useState("actives");
  const [searchQuery, setSearchQuery] = useState("");
  const orders = useSelector((state: RootState) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOrders(datajson));
  }, [dispatch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredOrders = (ordersList: any[]) => {
    return ordersList.filter(
      (order) =>
        order.orderId.toString().includes(searchQuery) ||
        order.customerName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const renderOrderCard = (order: any) => (
    <div key={order.orderId} className="bg-white p-4 rounded-lg shadow-md mt-4 border-l-4 border-teal-700">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">ORD ID - {order.orderId}</h2>
        <span
          className={`px-2 py-1 text-sm rounded ${
            order.status === "modified-request"
              ? "bg-green-200 text-green-800"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {order.status.replace("-", " ")}
        </span>
      </div>
      <div className="mt-3 space-y-2 text-gray-700">
        <p><strong>Customer Name:</strong> {order.customerName}</p>
        <p><strong>Address:</strong> {order.address}</p>
        <p><strong>Created Date/Time:</strong> {new Date(order.createdDate * 1000).toLocaleString()}</p>
        <p className="font-bold text-lg text-gray-900"><strong>Total Amount:</strong> ₹{order.amount}</p>
      </div>
      <div className="mt-3 flex justify-between text-teal-700 text-sm">
        <span>📦 {order.quantity} Items</span>
        <span>🕒 {new Date(order.createdTime * 1000).toLocaleString()}</span>
      </div>
      {order.status === "modified-request" && (
        <button className="w-full border-2 border-blue-500 text-blue-500 py-2 rounded-md mt-3 font-bold hover:bg-blue-500 hover:text-white flex justify-center items-center gap-2">
          🎧 Connect to Livlong
        </button>
      )}
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex items-center justify-between p-4 bg-white shadow-md">
        <img src={Liv} className="w-24" alt="Logo" />
        <FontAwesomeIcon icon={faUser} className="text-gray-600 text-xl" />
      </div>

      <div className="p-4 bg-white shadow-md text-teal-700 w-full">
  {/* Welcome Section */}
  <h1 className="text-lg font-bold">
    Welcome, {orders.pendingAcceptance?.newRequests?.[0]?.customerName || "Guest"}
  </h1>

  {/* Search Bar */}
  <div className="flex items-center border rounded-md p-2 mt-2 w-full sm:w-96 bg-gray-200">
    <input
      type="text"
      className="flex-grow bg-transparent outline-none"
      placeholder="Livlong ID/Order ID/Customer Name"
      value={searchQuery}
      onChange={handleSearch}
    />
    <button className="text-gray-600">🔍</button>
  </div>

  {/* Date Selection - Responsive */}
  <div className="flex flex-wrap justify-between gap-2 sm:gap-4 mt-3">
    {["FROM", "TO"].map((label) => (
      <div key={label} className="flex items-center border rounded-md p-2 bg-white gap-2 w-full sm:w-auto">
        <img
          src="https://cdn-icons-png.flaticon.com/512/747/747310.png"
          className="w-5 h-5"
          alt="Calendar"
        />
        <label className="text-xs font-bold">{label}:</label>
        <input type="date" className="outline-none" />
      </div>
    ))}
  </div>
</div>

      <div className="flex flex-wrap justify-center mt-4 gap-2 px-4">
  {["newRequest", "pending", "closed"].map((tab) => (
    <button
      key={tab}
      className={`px-2 sm:px-3 py-2 rounded-full font-bold text-xs sm:text-sm md:text-base w-32 sm:w-40 md:w-48 ${
        activeTab === tab
          ? "bg-teal-700 text-white"
          : "bg-white text-gray-700 border border-gray-300"
      }`}
      onClick={() => setActiveTab(tab)}
    >
      {tab === "newRequest"
        ? "Pending Acceptance"
        : tab === "pending"
        ? "Pending Delivery"
        : "Closed"}
    </button>
  ))}
</div>


      <div className="flex justify-center mt-6">
        <div className="bg-white p-4 rounded-lg shadow-md w-96">
          <div className="flex border-b-2 pb-2">
            {["actives", "notactive"].map((tab, index) => (
              <button
                key={tab}
                className={`flex-1 text-center pb-1 font-bold ${
                  activeTabs === tab
                    ? "text-teal-700 border-b-2 border-teal-700"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTabs(tab)}
              >
                {index === 0
                  ? activeTab === "newRequest"
                    ? "New Request"
                    : activeTab === "closed"
                    ? "Out of Delivery"
                    : "Awaiting Dispatch"
                  : activeTab === "newRequest"
                  ? "Pending Approval"
                  : "Out for Delivery"}
              </button> 
            ))}
          </div>
          {activeTab === "closed"
            ? filteredOrders(orders.closed?.completed || []).map(renderOrderCard)
            : activeTabs === "actives"
            ? filteredOrders(orders.pendingAcceptance?.newRequests || []).map(renderOrderCard)
            : filteredOrders(orders.closed?.completed || []).map(renderOrderCard)}
        </div>
      </div>
    </div>
  );
};

export default FirstUI;
