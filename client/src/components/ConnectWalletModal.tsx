import { Wallet, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useWallet } from '@/contexts/WalletContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function ConnectWalletModal() {
  const { showConnectModal, setShowConnectModal, connectWallet } = useWallet();
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    setIsConnecting(true);
    await connectWallet();
    setIsConnecting(false);
  };

  return (
    <Dialog open={showConnectModal} onOpenChange={setShowConnectModal}>
      <DialogContent className="max-w-md" data-testid="modal-connect-wallet">
        <DialogHeader>
          <DialogTitle className="text-2xl">Connect Wallet</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <p className="text-gray-600 text-sm">
            Connect your Hedera wallet to send and receive USDC payments on RunAm.
          </p>

          <button
            onClick={handleConnect}
            disabled={isConnecting}
            className="w-full flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-[#2D6A4F] hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
            data-testid="button-connect-hashpack"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">HashPack Wallet</p>
                <p className="text-xs text-gray-500">Most popular Hedera wallet</p>
              </div>
            </div>
            {isConnecting ? (
              <Loader2 className="w-5 h-5 text-[#2D6A4F] animate-spin" />
            ) : (
              <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-[#2D6A4F]"></div>
            )}
          </button>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Demo Mode: This is a simulated wallet connection for testing purposes.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
