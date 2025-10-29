import { Zap, DollarSign, Calendar, Globe } from 'lucide-react';
import senderImage from '@assets/generated_images/Man_holding_package_box_09554db5.png';

const features = [
  {
    icon: Zap,
    title: 'Faster Delivery',
    description: 'Same-day and next-day delivery options available',
  },
  {
    icon: DollarSign,
    title: 'Lower Costs',
    description: 'Save up to 60% compared to traditional courier services',
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Choose delivery times that work for your schedule',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Send packages anywhere with our worldwide traveler network',
  },
];

export default function ForSenders() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/attached_assets/generated_images/Man_holding_package_box_09554db5.png"
              alt="Person sending package"
              className="rounded-xl sm:rounded-2xl shadow-lg w-full h-auto object-cover aspect-square sm:aspect-auto"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2332] mb-3 sm:mb-4">
              For Senders
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
              Send packages affordably and securely with trusted travelers
            </p>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-[#2D8A54] text-xl sm:text-2xl flex-shrink-0">✓</span>
                <span className="text-base sm:text-lg text-gray-700">Save up to 70% on shipping costs</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-[#2D8A54] text-xl sm:text-2xl flex-shrink-0">✓</span>
                <span className="text-base sm:text-lg text-gray-700">Real-time package tracking</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-[#2D8A54] text-xl sm:text-2xl flex-shrink-0">✓</span>
                <span className="text-base sm:text-lg text-gray-700">Verified and rated travelers</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-[#2D8A54] text-xl sm:text-2xl flex-shrink-0">✓</span>
                <span className="text-base sm:text-lg text-gray-700">Secure escrow payment system</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}