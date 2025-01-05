'use client';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import { FiMenu, FiX } from 'react-icons/fi'; // Added FiX import for close icon

// Dark Mode Toggle Component
const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode) {
      setDarkMode(storedMode === 'true');
    }
  }, []);

  const handleToggle = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', String(newMode));
      return newMode;
    });
  };

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
    className="bg-gray-300 dark:bg-gray-600 text-black dark:text-white p-1 rounded-none border-2 border-white shadow-lg backdrop-blur-sm text-xs sm:text-sm"
  >
    {darkMode ? 'Light Mode' : 'Dark Mode'}
  </button>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLUListElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="-mt-8 flex items-center justify-between px-4 sm:px-8 md:px-24 py-4 bg-transparent fixed top-0 w-full z-20">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/log.png"
            alt="Logo"
            width={150}
            height={150}
            className="cursor-pointer"
            priority
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 lg:space-x-12 text-sm sm:text-base font-medium text-white">
        <li className="group hover:text-gray-400">
          <Link href="/" className="relative inline-block py-2 px-4">
            <span className="absolute inset-0 border-2 border-transparent group-hover:border-white transition-all"></span>
            <span className="relative">Home</span>
          </Link>
        </li>
        <li className="group hover:text-gray-400">
          <Link href="/blog" className="relative inline-block py-2 px-4">
            <span className="absolute inset-0 border-2 border-transparent group-hover:border-white transition-all"></span>
            <span className="relative">Blog</span>
          </Link>
        </li>
        <li className="group hover:text-gray-400">
          <Link href="/about" className="relative inline-block py-2 px-4">
            <span className="absolute inset-0 border-2 border-transparent group-hover:border-white transition-all"></span>
            <span className="relative">About</span>
          </Link>
        </li>
        <li className="group hover:text-gray-400">
          <Link href="/contact" className="relative inline-block py-2 px-4">
            <span className="absolute inset-0 border-2 border-transparent group-hover:border-white transition-all"></span>
            <span className="relative">Contact</span>
          </Link>
        </li>
      </ul>

      {/* Dark Mode Toggle (Desktop) */}
      <div className="hidden md:block">
        <DarkModeToggle />
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer text-white" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <FiX size={24} className="text-white" />
        ) : (
          <FiMenu size={24} className="text-white" />
        )}
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <ul
          ref={mobileMenuRef}
          className="absolute top-0 right-0 w-48 bg-black shadow-lg text-white md:hidden z-30 flex flex-col"
        >
          <li className="group p-4 hover:bg-gray-600" onClick={() => setIsMobileMenuOpen(false)}>
            <Link href="/" className="relative inline-block py-2 px-4">
              <span className="absolute inset-0 border-2 border-transparent group-hover:border-gray-700 transition-all"></span>
              <span className="relative">Home</span>
            </Link>
          </li>
          <li className="group p-4 hover:bg-gray-600" onClick={() => setIsMobileMenuOpen(false)}>
            <Link href="/blog" className="relative inline-block py-2 px-4">
              <span className="absolute inset-0 border-2 border-transparent group-hover:border-gray-700 transition-all"></span>
              <span className="relative">Blog</span>
            </Link>
          </li>
          <li className="group p-4 hover:bg-gray-600" onClick={() => setIsMobileMenuOpen(false)}>
            <Link href="/about" className="relative inline-block py-2 px-4">
              <span className="absolute inset-0 border-2 border-transparent group-hover:border-gray-700 transition-all"></span>
              <span className="relative">About</span>
            </Link>
          </li>
          <li className="group p-4 hover:bg-gray-600" onClick={() => setIsMobileMenuOpen(false)}>
            <Link href="/contact" className="relative inline-block py-2 px-4">
              <span className="absolute inset-0 border-2 border-transparent group-hover:border-gray-700 transition-all"></span>
              <span className="relative">Contact</span>
            </Link>
          </li>
        </ul>
      )}

      {/* Dark Mode Toggle (Mobile) */}
      <div className="fixed top-2 right-1 md:hidden z-50">
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
