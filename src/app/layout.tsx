import type { Metadata } from 'next';
import { Libre_Franklin } from 'next/font/google';
import './tailwind.css';
const inter = Libre_Franklin({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Twitter clone',
  description: 'Twitter clone by LQ',
};

export default function RootLayout({
  children,
  modal,
  // modal2,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  // modal2: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {modal}

        {/* {modal2} */}
        {children}
      </body>
    </html>
  );
}
