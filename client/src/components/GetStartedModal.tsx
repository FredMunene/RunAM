import { X, Send, User } from 'lucide-react';
import { useState } from 'react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
  const [selectedRole, setSelectedRole] = useState<'sender' | 'traveler'>('sender');
  const [travelFrequency, setTravelFrequency] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
          data-testid="button-close-modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-[#2D6A4F] mb-6" data-testid="text-modal-title">
            Become A Runner
          </h2>

          <div className="mb-6">
            <p className="text-sm text-gray-700 mb-3">I want to:</p>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => setSelectedRole('sender')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedRole === 'sender' 
                    ? 'border-[#2D6A4F] bg-[#E8F5E9]' 
                    : 'border-gray-200 bg-white'
                }`}
                data-testid="button-role-sender"
              >
                <div className="flex flex-col items-center gap-2">
                  <Send className="w-5 h-5 text-[#2D6A4F]" />
                  <span className="text-sm font-medium">Send Item</span>
                </div>
              </button>
              <button 
                onClick={() => setSelectedRole('traveler')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedRole === 'traveler' 
                    ? 'border-[#2D6A4F] bg-[#E8F5E9]' 
                    : 'border-gray-200 bg-white'
                }`}
                data-testid="button-role-traveler"
              >
                <div className="flex flex-col items-center gap-2">
                  <User className="w-5 h-5 text-[#2D6A4F]" />
                  <span className="text-sm font-medium">Earn as a Traveler</span>
                </div>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Jane"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
                data-testid="input-full-name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="jane@gmail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
                data-testid="input-email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="+234..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
                data-testid="input-phone"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">City</label>
              <input
                type="text"
                placeholder="Enter your city"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
                data-testid="input-city"
              />
            </div>

            {selectedRole === 'traveler' && (
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">How often do you travel?</label>
                <select
                  value={travelFrequency}
                  onChange={(e) => setTravelFrequency(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent bg-white"
                  data-testid="select-travel-frequency"
                >
                  <option value="">Select Frequency</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="occasionally">Occasionally</option>
                </select>
              </div>
            )}

            <div className="flex items-start gap-2">
              <input 
                type="checkbox" 
                id="terms" 
                className="mt-1 w-4 h-4 text-[#2D6A4F] border-gray-300 rounded focus:ring-[#2D6A4F]"
                data-testid="checkbox-terms"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                Agree to <span className="text-[#2D6A4F] font-medium">Terms</span> and <span className="text-[#2D6A4F] font-medium">Condition</span>
              </label>
            </div>

            <button className="w-full bg-[#2D6A4F] hover:bg-[#2D6A4F]/90 text-white py-3.5 rounded-lg font-semibold transition-colors" data-testid="button-create-account">
              Create an Account
            </button>

            <p className="text-center text-sm text-gray-600">
              Have an account? <button onClick={onClose} className="text-[#2D6A4F] font-medium hover:underline" data-testid="button-sign-in-link">Sign in</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
