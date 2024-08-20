import React from 'react';
import pinterest from './pinterest.png'; // Adjust path based on your file structure
import discord from './discord.png';     // Adjust path based on your file structure
import instagram from './instagram.png'; // Adjust path based on your file structure
import twitter from './twitter.png';     // Adjust path based on your file structure
import facebook from './facebook.png';   // Adjust path based on your file structure

const Contacts = () => {
  return (
    <div className="flex justify-center gap-4 p-4">
      <a href="https://pin.it/7mjzSG64X" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
        <img src={pinterest} alt="Pinterest" className="w-7 h-7 object-cover" />
      </a>
      <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">
        <img src={discord} alt="Discord" className="w-7 h-7 object-cover" />
      </a>
      <a href="https://www.instagram.com/rachit.chettri22/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <img src={instagram} alt="Instagram" className="w-7 h-7 object-cover" />
      </a>
      <a href="https://x.com/rachitchettri22" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <img src={twitter} alt="Twitter" className="w-7 h-7 object-cover" />
      </a>
      <a href="https://www.facebook.com/rachitchettri1" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <img src={facebook} alt="Facebook" className="w-7 h-7 object-cover" />
      </a>
    </div>
  );
};

export default Contacts;
