import React from 'react';
import Link from 'next/link';
import { Shield, Sparkles, ExternalLink, Heart } from 'lucide-react';
import { SupportedLang } from '@/lib/i18n';

export default function Footer({ currentLang }: { currentLang: SupportedLang }) {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 text-slate-400 py-12 text-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-bold text-white text-base">
                한
              </div>
              <span className="text-xl font-black text-white">Hangul<span className="text-cyan-400">Global</span></span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              The premier Web3 Korean education platform for English, Japanese, and Spanish speakers. Powered by Cardano bare-metal staking infrastructure and AI conversational drills.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                korean.ipclub29.com
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-cyan-400">
                Cardano CIP-30
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/alphabet" className="hover:text-cyan-400 transition-colors">Hangul Alphabet (24 Letters)</Link></li>
              <li><Link href="/#curriculum" className="hover:text-cyan-400 transition-colors">30-Day Course (Day 1~30)</Link></li>
              <li><Link href="/tutor" className="hover:text-cyan-400 transition-colors">24/7 AI Voice Tutor</Link></li>
              <li><Link href="/pricing" className="hover:text-cyan-400 transition-colors">ADA Micropayments & VIP</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3">JOY & HOPE Pools</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="https://cardano.ipclub29.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 flex items-center gap-1">Cardano Sarangbang <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="https://cexplorer.io/pool/fd832d27b5fbe0489409613f50e2139b54a21e613c8a7609dcff556e" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 flex items-center gap-1">JOY Pool on Cexplorer <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="https://cexplorer.io/pool/65ea43eab7c0143d6bb68f9d56c276bce09377bdc41e1a42ac9535ed" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 flex items-center gap-1">HOPE Pool on Cexplorer <ExternalLink className="w-3 h-3" /></a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Hangul Global & IPCLUB29 Network. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for Global Korean Learners.
          </p>
        </div>
      </div>
    </footer>
  );
}
