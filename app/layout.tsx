import type { Metadata } from 'next';
import './globals.css';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Bank Indonesia - Bank Sentral Republik Indonesia',
  description: 'Portal resmi Bank Indonesia. Menyediakan informasi terkini tentang kebijakan moneter, BI-Rate, inflasi, kurs JISDOR, sistem pembayaran QRIS, regulasi perbankan, dan publikasi ekonomi makro.',
  keywords: 'Bank Indonesia, Bank Sentral, BI-Rate, Kurs JISDOR, Inflasi, Rupiah, QRIS, BI-FAST, Regulasi PBI, Cadangan Devisa',
  authors: [{ name: 'Bank Indonesia' }],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-bi-blue-700 selection:text-white">
        <TopBar />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
