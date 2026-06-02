import React from 'react';
import Nav from './nav/Nav';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from "./pages/Detail/Detail";
const App = () => {
  return (
   
     <div>
 <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product/:id"
          element={<Detail />}
        />
    
   
      </Routes>

     </div>
  
  );
};

export default App;