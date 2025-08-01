'use client'

import { useState } from 'react'
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Calendar, 
  DollarSign, 
  MessageSquare,
  Star,
  Clock,
  Target,
  Award
} from 'lucide-react'

// Mock analytics data
const mockAnalytics = {
  overview: {
    totalRevenue: 56820,
    revenueGrowth: 15.3,
    totalBookings: 281,
    bookingsGrowth: 8.7,
    totalCustomers: 156,
    customersGrowth: 12.4,
    avgBookingValue: 202,
    avgBookingValueGrowth: 6.2
  },
  monthlyRevenue: [
    { month: 'Jan', revenue: 4200, bookings: 18 },
    { month: 'Feb', revenue: 3800, bookings: 16 },
    { month: 'Mar', revenue: 5200, bookings: 22 },
    { month: 'Apr', revenue: 4800, bookings: 20 },
    { month: 'May', revenue: 6200, bookings: 28 },
    { month: 'Jun', revenue: 7800, bookings: 35 },
    { month: 'Jul', revenue: 8200, bookings: 38 },
    { month: 'Aug', revenue: 7600, bookings: 34 },
    { month: 'Sep', revenue: 9200, bookings: 42 },
    { month: 'Oct', revenue: 8800, bookings: 38 },
    { month: 'Nov', revenue: 10200, bookings: 45 },
    { month: 'Dec', revenue: 11800, bookings: 52 }
  ],
  servicePerformance: [
    { service: 'Celebrity Choreography', bookings: 45, revenue: 67500, avgRating: 4.9 },
    { service: 'MomFlow Classes', bookings: 89, revenue: 2140, avgRating: 4.8 },
    { service: 'Afro Fusion', bookings: 156, revenue: 4680, avgRating: 4.7 },
    { service: 'Stunt Training', bookings: 24, revenue: 4200, avgRating: 4.6 },
    { service: 'Workshops', bookings: 67, revenue: 3350, avgRating: 4.5 }
  ],
  customerSegments: [
    { segment: 'New Mothers', count: 45, percentage: 28.8 },
    { segment: 'Dance Enthusiasts', count: 38, percentage: 24.4 },
    { segment: 'Professional Artists', count: 32, percentage: 20.5 },
    { segment: 'Fitness Seekers', count: 25, percentage: 16.0 },
    { segment: 'Students', count: 16, percentage: 10.3 }
  ],
  topCustomers: [
    { name: 'Emma Wilson', bookings: 8, totalSpent: 12500, lastBooking: '2024-01-15' },
    { name: 'Sarah Miller', bookings: 12, totalSpent: 300, lastBooking: '2024-01-14' },
    { name: 'Michael Chen', bookings: 6, totalSpent: 180, lastBooking: '2024-01-13' },
    { name: 'Anna Schmidt', bookings: 4, totalSpent: 5000, lastBooking: '2024-01-12' },
    { name: 'David Brown', bookings: 5, totalSpent: 750, lastBooking: '2024-01-11' }
  ]
}

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('12months')
  const [analytics] = useState(mockAnalytics)

  const StatCard = ({ title, value, change, icon: Icon, color, prefix = '', suffix = '' }: any) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {prefix}{typeof value === 'number' ? value.toLocaleString() : value}{suffix}
          </p>
          {change !== undefined && (
            <div className={`flex items-center mt-2 ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              <span className="text-sm ml-1">
                {change >= 0 ? '+' : ''}{change}% from last period
              </span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-2">Track your business performance and growth metrics</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="3months">Last 3 months</option>
            <option value="12months">Last 12 months</option>
          </select>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value={analytics.overview.totalRevenue}
          change={analytics.overview.revenueGrowth}
          icon={DollarSign}
          color="bg-green-500"
          prefix="€"
        />
        <StatCard
          title="Total Bookings"
          value={analytics.overview.totalBookings}
          change={analytics.overview.bookingsGrowth}
          icon={Calendar}
          color="bg-blue-500"
        />
        <StatCard
          title="Total Customers"
          value={analytics.overview.totalCustomers}
          change={analytics.overview.customersGrowth}
          icon={Users}
          color="bg-purple-500"
        />
        <StatCard
          title="Avg Booking Value"
          value={analytics.overview.avgBookingValue}
          change={analytics.overview.avgBookingValueGrowth}
          icon={Target}
          color="bg-amber-500"
          prefix="€"
        />
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900">Revenue Trend</h3>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
              <span className="text-gray-600">Revenue</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">Bookings</span>
            </div>
          </div>
        </div>
        
        {/* Simple Bar Chart Representation */}
        <div className="space-y-4">
          {analytics.monthlyRevenue.slice(-6).map((data, index) => (
            <div key={data.month} className="flex items-center space-x-4">
              <div className="w-12 text-sm font-medium text-gray-600">{data.month}</div>
              <div className="flex-1 flex items-center space-x-2">
                <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                  <div 
                    className="bg-gradient-to-r from-amber-500 to-orange-600 h-6 rounded-full flex items-center justify-end pr-2"
                    style={{ width: `${(data.revenue / 12000) * 100}%` }}
                  >
                    <span className="text-white text-xs font-medium">€{data.revenue.toLocaleString()}</span>
                  </div>
                </div>
                <div className="w-16 text-sm text-gray-600">{data.bookings} bookings</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Performance & Customer Segments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Service Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Service Performance</h3>
          <div className="space-y-4">
            {analytics.servicePerformance.map((service, index) => (
              <div key={service.service} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{service.service}</h4>
                  <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                    <span>{service.bookings} bookings</span>
                    <span>•</span>
                    <span>€{service.revenue.toLocaleString()}</span>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-amber-500 fill-current" />
                      <span>{service.avgRating}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">#{index + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Segments */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Customer Segments</h3>
          <div className="space-y-4">
            {analytics.customerSegments.map((segment) => (
              <div key={segment.segment} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
                  <span className="font-medium text-gray-900">{segment.segment}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600">{segment.count} customers</span>
                  <span className="font-bold text-gray-900">{segment.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Customers */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">Top Customers</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-6 font-semibold text-gray-900">Customer</th>
                <th className="text-left py-3 px-6 font-semibold text-gray-900">Bookings</th>
                <th className="text-left py-3 px-6 font-semibold text-gray-900">Total Spent</th>
                <th className="text-left py-3 px-6 font-semibold text-gray-900">Last Booking</th>
                <th className="text-left py-3 px-6 font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {analytics.topCustomers.map((customer, index) => (
                <tr key={customer.name} className="hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{customer.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{customer.name}</p>
                        <p className="text-sm text-gray-600">Rank #{index + 1}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-medium text-gray-900">{customer.bookings}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-green-600">€{customer.totalSpent.toLocaleString()}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-600">{customer.lastBooking}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl shadow-sm p-6 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <Award size={24} />
          <h3 className="text-xl font-bold">Key Insights</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2">🚀 Growth Trend</h4>
            <p className="text-sm opacity-90">Revenue is up 15.3% with strong booking growth across all services.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">⭐ Top Performer</h4>
            <p className="text-sm opacity-90">Celebrity Choreography generates highest revenue per booking (€1,500 avg).</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">👥 Customer Base</h4>
            <p className="text-sm opacity-90">New mothers segment shows highest engagement and retention rates.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
