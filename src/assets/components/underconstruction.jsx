// src/assets/components/UnderConstruction.js
import React from 'react';

const UnderConstruction = ({ message = "बन्दै छ पछि आइज ", redirectPath = "/" }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-yellow-600">🚧</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mt-4">
          {message}
        </h2>
        <p className="text-gray-600 mt-2">
        अन्दी मन्दी चण्डी जो यो पेज देखि निस्किएन त्यो .......................|
        </p>
        <a
          href={redirectPath}
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default UnderConstruction;
