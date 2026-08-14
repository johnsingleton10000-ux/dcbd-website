import './globals.css';
import { Bebas_Neue, Permanent_Marker, Oswald, Black_Ops_One, Inter } from 'next/font/google';
import AgeGate from '../components/AgeGate';
import EstateChrome from '../components/EstateChrome';
import SiteFooter from '../components/SiteFooter';
import RoadBeat from '../components/RoadBeat';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' });
const marker = Permanent_Marker({ weight: '400', subsets: ['latin'], variable: '--font-marker' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });
const ops = Black_Ops_One({ weight: '400', subsets: ['latin'], variable: '--font-ops' });

export const metadata = {
  title: 'DCBD Estate | Built Different',
  description: 'Manchester-born DCBD universe: original artwork, Flip Three cards, hemp education, and £5.99 Estate Access. 18+ only. No medical claims.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebas.variable} ${marker.variable} ${oswald.variable} ${ops.variable} ${inter.className}`}>
        <div className="noise-film" />
        <AgeGate>
          <EstateChrome>
            {children}
            <SiteFooter />
          </EstateChrome>
          <RoadBeat />
        </AgeGate>
      </body>
    </html>
  );
}
