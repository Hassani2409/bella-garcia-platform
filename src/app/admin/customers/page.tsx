'use client'

import { useState } from 'react'
import { 
  Users, 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Mail, 
  Phone, 
  Calendar,
  Star,
  MapPin,
  Clock,
  TrendingUp,
  Award,
  Heart
} from 'lucide-react'

// Mock customer data
const mockCustomers = [
  {
    id: 1,
    name: 'Sarah Miller',
    email: 'sarah@email.com',
    phone: '+49 30 12345678',
    location: 'Berlin, Germany',
    joinDate: '2023-08-15',
    totalBookings: 12,
    totalSpent: 300,
    lastBooking: '2024-01-15',
    favoriteService: 'MomFlow Classes',
    status: 'active',
    segment: 'new-mom',
    rating: 4.9,
    notes: 'First-time mom, very engaged in classes. Prefers morning sessions.',
    preferences: ['morning-classes', 'small-groups', 'beginner-friendly'],
    bookingHistory: [
      { date: '2024-01-15', service: 'MomFlow Class', amount: 25, status: 'completed' },
      { date: '2024-01-08', service: 'MomFlow Class', amount: 25, status: 'completed' },
      { date: '2024-01-01', service: 'MomFlow Class', amount: 25, status: 'completed' }
    ]
  },
  {
    id: 2,
    name: 'Emma Wilson',
    email: 'emma@email.com',
    phone: '+49 30 87654321',
    location: 'Munich, Germany',
    joinDate: '2023-05-20',
    totalBookings: 8,
    totalSpent: 12500,
    lastBooking: '2024-01-18',
    favoriteService: 'Celebrity Choreography',
    status: 'vip',
    segment: 'professional',
    rating: 5.0,
    notes: 'Music video producer, high-value client. Requires NDAs for projects.',
    preferences: ['private-sessions', 'flexible-scheduling', 'professional-level'],
    bookingHistory: [
      { date: '2024-01-18', service: 'Celebrity Choreography', amount: 2500, status: 'completed' },
      { date: '2023-12-10', service: 'Celebrity Choreography', amount: 5000, status: 'completed' },
      { date: '2023-11-15', service: 'Celebrity Choreography', amount: 3000, status: 'completed' }
    ]
  },
  {
    id: 3,
    name: 'Michael Chen',
    email: 'michael@email.com',
    phone: '+49 30 11223344',
    location: 'Hamburg, Germany',
    joinDate: '2023-11-10',
    totalBookings: 6,
    totalSpent: 180,
    lastBooking: '2024-01-16',
    favoriteService: 'Afro Fusion',
    status: 'active',
    segment: 'dance-enthusiast',
    rating: 4.7,
    notes: 'Regular attendee, very enthusiastic about African dance culture.',
    preferences: ['evening-classes', 'cultural-focus', 'intermediate-level'],
    bookingHistory: [
      { date: '2024-01-16', service: 'Afro Fusion', amount: 30, status: 'completed' },
      { date: '2024-01-09', service: 'Afro Fusion', amount: 30, status: 'completed' },
      { date: '2024-01-02', service: 'Afro Fusion', amount: 30, status: 'completed' }
    ]
  },
  {
    id: 4,
    name: 'Anna Schmidt',
    email: 'anna@email.com',
    phone: '+49 30 55667788',
    location: 'Berlin, Germany',
    joinDate: '2023-09-05',
    totalBookings: 4,
    totalSpent: 5000,
    lastBooking: '2024-01-12',
    favoriteService: 'Celebrity Choreography',
    status: 'active',
    segment: 'professional',
    rating: 4.8,
    notes: 'Works with major German artists, potential for recurring projects.',
    preferences: ['project-based', 'high-budget', 'professional-level'],
    bookingHistory: [
      { date: '2024-01-12', service: 'Celebrity Choreography', amount: 2000, status: 'completed' },
      { date: '2023-12-20', service: 'Celebrity Choreography', amount: 1500, status: 'completed' }
    ]
  },
  {
    id: 5,
    name: 'David Brown',
    email: 'david@email.com',
    phone: '+49 30 99887766',
    location: 'Frankfurt, Germany',
    joinDate: '2023-12-01',
    totalBookings: 5,
    totalSpent: 750,
    lastBooking: '2024-01-20',
    favoriteService: 'Stunt Training',
    status: 'active',
    segment: 'fitness-seeker',
    rating: 4.6,
    notes: 'Interested in stunt work for fitness. Safety-conscious approach.',
    preferences: ['safety-focused', 'beginner-level', 'weekend-sessions'],
    bookingHistory: [
      { date: '2024-01-20', service: 'Stunt Training', amount: 150, status: 'pending' },
      { date: '2024-01-13', service: 'Stunt Training', amount: 150, status: 'completed' }
    ]
  }
]

const segments = [
  { value: 'all', label: 'All Segments', color: 'bg-gray-100 text-gray-800' },
  { value: 'new-mom', label: 'New Mothers', color: 'bg-pink-100 text-pink-800' },
  { value: 'professional', label: 'Professionals', color: 'bg-purple-100 text-purple-800' },
  { value: 'dance-enthusiast', label: 'Dance Enthusiasts', color: 'bg-green-100 text-green-800' },
  { value: 'fitness-seeker', label: 'Fitness Seekers', color: 'bg-blue-100 text-blue-800' },
]

const statuses = [
  { value: 'all', label: 'All Status' },
  { value: 'active', label: 'Active' },
  { value: 'vip', label: 'VIP' },
  { value: 'inactive', label: 'Inactive' },
]

