import './globals.css';
import { Bebas_Neue, Cinzel, Inter } from 'next/font/google';
import { SiteProviders } from '../lib/cart-context';
import AgeGate from '../components/AgeGate';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import CartDrawer from '../components/CartDrawer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' });
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' });

export const metadata = {
  title: 'DCB Revolution | Physical Marketplace',
  description: 'DCBD / 18GATE physical product marketplace: concentrates, CaliBolt, hash, extracts, tea, flower, vaults and Flip Three.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebas.variable} ${cinzel.variable} ${inter.className}`}>
        <SiteProviders>
          <AgeGate>
            <SiteNav />
            {children}
            <SiteFooter />
            <CartDrawer />
          </AgeGate>
        </SiteProviders>
      </body>
    </html>
  );
}
