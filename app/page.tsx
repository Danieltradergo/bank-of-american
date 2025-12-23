'use client';

interface InvestmentProduct {
  name: string;
  apy: string;
  minDeposit: string;
  term?: string;
}

const investmentProducts: InvestmentProduct[] = [
  {
    name: '7-Month CD',
    apy: '3.65%',
    minDeposit: '$1,000',
    term: '7 months'
  },
  {
    name: '11-Month CD',
    apy: '4.20%',
    minDeposit: '$1,000',
    term: '11 months'
  },
  {
    name: '1-Year CD',
    apy: '4.35%',
    minDeposit: '$1,000',
    term: '12 months'
  },
  {
    name: '3-Year CD',
    apy: '3.75%',
    minDeposit: '$1,000',
    term: '36 months'
  },
  {
    name: 'Savings Account',
    apy: '0.01%',
    minDeposit: '$1',
  },
  {
    name: 'Money Market Account',
    apy: '4.80%',
    minDeposit: '$2,500',
  },
  {
    name: 'IRA CD - 1 Year',
    apy: '4.50%',
    minDeposit: '$1,000',
    term: '12 months'
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Header */}
      <header className="bg-blue-900 border-b border-blue-700 py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Bank of American</h1>
              <p className="text-blue-200 text-lg">Premium Investment Platform</p>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
              Open Account
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 border border-white border-opacity-20">
            <h2 className="text-3xl font-bold text-white mb-4">Investment Products</h2>
            <p className="text-blue-100 text-lg mb-8">Explore our competitive rates and flexible investment options designed for your financial future.</p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {investmentProducts.map((product, index) => (
            <div key={index} className="bg-white bg-opacity-95 rounded-lg p-6 shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{product.name}</h3>
              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-1">Annual Percentage Yield</div>
                <div className="text-4xl font-bold text-orange-500 mb-4">{product.apy}</div>
              </div>
              <div className="space-y-2 mb-6 text-gray-700">
                <p><strong>Minimum Deposit:</strong> {product.minDeposit}</p>
                {product.term && <p><strong>Term:</strong> {product.term}</p>}
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
                Learn More
              </button>
            </div>
          ))}
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Bank of American?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: 'FDIC Insured', desc: 'Your deposits are protected up to $250,000' },
              { title: 'Competitive Rates', desc: 'Industry-leading interest rates on all products' },
              { title: '24/7 Support', desc: 'Expert customer service available anytime' },
              { title: 'Easy Online Access', desc: 'Manage your investments from anywhere' },
            ].map((feature, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 border border-white border-opacity-20 text-center">
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-950 border-t border-blue-700 py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-orange-400">CDs</a></li>
                <li><a href="#" className="hover:text-orange-400">Savings</a></li>
                <li><a href="#" className="hover:text-orange-400">IRAs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-orange-400">About</a></li>
                <li><a href="#" className="hover:text-orange-400">Blog</a></li>
                <li><a href="#" className="hover:text-orange-400">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-orange-400">Privacy</a></li>
                <li><a href="#" className="hover:text-orange-400">Terms</a></li>
                <li><a href="#" className="hover:text-orange-400">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <p className="text-blue-200">1-800-BANK-NOW</p>
              <p className="text-blue-200">support@bankofamerican.com</p>
            </div>
          </div>
          <div className="border-t border-blue-700 pt-8 text-center text-blue-300">
            <p>&copy; 2025 Bank of American. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
