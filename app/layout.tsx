import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ReactNode } from 'react';
import ReduxProvider from './provider';
import "react-toastify/dist/ReactToastify.css";

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextBasket Classified!',
  description: 'A Simple e-commerce website (Frontend only)',
};

interface RootLayoutProps {
  children: ReactNode;
  pageProps: any; // You can replace 'any' with a more specific type if needed
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, pageProps }) => {
  return (
    <html lang="en">

      <body className={montserrat.className}>
        <ReduxProvider>
          <Header {...pageProps} /> {/* Include the Header component */}
          {children}
          <Footer {...pageProps} />
        </ReduxProvider>
      </body>
    </html >
  );
};

export default RootLayout;
