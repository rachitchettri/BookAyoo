// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './assets/components/Navbar';
// import Home from './assets/components/Home';
// import Books from './assets/components/Books';
// import Deals from './assets/components/Deals';
// import Login from './assets/components/Login';
// import Carts from './assets/components/Carts';
// import Register from './assets/components/Register';
// import ErrorPage from './assets/components/Errorpages'; // Import the ErrorPage component


// const App = () => {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col m-0 p-0">
//         <Navbar />
//         <div className="container mx-auto flex-grow m-0 p-0">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/books" element={<Books />} />
//             <Route path="/deals" element={<Deals />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/carts" element={<Carts />} />
//             <Route path="*" element={<ErrorPage />} /> {/* Catch-all route */}
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Home from './assets/components/Home';
import Books from './assets/components/Books';
import Deals from './assets/components/Deals';
import Login from './assets/components/Login';
import Carts from './assets/components/Carts';
import Register from './assets/components/Register';
import ErrorPage from './assets/components/Errorpages'; // Import the ErrorPage component

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col m-0 p-0">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/carts" element={<Carts />} />
            <Route path="*" element={<ErrorPage />} /> {/* Catch-all route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
