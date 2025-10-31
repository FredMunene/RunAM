import { Bell, User, X } from 'lucide-react';
import { useState } from 'react';
import logoImage from '@assets/logo_1761761867719.png';

const mockNotifications = [
  { id: 1, type: 'new', message: 'New order for ID: IMJ2251', time: '2 mins ago' },
  { id: 2, type: 'new', message: 'New order for ID: IMJ2251', time: '5 mins ago' },
  { id: 3, type: 'update', message: 'Order IMJ2251 has been delivered', time: '10 mins ago' },
  { id: 4, type: 'new', message: 'New order for ID: IMJ2251', time: '15 mins ago' },
  { id: 5, type: 'update', message: 'Order IMJ2251 is in transit', time: '20 mins ago' },
];

export default function Notifications() {
  const [activeTab, setActiveTab] = useState<'all' | 'new' | 'updates'>('all');

  const filteredNotifications = mockNotifications.filter(notif => {
    if (activeTab === 'all') return true;
    if (activeTab === 'new') return notif.type === 'new';
    if (activeTab === 'updates') return notif.type === 'update';
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <img src={logoImage} alt="RunAm" className="h-6" />
          </div>

          <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'all'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              data-testid="button-tab-all"
            >
              View all
            </button>
            <button
              onClick={() => setActiveTab('new')}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'new'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              data-testid="button-tab-new"
            >
              New order
            </button>
            <button
              onClick={() => setActiveTab('updates')}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'updates'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              data-testid="button-tab-updates"
            >
              Updates
            </button>
          </div>
        </div>

        <div className="max-h-[500px] overflow-y-auto">
          <div className="divide-y divide-gray-100">
            {filteredNotifications.map((notif) => (
              <div 
                key={notif.id} 
                className="p-4 hover:bg-gray-50 transition-colors flex items-start gap-3"
                data-testid={`notification-${notif.id}`}
              >
                <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 mb-1">{notif.message}</p>
                  <p className="text-xs text-gray-500">{notif.time}</p>
                </div>
                <button className="flex-shrink-0 text-red-500 hover:text-red-600">
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <button className="w-full text-sm text-[#2D6A4F] font-semibold hover:underline" data-testid="button-view-all">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
