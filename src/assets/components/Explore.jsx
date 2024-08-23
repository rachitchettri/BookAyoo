import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel'; // Import the Carousel component

const Explore = () => {
  const navigate = useNavigate(); // Use useNavigate within the component

  const handleConnection = () => {
    navigate('/books'); // Navigate to the Books page
  };

  return (
    <div className='bg-blue-50 flex flex-col items-center py-20 px-4'>
      <div className='text-center mb-6'>
        <span className='text-pretty text-lg block mb-2'>
          Explore From Our Amazing Collection of
        </span>
        <span className='text-5xl font-bold font-sans'>
          Thousands of Nepali Books
        </span>
      </div>
      {/* Carousel Component */}
      <div className='w-full max-w-4xl mb-8'>
        <Carousel />
      </div>
      <button 
        onClick={handleConnection} 
        className='bg-white text-blue-500 border border-blue-500 py-2 px-4 rounded hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
      >
        EXPLORE BOOKS
      </button>
    </div>
  );
};

export default Explore;
