'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Bank of American</h3>
            <p className="text-gray-300 text-sm mb-4">
              Premium investment banking platform providing professional-grade investment tools and analytics.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
                ◯ LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
                👋 Twitter
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-gray-300 hover:text-white transition">Stocks</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition">REITs</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition">ETFs</Link></li>
              <li><Link href="/dashboard" className="text-gray-300 hover:text-white transition">Portfolio</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a href="#careers" className="text-gray-300 hover:text-white transition">Careers</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-white transition">Blog</a></li>
              <li><a href="#press" className="text-gray-300 hover:text-white transition">Press</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <p>📧 support@bankofamerican.com</p>
              <p>📄 +1 (800) 555-1234</p>
              <p>📍 123 Financial Ave, NY 10001</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300 mb-6">
            <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition">Terms of Service</a>
            <a href="#cookies" className="hover:text-white transition">Cookie Policy</a>
            <a href="#accessibility" className="hover:text-white transition">Accessibility</a>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-600 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Bank of American. All rights reserved. | SEC Registered Investment Advisor</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
