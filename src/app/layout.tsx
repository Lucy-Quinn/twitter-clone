import type { Metadata } from 'next';
import { Libre_Franklin } from 'next/font/google';
import './tailwind.css';
import { ClerkProvider } from '@clerk/nextjs';
const inter = Libre_Franklin({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Twitter clone',
  description: 'Twitter clone by LQ',
};

export default function RootLayout({
  children,
  modal,
  test,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  test: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: 'black',
          colorText: 'black',
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          {modal}
          {test}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
