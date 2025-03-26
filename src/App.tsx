import React from "react";
// import Card from "./components/Card";
// import FirstUI from "./components/firstUI";
// import { Button } from "./components/ui/button";
import { store } from "./redux/redux/redux";
import { Provider } from "react-redux";
import FirstUI from "./components/firstui";
// import DiagnosisCircularPacking from "./components/temp"
// import Car from "./components/carr";
// import DiagnosisTreemap from "../components/tem"

// import Top from "./components/Top";

// import PaymentDetail from "./components/PaymentDetail";
// import BottomNavbar from "./components/BottomNavbar";

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <div className="min-h-screen flex flex-col">
   
    {/* <Button>helo</Button> */}
<FirstUI/>
{/* <Car/> */}

      <div className="flex-1 pb-16">
     
      </div>
    </div>
    </Provider>

  );
};

export default App;
