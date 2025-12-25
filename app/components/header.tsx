'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, User, LogOut, Settings } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-lg font-bold text-blue-900">Bank of America</p>
                <p className="text-xs text-gray-500">Trust Your Future</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden lg:block">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              />
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={toggleProfile}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">Account</span>
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <Link
                    href="/account"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg"
                  >
                    My Account
                  </Link>
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
                  >
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </Link>
                  <hr className="my-2" />
                  <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-b-lg flex items-center space-x-2">
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>

            {/* Sign In Button */}
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-blue-900 border border-blue-900 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Sign In
            </Link>

            {/* Sign Up Button */}
            <Link
              href="/register"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2" />
            <Link
              href="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-900 hover:bg-blue-800 m-1"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
