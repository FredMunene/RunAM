import { X, Star } from 'lucide-react';

interface SelectedTravelerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SelectedTravelerModal({ isOpen, onClose }: SelectedTravelerModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          data-testid="button-close-modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1" data-testid="text-traveler-name">
              Uche
            </h2>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-lg font-semibold">4.87</span>
              </div>
              <span className="text-gray-400">→</span>
              <span className="text-gray-600">$55 USDC</span>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Route</span>
              <span className="text-sm font-medium text-gray-900">Calabar → Lagos</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Available capacity</span>
              <span className="text-sm font-medium text-gray-900">20kg</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Rate</span>
              <span className="text-sm font-medium text-gray-900">$5/kg</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Departure Time</span>
              <span className="text-sm font-medium text-gray-900">2:00PM, Today</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Verification</span>
              <span className="text-sm font-medium text-green-600">Verified</span>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between text-sm font-semibold text-gray-900">
              <span>Total</span>
              <span className="text-lg">$ 4.87 = $55 USDC</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={onClose}
              className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              data-testid="button-cancel"
            >
              Cancel
            </button>
            <button 
              className="flex-1 bg-[#2D6A4F] hover:bg-[#2D6A4F]/90 text-white py-3 rounded-lg font-semibold transition-colors"
              data-testid="button-confirm"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
