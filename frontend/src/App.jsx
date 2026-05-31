import React from 'react';
import Nav from './nav/Nav';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
   
     <div>
 <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

     </div>
  
  );
};

export default App;