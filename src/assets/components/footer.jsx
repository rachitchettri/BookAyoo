// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-6 w-full">
      <div className="px-4 md:px-8 max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-7">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Rachit Chettri. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="/terms-of-use" className="hover:text-blue-400">Terms of Use</a>
            <a href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
