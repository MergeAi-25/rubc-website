'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary">
                Rise-Up Bible Church
              </Link>
              <span className="ml-2 text-sm text-gray-500">Osizweni, Newcastle Branch</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary px-3 py-2">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary px-3 py-2">
              About
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-primary px-3 py-2">
              Events
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary px-3 py-2">
              Blog
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-100">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-100">
              About
            </Link>
            <Link href="/events" className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-100">
              Events
            </Link>
            <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-100">
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 