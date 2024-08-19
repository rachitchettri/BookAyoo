import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Home from './assets/components/Home';
import Books from './assets/components/Books';
import Deals from './assets/components/Deals';
import Login from './assets/components/Login';
import Carts from './assets/components/Carts';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/Deals" element={<Deals />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Deals" element={<Carts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
