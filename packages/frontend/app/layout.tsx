'use client';

import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from '@/lib/wagmi';
import './globals.css';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-creditcoin-dark text-white min-h-screen">
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <div className="flex flex-col min-h-screen">
              <header className="border-b border-creditcoin-gray">
                <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                  <h1 className="text-2xl font-game text-creditcoin-orange">CrediQuest</h1>
                  <div className="flex gap-4">
                    <a href="/circles" className="hover:text-creditcoin-orange transition">Circles</a>
                    <a href="/tournaments" className="hover:text-creditcoin-orange transition">Tournaments</a>
                    <a href="/profile" className="hover:text-creditcoin-orange transition">Profile</a>
                  </div>
                </nav>
              </header>
              <main className="flex-1">{children}</main>
              <footer className="border-t border-creditcoin-gray py-6 text-center text-sm text-gray-400">
                CrediQuest © 2026 - Play. Save. Build Credit.
              </footer>
            </div>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
