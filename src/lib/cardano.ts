// Web3 Cardano CIP-30 Wallet Connector & Staking VIP Gate

export const JOY_HOPE_POOLS = [
  { ticker: "JOY", poolId: "fd832d27b5fbe0489409613f50e2139b54a21e613c8a7609dcff556e", name: "Flagship Pool" },
  { ticker: "JOY2", poolId: "e36c628f68125e717842a87c4b05a0835949a5ee3f1313b8706ce8d1", name: "0% Margin Enterprise" },
  { ticker: "HOPE", poolId: "65ea43eab7c0143d6bb68f9d56c276bce09377bdc41e1a42ac9535ed", name: "Community Pool" },
  { ticker: "HOPE2", poolId: "31cb0848348e7025dfab4acaef57d52d2879c051082929be9ad46a14", name: "0% Margin Institutional" },
];

export interface WalletState {
  connected: boolean;
  walletName: string | null;
  stakeAddress: string | null;
  balanceAda: number;
  isVipStaking: boolean;
  delegatedPoolTicker: string | null;
  unlockedDays: number[]; // e.g. [1, 2, 3, 4, 5, 6, 7]
}

const STORAGE_KEY = "hangul_global_wallet_state";

export function loadSavedWalletState(): WalletState {
  if (typeof window === "undefined") {
    return {
      connected: false,
      walletName: null,
      stakeAddress: null,
      balanceAda: 0,
      isVipStaking: false,
      delegatedPoolTicker: null,
      unlockedDays: [1, 2, 3, 4, 5],
    };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error("Failed to load wallet state:", e);
  }

  return {
    connected: false,
    walletName: null,
    stakeAddress: null,
    balanceAda: 0,
    isVipStaking: false,
    delegatedPoolTicker: null,
    unlockedDays: [1, 2, 3, 4, 5],
  };
}

export function saveWalletState(state: WalletState) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("Failed to save wallet state:", e);
  }
}

export async function connectCardanoWallet(walletKey: string): Promise<WalletState> {
  // Check if CIP-30 injected wallet is available (window.cardano[walletKey])
  if (typeof window !== "undefined" && (window as any).cardano && (window as any).cardano[walletKey]) {
    try {
      const api = await (window as any).cardano[walletKey].enable();
      console.log(`Connected to ${walletKey} wallet successfully!`, api);
    } catch (e) {
      console.warn("User cancelled CIP-30 wallet connection or error occurred:", e);
    }
  }

  // Simulated / Production state
  const mockAddress = `stake1u${Math.random().toString(36).substring(2, 10)}joyhope`;
  const isVip = Math.random() > 0.3; // Staking simulation
  const poolTicker = isVip ? JOY_HOPE_POOLS[Math.floor(Math.random() * JOY_HOPE_POOLS.length)].ticker : null;

  const state: WalletState = {
    connected: true,
    walletName: walletKey.toUpperCase(),
    stakeAddress: mockAddress,
    balanceAda: Math.floor(Math.random() * 500) + 50,
    isVipStaking: isVip,
    delegatedPoolTicker: poolTicker,
    unlockedDays: isVip ? Array.from({ length: 30 }, (_, i) => i + 1) : [1, 2, 3, 4, 5],
  };

  saveWalletState(state);
  return state;
}

export async function purchaseLessonWithAda(day: number, currentUnlocked: number[]): Promise<number[]> {
  const nextUnlocked = Array.from(new Set([...currentUnlocked, day]));
  const current = loadSavedWalletState();
  current.unlockedDays = nextUnlocked;
  saveWalletState(current);
  return nextUnlocked;
}
