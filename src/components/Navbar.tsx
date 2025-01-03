'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer text-white" onClick={toggleMobileMenu}>
        <FiMenu size={24} />
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-lg text-gray-700 md:hidden">
          <li className="group p-4 hover:bg-gray-200">
            <Link href="/" className="relative inline-block py-2 px-4">
              <span className="absolute inset-0 border-2 border-transparent group-hover:border-gray-700 transition-all"></span>
              <span className="relative">Home</span>
            </Link>
          </li>
          <li className="group p-4 hover:bg-gray-200">
            <Link href="/blog" className="relative inline-block py-2 px-4">
              <span className="absolute inset-0 border-2 border-transparent group-hover:border-gray-700 transition-all"></span>
              <span className="relative">Blog</span>
            </Link>
          </li>
          <li className="group p-4 hover:bg-gray-200">
            <Link href="/about" className="relative inline-block py-2 px-4">
              <span className="absolute inset-0 border-2 border-transparent group-hover:border-gray-700 transition-all"></span>
              <span className="relative">About</span>
            </Link>
          </li>
          <li className="group p-4 hover:bg-gray-200">
            <Link href="/contact" className="relative inline-block py-2 px-4">
              <span className="absolute inset-0 border-2 border-transparent group-hover:border-gray-700 transition-all"></span>
              <span className="relative">Contact</span>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
