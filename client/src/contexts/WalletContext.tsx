import { createContext, useContext, useState, ReactNode } from 'react';

interface WalletContextType {
  isConnected: boolean;
  walletAddress: string | null;
  usdcBalance: number;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  showConnectModal: boolean;
  setShowConnectModal: (show: boolean) => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

const FAKE_WALLET_ADDRESS = '0.0.1234567';
const FAKE_USDC_BALANCE = 125.50;

export function WalletProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [usdcBalance, setUsdcBalance] = useState(0);
  const [showConnectModal, setShowConnectModal] = useState(false);

  const connectWallet = async () => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsConnected(true);
    setWalletAddress(FAKE_WALLET_ADDRESS);
    setUsdcBalance(FAKE_USDC_BALANCE);
    setShowConnectModal(false);
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress(null);
    setUsdcBalance(0);
  };

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        walletAddress,
        usdcBalance,
        connectWallet,
        disconnectWallet,
        showConnectModal,
        setShowConnectModal,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}
