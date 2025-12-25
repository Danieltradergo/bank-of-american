'use client';

import React from 'react';

export default function DashboardSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Your Investment Dashboard</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real-time portfolio management with advanced analytics and insights
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Account Balance Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-900">
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Account Balance</h3>
            <p className="text-3xl font-bold text-blue-900 mb-2">$125,450.00</p>
            <p className="text-sm text-green-600">+5.2% this month</p>
          </div>

          {/* Total Investments */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Total Investments</h3>
            <p className="text-3xl font-bold text-green-600 mb-2">$85,230.50</p>
            <p className="text-sm text-gray-600">Across 12 positions</p>
          </div>

          {/* Unrealized Gains */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Unrealized Gains</h3>
            <p className="text-3xl font-bold text-blue-600 mb-2">+$12,780.25</p>
            <p className="text-sm text-green-600">+15.0% portfolio growth</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Recent Transactions</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <div>
                <p className="font-semibold text-gray-900">Bought 50 shares of Apple Inc.</p>
                <p className="text-sm text-gray-600">Today at 2:30 PM</p>
              </div>
              <p className="text-green-600 font-semibold">-$8,450.00</p>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <div>
                <p className="font-semibold text-gray-900">Dividend received - Microsoft</p>
                <p className="text-sm text-gray-600">Yesterday at 9:15 AM</p>
              </div>
              <p className="text-green-600 font-semibold">+$125.50</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-900">Sold 30 shares of Tesla Inc.</p>
                <p className="text-sm text-gray-600">Dec 20 at 11:45 AM</p>
              </div>
              <p className="text-green-600 font-semibold">+$4,285.75</p>
            </div>
          </div>
          <button className="mt-6 px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition">
            View All Transactions
          </button>
        </div>
      </div>
    </section>
  );
}