export default function CustomersPage() {
  const [customers, setCustomers] = useState(mockCustomers)
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null)
  const [filterSegment, setFilterSegment] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCustomers = customers.filter(customer => {
    const matchesSegment = filterSegment === 'all' || customer.segment === filterSegment
    const matchesStatus = filterStatus === 'all' || customer.status === filterStatus
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.favoriteService.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSegment && matchesStatus && matchesSearch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'vip': return 'bg-amber-100 text-amber-800'
      case 'active': return 'bg-green-100 text-green-800'
      case 'inactive': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getSegmentInfo = (segment: string) => {
    return segments.find(seg => seg.value === segment) || segments[0]
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
  }

  const getCustomerValue = (customer: any) => {
    if (customer.totalSpent > 5000) return 'high'
    if (customer.totalSpent > 1000) return 'medium'
    return 'low'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Customer Management</h1>
          <p className="text-gray-600 mt-2">Manage customer relationships and track engagement</p>
        </div>
        <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
          Add Customer
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Customers</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{customers.length}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Users size={24} className="text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">VIP Customers</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{customers.filter(c => c.status === 'vip').length}</p>
            </div>
            <div className="p-3 bg-amber-100 rounded-full">
              <Award size={24} className="text-amber-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Customer Value</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                €{Math.round(customers.reduce((sum, c) => sum + c.totalSpent, 0) / customers.length)}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <TrendingUp size={24} className="text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Rating</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {(customers.reduce((sum, c) => sum + c.rating, 0) / customers.length).toFixed(1)}
              </p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <Star size={24} className="text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search customers by name, email, or service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-400" />
              <select
                value={filterSegment}
                onChange={(e) => setFilterSegment(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {segments.map(segment => (
                  <option key={segment.value} value={segment.value}>{segment.label}</option>
                ))}
              </select>
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {statuses.map(status => (
                <option key={status.value} value={status.value}>{status.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Customer</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Segment</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Bookings</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Total Spent</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Last Booking</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Rating</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Status</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredCustomers.map((customer) => {
                const segmentInfo = getSegmentInfo(customer.segment)
                const customerValue = getCustomerValue(customer)
                
                return (
                  <tr key={customer.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">{customer.name.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{customer.name}</p>
                          <p className="text-sm text-gray-600">{customer.email}</p>
                          <div className="flex items-center space-x-1 text-xs text-gray-500 mt-1">
                            <MapPin size={12} />
                            <span>{customer.location}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${segmentInfo.color}`}>
                        {segmentInfo.label}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-900">{customer.totalBookings}</p>
                        <p className="text-sm text-gray-600">{customer.favoriteService}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className={`font-semibold ${
                          customerValue === 'high' ? 'text-green-600' :
                          customerValue === 'medium' ? 'text-amber-600' : 'text-gray-600'
                        }`}>
                          €{customer.totalSpent.toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-500">
                          {customerValue === 'high' ? 'High Value' :
                           customerValue === 'medium' ? 'Medium Value' : 'Standard'}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-gray-900">{formatDate(customer.lastBooking)}</p>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-1">
                        <Star size={14} className="text-amber-500 fill-current" />
                        <span className="font-medium text-gray-900">{customer.rating}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(customer.status)}`}>
                        {customer.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setSelectedCustomer(customer)}
                          className="p-2 text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit Customer"
                        >
                          <Edit size={16} />
                        </button>
                        <a
                          href={`mailto:${customer.email}`}
                          className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Send Email"
                        >
                          <Mail size={16} />
                        </a>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Detail Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{selectedCustomer.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedCustomer.name}</h2>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                      <span>{selectedCustomer.email}</span>
                      <span>•</span>
                      <span>{selectedCustomer.phone}</span>
                      <span>•</span>
                      <span>Customer since {formatDate(selectedCustomer.joinDate)}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCustomer(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Customer Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-blue-600">{selectedCustomer.totalBookings}</p>
                  <p className="text-sm text-blue-700">Total Bookings</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-green-600">€{selectedCustomer.totalSpent.toLocaleString()}</p>
                  <p className="text-sm text-green-700">Total Spent</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <Star size={20} className="text-amber-500 fill-current" />
                    <p className="text-2xl font-bold text-amber-600">{selectedCustomer.rating}</p>
                  </div>
                  <p className="text-sm text-amber-700">Average Rating</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <p className="text-lg font-bold text-purple-600 capitalize">{selectedCustomer.status}</p>
                  <p className="text-sm text-purple-700">Status</p>
                </div>
              </div>

              {/* Customer Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Customer Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin size={16} className="text-gray-500" />
                      <span className="text-gray-700">{selectedCustomer.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart size={16} className="text-gray-500" />
                      <span className="text-gray-700">Favorite: {selectedCustomer.favoriteService}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock size={16} className="text-gray-500" />
                      <span className="text-gray-700">Last booking: {formatDate(selectedCustomer.lastBooking)}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Preferences</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCustomer.preferences.map((pref: string, index: number) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full">
                        {pref.replace('-', ' ')}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Notes</h3>
                <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{selectedCustomer.notes}</p>
              </div>

              {/* Booking History */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Recent Booking History</h3>
                <div className="space-y-3">
                  {selectedCustomer.bookingHistory.map((booking: any, index: number) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{booking.service}</p>
                        <p className="text-sm text-gray-600">{formatDate(booking.date)}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">€{booking.amount}</p>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          booking.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                <button
                  onClick={() => setSelectedCustomer(null)}
                  className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Close
                </button>
                <a
                  href={`mailto:${selectedCustomer.email}`}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Mail size={16} />
                  <span>Send Email</span>
                </a>
                <button className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                  <Edit size={16} />
                  <span>Edit Customer</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
