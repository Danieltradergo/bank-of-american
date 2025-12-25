'use client';

import { ArrowRight, Target, Users, Globe, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Bank of America | Trusted Financial Partner',
  description: 'Learn about Bank of America, a leading global financial institution committed to powering economic opportunity.',
};

interface ValueProp {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const values: ValueProp[] = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Customer-Focused',
    description: 'We put our customers at the center of everything we do, delivering innovative solutions that meet their evolving needs.',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Global Reach',
    description: 'Operating in more than 40 countries, we provide comprehensive financial services on a global scale.',
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Trusted Excellence',
    description: 'With over 150 years of banking heritage, we are committed to the highest standards of integrity and service.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Innovation',
    description: 'We invest in cutting-edge technology to deliver digital solutions that empower our customers.',
  },
];

const milestones = [
  { year: '1871', event: 'Bank of America founded' },
  { year: '1904', event: 'First bank to exceed $1 billion in assets' },
  { year: '2004', event: 'Merger with Fleet Boston, creating the largest U.S. bank' },
  { year: '2024', event: 'Leading digital banking transformation' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Bank of America</h1>
          <p className="text-xl text-blue-100 mb-8">
            Empowering customers, employees, and communities through financial innovation and responsible banking.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                To help make financial lives better through the power of every connection. We're committed to delivering solutions that matter to our customers.
              </p>
              <p className="text-gray-600">
                We serve approximately 66 million customer relationships globally through multiple brands and channels, including flagship Bank of America locations.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-4">
                To be the trusted leader in financial services, driving sustainable growth and value creation for all stakeholders.
              </p>
              <p className="text-gray-600">
                Through digital innovation, expert advisory services, and comprehensive solutions, we're shaping the future of banking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-blue-900 mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">66M+</div>
              <p className="text-gray-600">Customer Relationships</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">40+</div>
              <p className="text-gray-600">Countries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">200k+</div>
              <p className="text-gray-600">Employees</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">$2.9T</div>
              <p className="text-gray-600">Assets Under Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Heritage</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2"></div>
                  <div className="relative z-10 flex justify-center">
                    <div className="w-4 h-4 bg-blue-900 rounded-full border-4 border-white"></div>
                  </div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <div className="text-2xl font-bold text-blue-900 mb-1">{milestone.year}</div>
                      <p className="text-gray-600">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Responsibility */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Corporate Responsibility</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Impact</h3>
              <p className="text-gray-600">
                Investing in education, economic opportunity, and community development across all markets we serve.
              </p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Environmental</h3>
              <p className="text-gray-600">
                Supporting sustainable practices and financing green initiatives to combat climate change.
              </p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Governance</h3>
              <p className="text-gray-600">
                Maintaining the highest standards of ethical conduct and regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Difference?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join millions of customers who trust Bank of America for their financial needs.
          </p>
          <Link
            href="/products"
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Explore Our Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
