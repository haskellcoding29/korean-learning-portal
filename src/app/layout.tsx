import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hangul Global | Master Korean with Web3 Micropayments & Staking VIP',
  description: 'The premier Korean language learning portal for English, Japanese, and Spanish speakers. Learn Hangul, real K-Drama conversations, and unlock lessons with Cardano (ADA) or stake with JOY/HOPE for 100% free VIP access.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0A0E1A] text-slate-100 min-h-screen flex flex-col justify-between antialiased selection:bg-cyan-500 selection:text-slate-950">
        {/* Background Glowing Orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[140px]"></div>
          <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-400/15 rounded-full blur-[150px]"></div>
          <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-indigo-600/15 rounded-full blur-[130px]"></div>
        </div>

        <div className="relative z-10 flex-grow flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
