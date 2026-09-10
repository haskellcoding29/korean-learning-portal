'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Wallet, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SupportedLang, translations } from '@/lib/i18n';
import { WalletState, loadSavedWalletState, JOY_HOPE_POOLS } from '@/lib/cardano';

export default function PricingPage() {
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

  const t = translations[lang];

  return (
    <>
      <Navbar currentLang={lang} onSelectLang={setLang} walletState={wallet} onWalletUpdated={setWallet} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">Fair & Frictionless</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">{t.pricing_title}</h1>
          <p className="text-slate-400 text-sm sm:text-base">{t.pricing_sub}</p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Free Tier */}
          <div className="p-8 rounded-3xl glass-card border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-800 text-slate-300">Free Tier</span>
              <h3 className="text-2xl font-black text-white mt-4">{t.pricing_free_title}</h3>
              <p className="text-3xl font-black text-white font-mono mt-2">{t.pricing_free_price}</p>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">{t.pricing_free_desc}</p>
              <ul className="space-y-2 mt-6 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Hangul 24 Letters + Audio</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Day 1~5 Essential Survival Courses</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Basic Anki 10-Round Drill</li>
              </ul>
            </div>
            <Link href="/#curriculum" className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm text-center">
              {t.pricing_free_btn}
            </Link>
          </div>

          {/* ADA Micropayment */}
          <div className="p-8 rounded-3xl glass-card border border-cyan-500/40 flex flex-col justify-between space-y-6 glow-cyan relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl pointer-events-none"></div>
            <div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Micro-Pay</span>
              <h3 className="text-2xl font-black text-white mt-4">{t.pricing_ada_title}</h3>
              <p className="text-3xl font-black text-cyan-400 font-mono mt-2">{t.pricing_ada_price}</p>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">{t.pricing_ada_desc}</p>
              <ul className="space-y-2 mt-6 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Pay only for lessons you want</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Instant CIP-30 Wallet Signing</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Lifetime ownership & Anki drills</li>
              </ul>
            </div>
            <Link href="/#curriculum" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-xs sm:text-sm text-center shadow-md shadow-cyan-500/20">
              {t.pricing_ada_btn}
            </Link>
          </div>

          {/* Staking VIP */}
          <div className="p-8 rounded-3xl glass-card border border-amber-500/40 flex flex-col justify-between space-y-6 relative overflow-hidden bg-gradient-to-b from-slate-900/90 to-amber-950/20">
            <div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">VIP Pass</span>
              <h3 className="text-2xl font-black text-white mt-4">{t.pricing_vip_title}</h3>
              <p className="text-3xl font-black text-amber-400 font-mono mt-2">{t.pricing_vip_price}</p>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">{t.pricing_vip_desc}</p>
              <ul className="space-y-2 mt-6 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> 100% Free Lifetime VIP Access</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Earn ~3.5% staking rewards every 5 days</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> ADA never leaves your personal wallet</li>
              </ul>
            </div>
            <a
              href="https://cardano.ipclub29.com/#delegation-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-bold text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-1.5"
            >
              <span>{t.pricing_vip_btn}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* JOY / HOPE Pool Directory */}
        <div className="p-8 rounded-3xl glass-card border border-slate-800 space-y-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-amber-400" />
            <h3 className="text-xl font-bold text-white">JOY & HOPE Bare-Metal Stake Pools</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {JOY_HOPE_POOLS.map((p) => (
              <div key={p.ticker} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-base font-black text-cyan-400 font-mono">[{p.ticker}]</span>
                  <span className="text-[11px] text-slate-400">{p.name}</span>
                </div>
                <p className="text-[11px] font-mono text-slate-500 truncate">{p.poolId}</p>
                <a
                  href={`https://cexplorer.io/pool/${p.poolId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-cyan-400 pt-1"
                >
                  View on Cexplorer <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>

      </main>

      <Footer currentLang={lang} />
    </>
  );
}
