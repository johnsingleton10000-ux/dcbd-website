import './globals.css';

export const metadata = {
  title: 'DaCoffeezDank | DCBD',
  description: 'Estate-born herbal tea culture, cannabinoid education, collectible product cards, membership and direct customer service.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
