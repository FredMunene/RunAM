import { Package, TrendingUp } from 'lucide-react';

const mockShipmentData = [
  { id: 'DLV-331', to: 'Lagos', traveler: 'Uche', parcelType: 'Clothing', weight: '5kg', status: 'Delivered' },
  { id: 'DLV-331', to: 'Uyo', traveler: 'Monica', parcelType: 'Clothing', weight: '5kg', status: 'In Transit' },
  { id: 'DLV-331', to: 'Lagos', traveler: 'David', parcelType: 'Clothing', weight: '2kg', status: 'Pending' },
  { id: 'DLV-331', to: 'Lagos', traveler: 'Femi', parcelType: 'Clothing', weight: '4kg', status: 'Delivered' },
];

const trafficData = [
  { location: 'Benin city', percentage: 60.5, color: '#4285F4' },
  { location: 'Lagos', percentage: 50.5, color: '#34A853' },
  { location: 'Uyo', percentage: 30, color: '#FBBC04' },
  { location: 'Ibadan', percentage: 20.5, color: '#EA4335' },
];

export default function AnalyticsDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Section - 2/3 width */}
      <div className="lg:col-span-2 space-y-6">
        {/* Top Analytics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Total Shipment Card */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-[#2D6A4F]" />
                <span className="text-sm font-medium text-gray-600">Total Shipment</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-[#2D6A4F] bg-[#E8F5E9] px-2 py-1 rounded">
                <TrendingUp className="w-3 h-3" />
                +2%
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900" data-testid="text-total-shipment">500</span>
              <span className="text-sm text-gray-500">This week</span>
            </div>
          </div>

          {/* Delivery Card */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-[#2D6A4F]" />
                <span className="text-sm font-medium text-gray-600">Delivery</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-[#2D6A4F] bg-[#E8F5E9] px-2 py-1 rounded">
                <TrendingUp className="w-3 h-3" />
                +2%
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900" data-testid="text-total-delivery">200</span>
              <span className="text-sm text-gray-500">This Month</span>
            </div>
          </div>
        </div>

        {/* Shipment Analytics Chart */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🇺🇸</span>
            <span className="text-sm font-medium text-gray-900">Shipment Analytics</span>
          </div>
          
          <div className="mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-gray-900">4.38K</span>
              <span className="text-sm text-gray-500">this Month</span>
            </div>
          </div>

          {/* Simple Line Chart Representation */}
          <div className="h-48 flex items-end justify-between gap-2">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => {
              const heights = [45, 40, 35, 50, 55, 48, 60, 65, 58, 52, 48, 55];
              return (
                <div key={month} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-[#2D6A4F]/20 rounded-t" style={{ height: `${heights[index]}%` }}></div>
                  <span className="text-xs text-gray-500">{month}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Shipment Data Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-900">Shipment Data</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Shipping ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">To</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Traveler</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Parcel Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Weight</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockShipmentData.map((shipment, index) => (
                  <tr key={index} data-testid={`row-shipment-${index}`}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{shipment.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{shipment.to}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{shipment.traveler}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{shipment.parcelType}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{shipment.weight}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        shipment.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        shipment.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {shipment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Section - 1/3 width */}
      <div className="space-y-6">
        {/* Traffic by Location */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-sm font-bold text-gray-900 mb-6">Traffic by Location</h3>
          
          {/* Pie Chart Representation */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-40 h-40">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#4285F4" strokeWidth="20" strokeDasharray="151 157" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#34A853" strokeWidth="20" strokeDasharray="126 157" strokeDashoffset="-151" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#FBBC04" strokeWidth="20" strokeDasharray="75 157" strokeDashoffset="-277" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#EA4335" strokeWidth="20" strokeDasharray="51 157" strokeDashoffset="-352" />
              </svg>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-3">
            {trafficData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-gray-700">{item.location}</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tracking History */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-sm font-bold text-gray-900 mb-6">Tracking History</h3>
          
          <div className="space-y-4">
            <div>
              <div className="text-xs text-gray-500 mb-1">Tracking ID</div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">AD-238-111</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                  In Transit
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <div className="w-0.5 h-12 bg-gray-200"></div>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500 mb-1">Departure</div>
                  <div className="text-sm font-medium text-gray-900">Ibadan Express</div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="w-0.5 h-12 bg-gray-200"></div>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500 mb-1">Current Location</div>
                  <div className="text-sm font-medium text-gray-900">Lagos</div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500 mb-1">Arrival</div>
                  <div className="text-sm font-medium text-gray-900">Calabar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
