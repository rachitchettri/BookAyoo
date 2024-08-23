import React, { useRef } from 'react';
import billbryson from './billbryson.png';
import puzzle from './75crosswordpuzzle.png';
import Ch from './chinaharayekomanchhe.png';
import Fish from './fish.png';
import Karaudau from './karaudau.png';
import PalpasaCafe from './PalpasaCafe.png';

const books = [
  { src: billbryson, title: "Bill Bryson", author: "Rachit Chettri", price: "$19.99" },
  { src: puzzle, title: "Puzzle", author: "Rachit Chettri", price: "$15.99" },
  { src: Ch, title: "Ch", author: "Rachit Chettri", price: "$12.99" },
  { src: Fish, title: "Fish", author: "Rachit Chettri", price: "$22.99" },
  { src: Karaudau, title: "Karaudau", author: "Rachit Chettri", price: "$17.99" },
  { src: PalpasaCafe, title: "Palpasa Cafe", author: "Rachit Chettri", price: "$9.99" },
];

const Bestseller = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bestseller-container px-1 py-10 relative">
      <h1 className="text-3xl font-semibold mb-2 px-7">Best Sellers</h1>
      <p className="text-gray-400 mb-8 px-7">Find Your Next Great Read Among Our Best Sellers.</p>
      <button
        className="absolute top-4 right-4 py-2 px-4 focus:outline-none mb-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => alert('Showing all items...')} // Replace with actual navigation or functionality
        aria-label="Show All"
      >
        Show All
      </button>
      <div
        ref={scrollContainerRef}
        className="flex space-x-6 overflow-x-hidden"
        style={{ whiteSpace: 'nowrap' }}
      >
        {books.map((book, index) => (
          <div
            key={index}
            className="book-item flex-none border rounded-lg p-4 text-center w-64"
            style={{ display: 'inline-block' }}
          >
            <img
              src={book.src}
              alt={`${book.title} by ${book.author}`}
              className="object-cover w-full h-80 mb-4"
            />
            <div className="book-info mb-4">
              <h2 className="text-lg font-semibold">{book.title}</h2>
              <p className="text-gray-600">{book.author}</p>
              <p className="text-xl font-bold text-gray-800 mb-4">{book.price}</p>
            </div>
            <button
              className="bg-white text-blue-500 border border-blue-500 py-1 px-12 w-70 rounded hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="button"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Bestseller;
