'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Bank of America',
  description: 'Get in touch with Bank of America. Find our locations, hours, and contact information.',
};

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const contactInfo: ContactInfo[] = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Phone Support',
    details: ['1-800-BANK-OF-AMERICA', '1-800-226-5682', '24/7 Customer Service'],
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email Support',
    details: ['support@bankofamerica.com', 'We respond within 24 hours', 'General inquiries welcome'],
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Visit Us',
    details: ['4,300+ locations nationwide', 'Find your nearest branch', 'Schedule an appointment'],
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Business Hours',
    details: ['Mon-Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 3:00 PM', 'Sun: Closed'],
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-blue-100">
            We're here to help. Reach out to us with any questions or concerns.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-200 text-center">
                <div className="text-blue-900 mb-4 flex justify-center">{info.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{info.title}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {info.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                  >
                    <option value="">Select a subject</option>
                    <option value="account">Account Support</option>
                    <option value="products">Product Inquiry</option>
                    <option value="complaint">Complaint</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                    placeholder="Please describe your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Details & Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Information</h2>
              <div className="space-y-8">
                <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-blue-900" />
                    Live Chat
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Start a live chat with one of our support representatives. Available 24/7.
                  </p>
                  <button className="w-full bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                    Start Live Chat
                  </button>
                </div>

                <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-lg border border-blue-200 h-80 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-900" />
                    <p>Branch Locator Map</p>
                    <p className="text-sm mt-2">Find a location near you</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Mailing Address</h3>
                  <p className="text-gray-600 whitespace-pre-line">
                    Bank of America Corporate Center\n100 N. Tryon Street\nCharlotte, NC 28255\nUSA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'What are your customer service hours?',
                a: 'Our customer service team is available 24/7 to assist you with any questions or concerns.',
              },
              {
                q: 'How quickly will I receive a response?',
                a: 'We aim to respond to all inquiries within 24 hours during business days. Urgent matters are prioritized.',
              },
              {
                q: 'Can I schedule an appointment online?',
                a: 'Yes, you can schedule an appointment by calling your local branch or using our online scheduling system.',
              },
              {
                q: 'Is my information secure?',
                a: 'Absolutely. We use industry-leading encryption and security measures to protect your information.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
