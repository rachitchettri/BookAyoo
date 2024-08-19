import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Home from './assets/components/Home';
import Books from './assets/components/Books';
import Deals from './assets/components/Deals';
import Login from './assets/components/Login';
import Carts from './assets/components/Carts';
import Register from './assets/components/Register';


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/Deals" element={<Deals />} />
          <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       
          <Route path="/Deals" element={<Carts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
