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
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#1d9bf0',
          colorText: 'black',
        },
        elements: {
          formButtonPrimary: {
            fontSize: 14,
            textTransform: 'none',
            backgroundColor: '#1d9bf0',
            border: '#1d9bf0',
            'box-shadow': 'none !important',
            '&:hover, &:focus, &:active': {
              backgroundColor: '#1d9bf0',
            },
          },
          'footerActionLink, formFieldAction, identityPreviewEditButton, backLink':
            {
              color: '#1d9bf0 !important',
              fontSize: '14px',
              '&:hover': { textDecoration: 'underline' },
            },
          formFieldInput: {
            '&:focus-within': {
              borderColor: '#1d9bf0 !important',
              boxShadow: '#1d9bf0 0px 0px 0px 1px !important',
            },
          },
          alternativeMethodsBlockButton: {
            backgroundColor: '#1d9bf0 !important',
            boxShadow: '#1d9bf0 0px 0px 0px 1px !important',
          },
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          {modal}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
