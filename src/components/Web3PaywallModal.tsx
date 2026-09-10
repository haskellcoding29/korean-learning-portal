'use client';

import React, { useState } from 'react';
import { ShieldCheck, Wallet, Sparkles, X, CheckCircle2 } from 'lucide-react';
import { SupportedLang, translations } from '@/lib/i18n';
import { WalletState, purchaseLessonWithAda, JOY_HOPE_POOLS } from '@/lib/cardano';

interface PaywallModalProps {
  day: number;
  currentLang: SupportedLang;
  walletState: WalletState;
  onUnlocked: (unlockedDays: number[]) => void;
  onClose: () => void;
}

export default function Web3PaywallModal({ day, currentLang, walletState, onUnlocked, onClose }: PaywallModalProps) {
  const t = translations[currentLang];
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePayAda = async () => {
    setProcessing(true);
    setTimeout(async () => {
      const updated = await purchaseLessonWithAda(day, walletState.unlockedDays);
      setSuccess(true);
      setProcessing(false);
      setTimeout(() => {
        onUnlocked(updated);
        onClose();
      }, 1200);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl space-y-6 glow-cardano">
        
        <button onClick={onClose} className="absolute top-5 right-5 text-slate-400 hover:text-white p-1">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center mx-auto text-white shadow-md shadow-blue-500/20">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-black text-white">Unlock Day {day} Premium Lesson</h3>
          <p className="text-xs text-slate-400">
            Instant on-chain access with Cardano (ADA) or 100% Free with JOY/HOPE Staking VIP.
          </p>
        </div>

        {/* Option A: Pay with ADA */}
        <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3 text-left">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Option A: Cardano Micropayment</span>
            <span className="text-sm font-black text-white font-mono bg-cyan-500/20 px-2.5 py-0.5 rounded-full border border-cyan-500/30">2 ₳</span>
          </div>
          <p className="text-xs text-slate-300">
            One-time micro-payment. Unlock this full lesson, dialogues, grammar, and Anki drills forever.
          </p>
          <button
            onClick={handlePayAda}
            disabled={processing || success}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:brightness-110 text-white font-black text-sm shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Wallet className="w-4 h-4" />
            <span>{processing ? 'Signing Transaction on Cardano...' : success ? 'Payment Verified! 🔓' : 'Pay 2 ADA with Wallet'}</span>
          </button>
        </div>

        {/* Option B: JOY / HOPE Staking VIP */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-amber-950/30 border border-amber-500/40 space-y-3 text-left">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Option B: JOY / HOPE Staking VIP
            </span>
            <span className="text-xs font-black text-amber-300 bg-amber-500/20 px-2.5 py-0.5 rounded-full border border-amber-500/30">100% FREE</span>
          </div>
          <p className="text-xs text-slate-300">
            Delegate to <strong>JOY, JOY2, HOPE, or HOPE2</strong> bare-metal pools. Earn 3.5% staking rewards while enjoying 100% free VIP access across all 30 days!
          </p>
          <a
            href="https://cardano.ipclub29.com/#delegation-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-full py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-bold text-xs transition-all"
          >
            How to Delegate (Pool IDs & Guide) ➔
          </a>
        </div>

      </div>
    </div>
  );
}
