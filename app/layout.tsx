import type { Metadata } from 'next';
import './globals.css';
import Footer from './components/footer';

export const metadata: Metadata = {
  title: 'Bank of American - Investment Platform',
  description: 'Explore competitive investment products and rates at Bank of American',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
              <Footer />
    </html>
  );
}
