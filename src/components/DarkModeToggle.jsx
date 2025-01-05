import React, { useState, useEffect } from 'react';
import FiSun from 'react-icons/fi/FiSun';
import FiMoon from 'react-icons/fi/FiMoon';
 // Importing Sun and Moon icons

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Retrieve dark mode setting from localStorage on initial load
  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode) {
      setDarkMode(storedMode === 'true');
    }
  }, []);

  // Handle toggling between light and dark mode
  const handleToggle = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode ? 'true' : 'false'); // Save setting to localStorage
      return newMode;
    });
  };

  // Apply dark mode class to the body element
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={handleToggle}
      className="bg-gray-300 dark:bg-gray-600 text-black dark:text-white p-2 rounded-full flex items-center justify-between"
    >
      <FiMoon
        className={`text-yellow-500 transition-all duration-300 ${darkMode ? 'hidden' : 'block'}`}
        size={20}
      />
      <FiSun
        className={`text-yellow-500 transition-all duration-300 ${darkMode ? 'block' : 'hidden'}`}
        size={20}
      />
    </button>
  );
};

export default DarkModeToggle;
