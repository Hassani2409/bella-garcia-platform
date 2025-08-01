'use client'

import { useState, useEffect } from 'react'
import { 
  Calendar, 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign
} from 'lucide-react'

// Mock data - in real app, this would come from Supabase
const mockStats = {
  totalBookings: 156,
  pendingBookings: 24,
  totalCustomers: 89,
  unreadMessages: 12,
  monthlyRevenue: 15420,
  completedBookings: 132
}

const recentBookings = [
  { id: 1, customer: 'Sarah Miller', service: 'MomFlow Class', date: '2024-01-15', status: 'confirmed', amount: 25 },
  { id: 2, customer: 'Michael Chen', service: 'Afro Fusion', date: '2024-01-16', status: 'pending', amount: 30 },
  { id: 3, customer: 'Emma Wilson', service: 'Celebrity Choreography', date: '2024-01-18', status: 'confirmed', amount: 2500 },
  { id: 4, customer: 'David Brown', service: 'Stunt Training', date: '2024-01-20', status: 'pending', amount: 150 },
]

const recentMessages = [
  { id: 1, name: 'Lisa Anderson', subject: 'Inquiry about private sessions', time: '2 hours ago', unread: true },
  { id: 2, name: 'Tom Rodriguez', subject: 'Booking confirmation needed', time: '4 hours ago', unread: true },
  { id: 3, name: 'Anna Schmidt', subject: 'Rescheduling request', time: '1 day ago', unread: false },
]

export default function AdminDashboard() {
  const [stats, setStats] = useState(mockStats)

  const StatCard = ({ title, value, icon: Icon, color, change }: any) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          {change && (
            <p className={`text-sm mt-2 ${change > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {change > 0 ? '+' : ''}{change}% from last month
            </p>
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
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back, Bella! Here's what's happening with your business.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Bookings"
          value={stats.totalBookings}
          icon={Calendar}
          color="bg-blue-500"
          change={12}
        />
        <StatCard
          title="Pending Bookings"
          value={stats.pendingBookings}
          icon={Clock}
          color="bg-amber-500"
        />
        <StatCard
          title="Total Customers"
          value={stats.totalCustomers}
          icon={Users}
          color="bg-green-500"
          change={8}
        />
        <StatCard
          title="Unread Messages"
          value={stats.unreadMessages}
          icon={MessageSquare}
          color="bg-purple-500"
        />
      </div>

      {/* Revenue and Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Revenue</h3>
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-full">
              <DollarSign size={24} className="text-green-600" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">€{stats.monthlyRevenue.toLocaleString()}</p>
              <p className="text-green-600 text-sm">+15% from last month</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Completion Rate</h3>
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <CheckCircle size={24} className="text-blue-600" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">
                {Math.round((stats.completedBookings / stats.totalBookings) * 100)}%
              </p>
              <p className="text-blue-600 text-sm">{stats.completedBookings} of {stats.totalBookings} bookings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Bookings</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {recentBookings.map((booking) => (
              <div key={booking.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{booking.customer}</p>
                    <p className="text-sm text-gray-600">{booking.service}</p>
                    <p className="text-xs text-gray-500">{booking.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">€{booking.amount}</p>
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      booking.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 text-center border-t border-gray-200">
            <button className="text-amber-600 hover:text-amber-700 font-medium text-sm">
              View all bookings
            </button>
          </div>
        </div>

        {/* Recent Messages */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Messages</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {recentMessages.map((message) => (
              <div key={message.id} className={`p-6 hover:bg-gray-50 ${message.unread ? 'bg-amber-50' : ''}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <p className="font-medium text-gray-900">{message.name}</p>
                      {message.unread && (
                        <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{message.subject}</p>
                    <p className="text-xs text-gray-500 mt-1">{message.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 text-center border-t border-gray-200">
            <button className="text-amber-600 hover:text-amber-700 font-medium text-sm">
              View all messages
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
