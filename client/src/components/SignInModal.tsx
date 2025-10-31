import { X } from 'lucide-react';
import { SiGoogle } from 'react-icons/si';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignInModal({ isOpen, onClose }: SignInModalProps) {
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8" data-testid="text-modal-title">
            Welcome Back
          </h2>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
                data-testid="input-email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
                data-testid="input-password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="w-4 h-4 text-[#2D6A4F] border-gray-300 rounded focus:ring-[#2D6A4F]"
                  data-testid="checkbox-remember"
                />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <button className="text-sm text-[#2D6A4F] font-medium hover:underline" data-testid="button-forgot-password">
                forgot password?
              </button>
            </div>

            <button className="w-full bg-[#2D6A4F] hover:bg-[#2D6A4F]/90 text-white py-3.5 rounded-lg font-semibold transition-colors" data-testid="button-sign-in">
              Sign In
            </button>

            <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-3.5 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2" data-testid="button-sign-in-google">
              <SiGoogle className="w-5 h-5" />
              Sign In with Google
            </button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account? <button onClick={onClose} className="text-[#2D6A4F] font-medium hover:underline" data-testid="button-sign-up-link">Sign Up</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
