import React from 'react';
import background from './loginimg.png';
import logback from './mesh_bg.svg';
import { useNavigate } from 'react-router-dom';

const Picks = () => {
  const navigate = useNavigate(); // Use useNavigate inside the component

  const handleRegister = () => {
    navigate('/register'); // Navigate to the register page
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center w-full h-screen bg-gray-100 overflow-hidden">
      <img
        src={logback}
        alt="Logback"
        className="absolute inset-0 object-cover w-full h-full z-0 opacity-70"
        style={{ width: '130%', height: 'auto' }} // Adjust width to make it wider
      />
      <img
        src={background}
        alt="Background"
        className="relative w-full max-w-lg z-10 shadow-md mx-4"
      />
      <div className="absolute top-0 left-0 py-8 px-6 md:py-14 md:px-10 z-20 max-w-lg md:max-w-xs text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-semibold mb-4">
          <span className="block">Our picks for you</span>
          <span className="block text-sm md:text-base font-normal mt-2">
            We will curate special book recommendations for you based on your genre preferences.
          </span>
          <span className="block text-sm md:text-base py-4 md:py-7">
            Login or create an account to get started.
          </span>
        </h1>
        <div className="mt-6 flex justify-center md:justify-start">
          <button
            onClick={handleRegister}
            className="bg-blue-800 text-white py-2 px-6 md:py-2 md:px-8 rounded hover:bg-blue-600 transition-colors"
          >
            Login | Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Picks;
