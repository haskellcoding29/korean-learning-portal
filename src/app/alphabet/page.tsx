'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Layers } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HangulChart from '@/components/HangulChart';
import { SupportedLang, translations } from '@/lib/i18n';
import { WalletState, loadSavedWalletState } from '@/lib/cardano';

export default function AlphabetPage() {
  const [lang, setLang] = useState<SupportedLang>('en');
  const [wallet, setWallet] = useState<WalletState>({
    connected: false,
    walletName: null,
    stakeAddress: null,
    balanceAda: 0,
    isVipStaking: false,
    delegatedPoolTicker: null,
    unlockedDays: [1, 2, 3, 4, 5],
  });

  return (
    <>
      <Navbar currentLang={lang} onSelectLang={setLang} walletState={wallet} onWalletUpdated={setWallet} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow space-y-10">
        <div>
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:underline mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center font-bold border border-cyan-500/30">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white">Hangul Alphabet Master (한글 자모음 24자)</h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Listen to native Seoul pronunciation, understand stroke mechanics, and compare phonetic tips in English, Japanese, and Spanish.
              </p>
            </div>
          </div>
        </div>

        <HangulChart currentLang={lang} />
      </main>

      <Footer currentLang={lang} />
    </>
  );
}
