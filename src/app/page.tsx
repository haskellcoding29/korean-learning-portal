'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, BookOpen, Layers, ShieldCheck, Wallet, ArrowRight, CheckCircle2, Heart, Gift } from 'lucide-react';
import Navbar from '@/components/Navbar';
import DailyMicroChallenge from '@/components/DailyMicroChallenge';
import Footer from '@/components/Footer';
import { SupportedLang, translations } from '@/lib/i18n';
import { WalletState, loadSavedWalletState } from '@/lib/cardano';
import { CURRICULUM_LESSONS } from '@/data/curriculumData';

export default function HomePage() {
  const [lang, setLang] = useState<SupportedLang>('en');
  const [wallet, setWallet] = useState<WalletState>({
    connected: false,
    walletName: null,
    stakeAddress: null,
    balanceAda: 0,
    isVipStaking: false,
    delegatedPoolTicker: null,
    unlockedDays: Array.from({ length: 30 }, (_, i) => i + 1), // 100% Free Open
  });

  useEffect(() => {
    setWallet(loadSavedWalletState());
  }, []);

  const t = translations[lang];

  return (
    <>
      <Navbar currentLang={lang} onSelectLang={setLang} walletState={wallet} onWalletUpdated={setWallet} />

      <main className="flex-grow">
        
        {/* Global Launch Free Access Celebration Banner */}
        <div className="bg-gradient-to-r from-blue-900/60 via-cyan-900/40 to-indigo-900/60 border-b border-cyan-500/30 py-3 px-4 text-center">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-cyan-300">
            <Gift className="w-4 h-4 text-amber-400 animate-bounce" />
            <span>
              {lang === 'ko' && '🎉 글로벌 런칭 기념: 전 세계 학습자를 위해 한글 자모음 및 30일 전 강좌를 100% 전면 무료로 개방합니다!'}
              {lang === 'ja' && '🎉 グローバル公開記念：世界中の学習者のため、ハングル字母＆30日全講座を完全無料開放中！'}
              {lang === 'es' && '🎉 Lanzamiento Global: ¡Acceso 100% GRATUITO a las 24 letras Hangul y a las 30 lecciones completas!'}
              {lang === 'en' && '🎉 Global Launch Celebration: 100% FREE Full Access to Hangul 24 Letters & All 30-Day Courses!'}
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>{t.hero_badge}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
            {t.hero_title_prefix}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              {t.hero_title_highlight}
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.hero_desc}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#curriculum"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:brightness-110 text-white font-black text-base shadow-xl shadow-cyan-500/25 transition-all hover:scale-105"
            >
              <BookOpen className="w-5 h-5" />
              <span>{t.hero_btn_start}</span>
            </Link>
            <Link
              href="/alphabet"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-base shadow-md transition-all hover:scale-105"
            >
              <Layers className="w-5 h-5 text-cyan-400" />
              <span>{t.hero_btn_alphabet}</span>
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl glass-card border border-slate-800 text-center">
              <span className="text-2xl font-black text-cyan-400 block">30 Days Full Course</span>
              <span className="text-xs text-slate-400">100% Free Open for Global Citizens</span>
            </div>
            <div className="p-5 rounded-2xl glass-card border border-slate-800 text-center">
              <span className="text-2xl font-black text-emerald-400 block">300+ Audio Dialogues</span>
              <span className="text-xs text-slate-400">Web Speech API Native Seoul Accent</span>
            </div>
            <div className="p-5 rounded-2xl glass-card border border-slate-800 text-center">
              <span className="text-2xl font-black text-amber-400 block">JOY / HOPE Pools</span>
              <span className="text-xs text-slate-400">Sponsored by Cardano Bare-Metal Nodes</span>
            </div>
          </div>
        </section>

        {/* 3 Pillars Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-800/80">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">{t.sec_features_title}</h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">{t.sec_features_sub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl glass-card border border-slate-800/90 hover:border-cyan-500/50 transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-xl border border-cyan-500/30">
                🌐
              </div>
              <h3 className="text-xl font-bold text-white">{t.f1_title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{t.f1_desc}</p>
            </div>

            <div className="p-8 rounded-3xl glass-card border border-slate-800/90 hover:border-blue-500/50 transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-xl border border-blue-500/30">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-white">{t.f2_title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{t.f2_desc}</p>
            </div>

            <div className="p-8 rounded-3xl glass-card border border-slate-800/90 hover:border-amber-500/50 transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-xl border border-amber-500/30">
                🛡️
              </div>
              <h3 className="text-xl font-bold text-white">{t.f3_title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{t.f3_desc}</p>
            </div>
          </div>
        </section>

        {/* 30-Day Curriculum Grid Section */}
        <section id="curriculum" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-800/80">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-2 block">100% Free Open Curriculum</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">{t.curriculum_title}</h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">{t.curriculum_sub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CURRICULUM_LESSONS.map((item) => (
              <div
                key={item.day}
                className="p-6 rounded-3xl border bg-slate-900/80 border-slate-800/90 hover:border-cyan-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-mono">
                      100% FREE · Day {item.day}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {(item.category as any)[lang] || item.category.en}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {(item.title as any)[lang] || item.title.en}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {(item.summary as any)[lang] || item.summary.en}
                  </p>
                </div>

                <Link
                  href={`/day/${item.day}`}
                  className="w-full py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:brightness-110 text-white shadow-md transition-all"
                >
                  <span>Start Lesson ➔</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Sponsorship / Stake Pool Tribute Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-10">
          <div className="p-8 rounded-3xl glass-card border border-amber-500/40 text-center space-y-4 bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/20">
            <ShieldCheck className="w-10 h-10 text-amber-400 mx-auto" />
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Sponsored by JOY & HOPE Bare-Metal Cardano Stake Pools
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              This free educational portal is made possible through the support of the JOY and HOPE stake pools. You can support our infrastructure and keep this course free forever by delegating your Cardano (ADA) to our enterprise bare-metal pools.
            </p>
            <div className="pt-2">
              <a
                href="https://cardano.ipclub29.com/#delegation-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-bold text-xs sm:text-sm transition-all"
              >
                <span>Learn How to Delegate ADA to JOY / HOPE</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer currentLang={lang} />
    </>
  );
}
