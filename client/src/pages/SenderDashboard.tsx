import { LayoutDashboard, Send, MapPin, Plane, Bell, User } from 'lucide-react';
import { useState } from 'react';
import logoImage from '@assets/logo_1761761867719.png';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';

const mockTravelers = [
  { id: 1, name: 'Uche', rating: 5.0, route: 'Calabar → Lagos', available: '20kg available', price: '$5/kg' },
  { id: 2, name: 'Inem', rating: 4.0, route: 'Calabar → Lagos', available: '20kg available', price: '$5/kg' },
  { id: 3, name: 'Doria', rating: 5.0, route: 'Calabar → Lagos', available: '15kg available', price: '$7/kg' },
];

export default function SenderDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6">
          <img src={logoImage} alt="RunAm" className="h-8" />
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
              activeTab === 'dashboard' 
                ? 'bg-gray-100 text-gray-900' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            data-testid="button-nav-dashboard"
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab('send')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
              activeTab === 'send' 
                ? 'bg-gray-100 text-gray-900' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            data-testid="button-nav-send"
          >
            <Send className="w-5 h-5" />
            <span className="font-medium">Send</span>
          </button>

          <button
            onClick={() => setActiveTab('track')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
              activeTab === 'track' 
                ? 'bg-gray-100 text-gray-900' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            data-testid="button-nav-track"
          >
            <MapPin className="w-5 h-5" />
            <span className="font-medium">Track</span>
          </button>

          <button
            onClick={() => setActiveTab('travel')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
              activeTab === 'travel' 
                ? 'bg-gray-100 text-gray-900' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            data-testid="button-nav-travel"
          >
            <Plane className="w-5 h-5" />
            <span className="font-medium">Travel</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-end gap-4">
          <button className="relative" data-testid="button-notifications">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center" data-testid="button-profile">
            <User className="w-5 h-5 text-gray-600" />
          </button>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-8">
          {activeTab === 'dashboard' ? (
            <AnalyticsDashboard />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Send a Parcel Form */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6" data-testid="text-send-parcel-title">
                Send a Parcel
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                  <input
                    type="text"
                    placeholder="Calabar"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                    data-testid="input-from"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                  <input
                    type="text"
                    placeholder="Lagos"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                    data-testid="input-to"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Parcel Type</label>
                  <input
                    type="text"
                    placeholder="Hare"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                    data-testid="input-parcel-type"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Address</label>
                  <input
                    type="text"
                    placeholder="Hare"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                    data-testid="input-pickup-address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Receiver's Name</label>
                  <input
                    type="text"
                    placeholder="Hare"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                    data-testid="input-receiver-name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Receiver's Phone</label>
                  <input
                    type="tel"
                    placeholder="+104"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                    data-testid="input-receiver-phone"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
                  <input
                    type="number"
                    placeholder="2kg"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                    data-testid="input-weight"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Help</label>
                  <textarea
                    placeholder="Leave any special delivery instructions here"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] resize-none"
                    data-testid="input-delivery-help"
                  />
                </div>

                <button className="w-full bg-[#2D6A4F] hover:bg-[#2D6A4F]/90 text-white py-3.5 rounded-lg font-semibold transition-colors" data-testid="button-find-runner">
                  Find Runner
                </button>
              </div>
            </div>

            {/* Matching Travelers */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2" data-testid="text-matching-travelers-title">
                  Matching Travelers
                </h2>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-medium text-gray-900">USDC Payment Active</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-4">
                {mockTravelers.map((traveler) => (
                  <div key={traveler.id} className="border border-gray-200 rounded-lg p-4" data-testid={`card-traveler-${traveler.id}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-gray-900">{traveler.name}</h3>
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-500">★</span>
                            <span className="text-sm font-medium">{traveler.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">{traveler.route}</p>
                      </div>
                      <button className="bg-[#2D6A4F] hover:bg-[#2D6A4F]/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors" data-testid={`button-select-${traveler.id}`}>
                        Select
                      </button>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>{traveler.available}</p>
                      <p className="font-medium">{traveler.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
