import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6">
        {/* About Section */}
        <div className="mb-6 text-center">
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm mx-auto w-2/3">
            We are passionate about sharing travel experiences and<br /> providing
            valuable information to help you explore the world.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="mb-6 text-center">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <Link href="/" className="hover:text-yellow-500">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-500">About</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-yellow-500">Blog</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-500">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="mb-6 text-center">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <div className="flex justify-center space-x-8">
            <Link
              href="https://www.linkedin.com"
              className="text-white hover:text-yellow-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href="https://www.instagram.com"
              className="text-white hover:text-yellow-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="https://www.facebook.com"
              className="text-white hover:text-yellow-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href="mailto:example@example.com"
              className="text-white hover:text-yellow-500"
            >
              <FaEnvelope size={24} />
            </Link>
          </div>
        </div>

        {/* Footer Bottom Section */}
       {/* Footer Bottom Section */}
<div className="text-center text-sm text-gray-400">
  <hr className="border-gray-600 my-4" />
  <p>&copy; 2025 Laiqa Travel. All Rights Reserved.</p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
