import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { FormProvider } from '../context/FormContext';
import { ThemeProvider } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'User management dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <FormProvider>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
              <ThemeToggle />
              {children}
            </div>
          </FormProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}