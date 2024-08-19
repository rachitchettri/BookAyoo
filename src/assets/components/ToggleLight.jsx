
import React, { useState, useEffect } from 'react';
import switchImageLight from './switch-light.png'; 
import switchImageDark from './switch.png'; 

const ToggleLight = () => {
  // Get theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  // Update the theme in localStorage and document body
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Determine the image source based on the current theme
  const imageSrc = theme === 'light' ? switchImageLight : switchImageDark;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-white rounded  transition flex items-center space-x-2"
    >
      <img
        src={imageSrc}
        alt="Toggle light/dark mode"
        className="w-9 h-9" // Adjust size using Tailwind classes
      />
    </button>
  );
};

export default ToggleLight;
