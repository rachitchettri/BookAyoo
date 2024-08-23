// src/Payment.js
import React from "react";
import Esewa from './esewa.png'; // Import the local image
import ConnectIPS from './connectips.png'; // Import the local image
import Khalti from './khalti.png'; // Import the local image
import COD from './cod.png'; // Import the local image


const payment = () => {
  return (
    <div className="w-full mx-auto p-4 py-4 text-center">
    
   
      <div className="flex justify-center gap-4 flex-wrap">
        {/* Card 1: Esewa */}
      <h2 className="text-lg font-semibold mb-4 text-center align-middle">Payment Options:</h2>
        <div className="relative bg-white border border-gray-200 rounded-lg shadow-md p-2 w-20 flex flex-col items-center group">
          <img 
            src={Esewa} 
            alt="Esewa Logo" 
            className="w-8 h-8 object-contain"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg cursor-pointer">
            <span className="text-xs">Esewa</span>
          </div>
        </div>

        {/* Card 2: ConnectIPS */}
        <div className="relative bg-white border border-gray-200 rounded-lg shadow-md p-2 w-20 flex flex-col items-center group">
          <img 
            src={ConnectIPS} 
            alt="ConnectIPS Logo" 
            className="w-8 h-8 object-contain"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg cursor-pointer">
            <span className="text-xs">ConnectIPS</span>
          </div>
        </div>

        {/* Card 3: Khalti */}
        <div className="relative bg-white border border-gray-200 rounded-lg shadow-md p-2 w-20 flex flex-col items-center group cursor-pointer">
          <img 
            src={Khalti} 
            alt="Khalti Logo" 
            className="w-8 h-8 object-contain"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg  cursor-pointer">
            <span className="text-xs">Khalti</span>
          </div>
        </div>

        {/* Card 4: COD */}
        <div className="relative bg-white border border-gray-200 rounded-lg shadow-md p-2 w-20 flex flex-col items-center group cursor-pointer">
          <img 
            src={COD} 
            alt="COD Logo" 
            className="w-8 h-8 object-contain"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg cursor-pointer">
            <span className="text-xs">Cash On Delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default payment;
