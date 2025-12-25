'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Lock, Mail, ArrowRight, Shield } from 'lucide-react';

export const metadata = {
  title: 'Sign In | Bank of America',
  description: 'Secure login for Bank of America online banking platform.',
};

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12">
        {/* Login Container */}
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-center mb-2">Secure Login</h1>
              <p className="text-blue-100 text-center text-sm">Bank of America Online Banking</p>
            </div>

            {/* Form */}
            <div className="px-6 py-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email or User ID
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="w-4 h-4 border border-gray-300 rounded accent-blue-900"
                    />
                    <span className="text-sm text-gray-600">Remember me</span>
                  </label>
                  <Link href="#" className="text-sm text-blue-900 hover:text-blue-700 font-semibold">
                    Forgot password?
                  </Link>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2 rounded-lg font-semibold hover:from-blue-800 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <span className="inline-block animate-spin">⏳</span>
                      Signing in...
                    </>
                  ) : (
                    <>
                      <span>Sign In</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>

              {/* Sign Up Link */}
              <p className="text-center text-gray-600 text-sm">
                Don't have an account?{' '}
                <Link href="/register" className="text-blue-900 font-semibold hover:text-blue-700">
                  Create one now
                </Link>
              </p>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Secured with industry-leading encryption</span>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-white text-center">
            <p className="text-sm opacity-75 mb-4">
              Need help? Contact our support team at 1-800-BANK-OF-AMERICA
            </p>
            <div className="flex justify-center gap-4 text-xs">
              <Link href="#" className="hover:underline opacity-75 hover:opacity-100">
                Security Center
              </Link>
              <span className="opacity-50">•</span>
              <Link href="#" className="hover:underline opacity-75 hover:opacity-100">
                Privacy Policy
              </Link>
              <span className="opacity-50">•</span>
              <Link href="#" className="hover:underline opacity-75 hover:opacity-100">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
