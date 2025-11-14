import { Wallet, ChevronDown, LogOut, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useWallet } from '@/contexts/WalletContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';

export default function WalletButton() {
  const { isConnected, walletAddress, usdcBalance, setShowConnectModal, disconnectWallet } = useWallet();
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  const handleCopyAddress = () => {
    if (walletAddress) {
      navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      toast({
        title: 'Address copied!',
        description: 'Wallet address copied to clipboard',
      });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDisconnect = () => {
    disconnectWallet();
    toast({
      title: 'Wallet disconnected',
      description: 'Your wallet has been disconnected',
    });
  };

  if (!isConnected) {
    return (
      <button
        onClick={() => setShowConnectModal(true)}
        className="flex items-center gap-2 px-4 py-2 bg-[#2D6A4F] hover:bg-[#2D6A4F]/90 text-white rounded-lg font-medium transition-colors"
        data-testid="button-connect-wallet"
      >
        <Wallet className="w-4 h-4" />
        <span className="hidden sm:inline">Connect Wallet</span>
      </button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          data-testid="button-wallet-menu"
        >
          <div className="flex items-center gap-2">
            <div className="relative">
              <Wallet className="w-4 h-4 text-[#2D6A4F]" />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full border border-white"></div>
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-xs font-medium text-gray-900">
                {walletAddress && shortenAddress(walletAddress)}
              </p>
              <p className="text-xs text-gray-500">${usdcBalance.toFixed(2)} USDC</p>
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <div className="px-3 py-2">
          <p className="text-xs text-gray-500 mb-1">Wallet Address</p>
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-mono text-gray-900">
              {walletAddress && shortenAddress(walletAddress)}
            </p>
            <button
              onClick={handleCopyAddress}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              data-testid="button-copy-address"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4 text-gray-600" />
              )}
            </button>
          </div>
        </div>
        <DropdownMenuSeparator />
        <div className="px-3 py-2 bg-gray-50">
          <p className="text-xs text-gray-500 mb-1">USDC Balance</p>
          <p className="text-lg font-bold text-[#2D6A4F]">${usdcBalance.toFixed(2)}</p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleDisconnect}
          className="text-red-600 cursor-pointer"
          data-testid="button-disconnect-wallet"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
