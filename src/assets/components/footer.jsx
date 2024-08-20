import React from 'react';
import Payment from './Payment';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black w-full p-0 m-0">
      {/* Payment section */}
      <div className="w-full bg-white py-4 border-t border-gray-200">
        <Payment />
      </div>

      {/* Footer content */}
      <div className="w-full px-4 py-6 max-w-screen-lg mx-auto">
     
        <div className="flex items-center justify-center text-sm space-x-4 font-medium">
          <p className="mb-0">
            © {new Date().getFullYear()} Rachit Chettri. All rights reserved.
          </p>
          <span>|</span>
          <a href="#" className="hover:text-blue-700">Terms of Use</a>
          <span>|</span>
          <a href="#" className="hover:text-blue-700">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
