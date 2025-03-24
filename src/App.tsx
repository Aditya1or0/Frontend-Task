import React from 'react';
import Card from './components/Card';
import Top from './components/Top';
import PaymentDetail from './components/PaymentDetail';
import BottomNavbar from './components/BottomNavbar';
import BottomButton from './components/BottomButton';


const App: React.FC = () => {
  return (
 
      <div className="min-h-screen flex flex-col">
        <Top/>
       <Card/>
       {/* <BottomButton/> */}
       <PaymentDetail/>
    
       <BottomNavbar/>
        
      
      </div>
   
  );
};

export default App;
