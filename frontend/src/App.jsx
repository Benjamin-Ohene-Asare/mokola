import React from 'react';
import Nav from './nav/Nav';
import Home from './pages/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from "./pages/Detail/Detail";
import Index from './pages/Index';
const App = () => {
  return (
   
     <div>
 <Nav />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/product/:id"
          element={<Detail />}
        />
    
   
      </Routes>

     </div>
  
  );
};

export default App;