import React from 'react';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BottomNavbar from './components/Bottom';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<div className="flex-1">Home Page</div>} />
          <Route path="/search" element={<div className="flex-1">Search Page</div>} />
          <Route path="/profile" element={<div className="flex-1">Profile Page</div>} />
        </Routes>
        
        <BottomNavbar />
      </div>
    </Router>
  );
};

export default App;
