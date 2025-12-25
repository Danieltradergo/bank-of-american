'use client';

import { ArrowRight, CreditCard, PiggyBank, Home, TrendingUp, Lock, Zap, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Products & Services | Bank of America',
  description: 'Discover our comprehensive range of banking products and services designed for your financial needs.',
};

interface Product {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  cta: string;
}

const products: Product[] = [
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: 'Credit Cards',
    description: 'Premium credit cards with exceptional rewards and benefits.',
    features: [
      'Cashback rewards up to 3%',
      'Zero annual fee options',
      'Premium travel benefits',
      '24/7 fraud protection',
    ],
    cta: 'Explore Cards',
  },
  {
    icon: <PiggyBank className="w-8 h-8" />,
    title: 'Savings Accounts',
    description: 'Secure savings solutions with competitive interest rates.',
    features: [
      'Competitive APY rates',
      'FDIC insured up to $250k',
      'No monthly fees',
      'Free transfers & withdrawals',
    ],
    cta: 'Open Account',
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: 'Mortgages',
    description: 'Flexible mortgage options to make homeownership affordable.',
    features: [
      'Fixed & adjustable rates',
      'Fast loan approval process',
      'Expert mortgage advisors',
      'Flexible down payment options',
    ],
    cta: 'Get Pre-Approved',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Investment Services',
    description: 'Professional investment management and advisory services.',
    features: [
      'Diversified portfolio options',
      'Expert financial advisors',
      'Low-cost index funds',
      'Retirement planning tools',
    ],
    cta: 'Start Investing',
  },
];

const premiumServices = [
  {
    title: 'Preferred Banking',
    description: 'Enhanced services for high-net-worth individuals with dedicated relationship managers.',
  },
  {
    title: 'Business Banking',
    description: 'Comprehensive solutions for small to large businesses with flexible financing options.',
  },
  {
    title: 'Wealth Management',
    description: 'Professional wealth advisory, estate planning, and trust services.',
  },
  {
    title: 'Treasury Management',
    description: 'Advanced liquidity and payment solutions for corporate clients.',
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Products & Services</h1>
          <p className="text-xl text-blue-100 mb-8">
            Comprehensive financial solutions tailored to your needs, from savings and investments to mortgages and credit products.
          </p>
        </div>
      </section>

      {/* Main Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Personal Banking Products</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow p-8">
                <div className="text-blue-900 mb-4">{product.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-900 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className="inline-flex items-center space-x-2 text-blue-900 font-semibold hover:text-blue-700 transition-colors"
                >
                  <span>{product.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Bank of America</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <Lock className="w-8 h-8 text-blue-900 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Maximum Security</h3>
                <p className="text-gray-600">Industry-leading encryption and fraud protection to keep your money safe.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Zap className="w-8 h-8 text-blue-900 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast & Easy</h3>
                <p className="text-gray-600">Seamless digital banking experience with 24/7 access to your accounts.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <TrendingUp className="w-8 h-8 text-blue-900 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                <p className="text-gray-600">Dedicated advisors ready to help you achieve your financial goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Premium & Business Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {premiumServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link href="#" className="text-blue-900 font-semibold hover:text-blue-700 transition-colors">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Banking */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Digital Banking Made Easy</h2>
              <p className="text-lg text-gray-600 mb-6">
                Access your accounts anytime, anywhere with our intuitive mobile app and online banking platform.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle className="w-6 h-6 text-blue-900 flex-shrink-0" />
                  <span>Mobile app with biometric security</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle className="w-6 h-6 text-blue-900 flex-shrink-0" />
                  <span>Real-time account notifications</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle className="w-6 h-6 text-blue-900 flex-shrink-0" />
                  <span>Instant peer-to-peer transfers</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle className="w-6 h-6 text-blue-900 flex-shrink-0" />
                  <span>Bill pay and budgeting tools</span>
                </li>
              </ul>
              <Link
                href="#"
                className="inline-flex items-center space-x-2 bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                <span>Download Mobile App</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <p className="text-lg">Mobile App Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Open an account today and discover why millions trust Bank of America.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              Open Account <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
