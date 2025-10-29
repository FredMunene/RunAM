import { Wallet, Clock, Heart, TrendingUp } from 'lucide-react';
import travelerImage from '@assets/generated_images/Traveler_with_backpack_at_station_4199c77d.png';

const features = [
  {
    icon: Wallet,
    title: 'Earn Extra Income',
    description: 'Make money from trips you\'re already taking',
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Choose deliveries that fit your travel plans',
  },
  {
    icon: Heart,
    title: 'Help Others',
    description: 'Connect people and make a positive impact',
  },
  {
    icon: TrendingUp,
    title: 'Build Reputation',
    description: 'Earn ratings and become a trusted traveler',
  },
];

export default function ForTravelers() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Content */}
          <div className="order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2332] mb-3 sm:mb-4">
              For Travelers
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
              Turn your trip into extra income by delivering packages
            </p>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-[#2D8A54] text-xl sm:text-2xl flex-shrink-0">✓</span>
                <span className="text-base sm:text-lg text-gray-700">Earn money from trips you're already taking</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-[#2D8A54] text-xl sm:text-2xl flex-shrink-0">✓</span>
                <span className="text-base sm:text-lg text-gray-700">Choose deliveries that fit your route</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-[#2D8A54] text-xl sm:text-2xl flex-shrink-0">✓</span>
                <span className="text-base sm:text-lg text-gray-700">Safe handoffs with ID verification</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-[#2D8A54] text-xl sm:text-2xl flex-shrink-0">✓</span>
                <span className="text-base sm:text-lg text-gray-700">Build your reputation through reviews</span>
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="order-2">
            <img
              src="/attached_assets/generated_images/Traveler_with_backpack_at_station_4199c77d.png"
              alt="Traveler with backpack"
              className="rounded-xl sm:rounded-2xl shadow-lg w-full h-auto object-cover aspect-square sm:aspect-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}