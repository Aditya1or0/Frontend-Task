import React from 'react';



import Bottom from './components/Bottom';

const App: React.FC = () => {
  return (
 
      <div className="min-h-screen flex flex-col">
        {/* <Routes>
          <Route path="/" element={<div className="flex-1">Home Page</div>} />
          <Route path="/search" element={<div className="flex-1">Search Page</div>} />
          <Route path="/profile" element={<div className="flex-1">Profile Page</div>} />
        </Routes> */}
        
        <Bottom />
      </div>
   
  );
};

export default App;
