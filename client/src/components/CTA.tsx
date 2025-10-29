import { Smartphone, Lock, Headphones } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: 'Mobile App',
    description: 'Available on iOS and Android',
  },
  {
    icon: Lock,
    title: 'Secure Platform',
    description: 'Bank-level encryption',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Always here to help',
  },
];

export default function CTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#2D8A54]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          Join RunAM today and experience a smarter way to send and deliver packages
        </p>

        {/* Email Signup Form */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-sm sm:text-base"
            />
            <button className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#1A2332] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all hover:shadow-lg text-sm sm:text-base whitespace-nowrap">
              Sign Up Free
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 hover:bg-white/15 transition-colors">
            <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🚀</div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Quick Setup</h3>
            <p className="text-sm sm:text-base text-white/80">Get started in minutes</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 hover:bg-white/15 transition-colors">
            <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">💯</div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">100% Secure</h3>
            <p className="text-sm sm:text-base text-white/80">Your data is protected</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 hover:bg-white/15 transition-colors">
            <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🤝</div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Trusted Community</h3>
            <p className="text-sm sm:text-base text-white/80">Join thousands of users</p>
          </div>
        </div>
      </div>
    </section>
  );
}