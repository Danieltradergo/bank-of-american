'use client';

import { DashboardSection } from '@/app/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - Bank of American',
  description: 'Manage your investments and portfolio',
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">Your Investment Dashboard</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Welcome back! Monitor your portfolio performance and make informed investment decisions with real-time analytics.
          </p>
        </div>

        {/* Dashboard Component */}
        <DashboardSection />

        {/* Additional Sections */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">📊 Portfolio Stats</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex justify-between"><span>Total Assets:</span> <span className="font-bold">$125,450</span></li>
              <li className="flex justify-between"><span>Monthly Return:</span> <span className="font-bold text-green-600">+5.2%</span></li>
              <li className="flex justify-between"><span>YTD Return:</span> <span className="font-bold text-green-600">+18.7%</span></li>
              <li className="flex justify-between"><span>Positions:</span> <span className="font-bold">12</span></li>
            </ul>
          </div>

          {/* Risk Assessment */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">🛡️ Risk Profile</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Stocks</span>
                  <span className="font-bold">45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>REITs</span>
                  <span className="font-bold">35%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '35%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>ETFs</span>
                  <span className="font-bold">20%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '20%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Insights */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">📈 Market Insights</h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-semibold text-green-700">Market High</p>
                <p>US markets reach new highs on economic data</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold text-blue-700">REITs Strong</p>
                <p>Real estate sector showing resilience</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <p className="font-semibold text-yellow-700">Fed Watch</p>
                <p>Interest rate decisions coming next week</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button className="px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition font-semibold">
            Make Investment
          </button>
          <button className="px-8 py-3 border-2 border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50 transition font-semibold">
            View Reports
          </button>
          <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-semibold">
            Download Statement
          </button>
        </div>
      </div>
    </main>
  );
}
