'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Globe, Wallet, ShieldCheck, Sparkles, BookOpen, Layers } from 'lucide-react';
import { SupportedLang, translations } from '@/lib/i18n';
import { WalletState, loadSavedWalletState, connectCardanoWallet } from '@/lib/cardano';

interface NavbarProps {
  currentLang: SupportedLang;
  onSelectLang: (lang: SupportedLang) => void;
  walletState: WalletState;
  onWalletUpdated: (state: WalletState) => void;
}

export default function Navbar({ currentLang, onSelectLang, walletState, onWalletUpdated }: NavbarProps) {
  const t = translations[currentLang];
  const [connecting, setConnecting] = useState(false);

  const handleConnectWallet = async () => {
    setConnecting(true);
    try {
      const updated = await connectCardanoWallet('eternl');
      onWalletUpdated(updated);
    } catch (e) {
      console.error(e);
    } finally {
      setConnecting(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 glass border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            한
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                Hangul<span className="text-cyan-400">Global</span>
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                Web3
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">korean.ipclub29.com</p>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold text-slate-300">
          <Link href="/alphabet" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-cyan-400" />
            {t.nav_alphabet}
          </Link>
          <Link href="/#curriculum" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-blue-400" />
            {t.nav_curriculum}
          </Link>
          <Link href="/tutor" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            {t.nav_tutor}
          </Link>
          <Link href="/pricing" className="hover:text-cyan-400 transition-colors">
            {t.nav_pricing}
          </Link>
        </nav>

        {/* Actions: Language Switcher & Wallet */}
        <div className="flex items-center space-x-3">
          
          {/* 3-Language Selector */}
          <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs font-bold gap-1">
            <Globe className="w-3.5 h-3.5 text-slate-400 ml-1.5 hidden sm:inline-block" />
            <button
              onClick={() => onSelectLang('en')}
              className={`px-2 py-1 rounded-lg transition-all ${currentLang === 'en' ? 'bg-cyan-500 text-slate-950 font-black shadow-sm' : 'text-slate-400 hover:text-white'}`}
            >
              EN
            </button>
            <button
              onClick={() => onSelectLang('ja')}
              className={`px-2 py-1 rounded-lg transition-all ${currentLang === 'ja' ? 'bg-cyan-500 text-slate-950 font-black shadow-sm' : 'text-slate-400 hover:text-white'}`}
            >
              日本語
            </button>
            <button
              onClick={() => onSelectLang('es')}
              className={`px-2 py-1 rounded-lg transition-all ${currentLang === 'es' ? 'bg-cyan-500 text-slate-950 font-black shadow-sm' : 'text-slate-400 hover:text-white'}`}
            >
              ES
            </button>
            <button
              onClick={() => onSelectLang('ko')}
              className={`px-2 py-1 rounded-lg transition-all ${currentLang === 'ko' ? 'bg-cyan-500 text-slate-950 font-black shadow-sm' : 'text-slate-400 hover:text-white'}`}
            >
              KO
            </button>
          </div>

          {/* Web3 Cardano Connect */}
          {walletState.connected ? (
            <div className="flex items-center gap-2">
              {walletState.isVipStaking && (
                <span className="hidden lg:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/40 text-xs font-bold font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  {walletState.delegatedPoolTicker} VIP
                </span>
              )}
              <button
                onClick={handleConnectWallet}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{walletState.balanceAda} ₳</span>
              </button>
            </div>
          ) : (
            <button
              onClick={handleConnectWallet}
              disabled={connecting}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:brightness-110 text-white font-bold text-xs sm:text-sm shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
            >
              <Wallet className="w-4 h-4" />
              <span>{connecting ? 'Connecting...' : t.nav_connect_wallet}</span>
            </button>
          )}

        </div>
      </div>
    </header>
  );
}
