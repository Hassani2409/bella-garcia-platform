'use client'

import { useState } from 'react'
import { 
  Plus, 
  Edit, 
  Eye, 
  ToggleLeft, 
  ToggleRight, 
  Search, 
  Filter,
  Star,
  Clock,
  Users,
  MapPin,
  DollarSign,
  Save,
  X
} from 'lucide-react'

// Mock services data
const mockServices = [
  {
    id: 1,
    name: 'Celebrity Choreography',
    slug: 'celebrity-choreography',
    category: 'choreography',
    shortDescription: 'Elite choreography for professional projects and celebrity collaborations.',
    description: 'Professional choreography services for music videos, live performances, and tours. Experience working with top artists like Culcha Candela, Seeed, and Lena Meyer-Landrut.',
    priceFrom: 2500,
    priceTo: 15000,
    duration: null,
    maxParticipants: null,
    skillLevel: 'advanced',
    location: 'Berlin & International',
    features: ['Custom choreography creation', 'Artist coaching', 'Performance direction', 'Music video choreography'],
    isActive: true,
    imageUrl: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0',
    bookingsCount: 12,
    revenue: 45000
  },
  {
    id: 2,
    name: 'MomFlow Classes',
    slug: 'momflow',
    category: 'momflow',
    shortDescription: 'Dance classes for mothers with babies - strengthen bonds through movement.',
    description: 'Special dance classes for mothers with their babies (3-24 months). Strengthen your bond while getting back into movement in a supportive environment.',
    priceFrom: 20,
    priceTo: 28,
    duration: 60,
    maxParticipants: 12,
    skillLevel: 'beginner',
    location: 'One1Vibe Studio Berlin',
    features: ['Mother-baby bonding', 'Postnatal fitness', 'Community support', 'Baby-safe environment'],
    isActive: true,
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
    bookingsCount: 89,
    revenue: 2140
  },
  {
    id: 3,
    name: 'Afro Fusion Classes',
    slug: 'afro-fusion',
    category: 'afro_fusion',
    shortDescription: 'Energetic Afro Fusion dance classes celebrating African culture.',
    description: 'Dynamic Afro Fusion dance classes combining traditional African dance with contemporary styles. Perfect for all levels looking to connect with rhythm and culture.',
    priceFrom: 25,
    priceTo: 35,
    duration: 90,
    maxParticipants: 20,
    skillLevel: 'all',
    location: 'One1Vibe Studio Berlin',
    features: ['Traditional African techniques', 'Contemporary fusion', 'Cultural education', 'Live drumming sessions'],
    isActive: true,
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    bookingsCount: 156,
    revenue: 4680
  },
  {
    id: 4,
    name: 'Stunt Training',
    slug: 'stunt-training',
    category: 'stunts',
    shortDescription: 'Learn professional stunt techniques from a Hollywood veteran.',
    description: 'Professional stunt training for aspiring performers. Learn from someone with real Hollywood experience.',
    priceFrom: 150,
    priceTo: 300,
    duration: 120,
    maxParticipants: 8,
    skillLevel: 'intermediate',
    location: 'One1Vibe Studio Berlin',
    features: ['Fight choreography basics', 'Safety protocols', 'Wire work introduction', 'Fall techniques'],
    isActive: false,
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
    bookingsCount: 24,
    revenue: 4200
  },
]

const categories = [
  { value: 'choreography', label: 'Choreography', color: 'bg-purple-100 text-purple-800' },
  { value: 'stunts', label: 'Stunts', color: 'bg-red-100 text-red-800' },
  { value: 'momflow', label: 'MomFlow', color: 'bg-pink-100 text-pink-800' },
  { value: 'afro_fusion', label: 'Afro Fusion', color: 'bg-green-100 text-green-800' },
  { value: 'workshops', label: 'Workshops', color: 'bg-blue-100 text-blue-800' },
  { value: 'one1vibe', label: 'One1Vibe', color: 'bg-amber-100 text-amber-800' },
]

const skillLevels = [
  { value: 'all', label: 'All Levels' },
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
]

export default function ServicesPage() {
  const [services, setServices] = useState(mockServices)
  const [selectedService, setSelectedService] = useState<any>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState<any>({})
  const [filterCategory, setFilterCategory] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredServices = services.filter(service => {
    const matchesCategory = filterCategory === 'all' || service.category === filterCategory
    const matchesStatus = filterStatus === 'all' || 
      (filterStatus === 'active' && service.isActive) ||
      (filterStatus === 'inactive' && !service.isActive)
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesStatus && matchesSearch
  })

  const toggleServiceStatus = (serviceId: number) => {
    setServices(services.map(service => 
      service.id === serviceId ? { ...service, isActive: !service.isActive } : service
    ))
  }

  const getCategoryInfo = (category: string) => {
    return categories.find(cat => cat.value === category) || categories[0]
  }

  const startEdit = (service: any) => {
    setEditForm({ ...service })
    setIsEditing(true)
    setSelectedService(service)
  }

  const saveService = () => {
    setServices(services.map(service => 
      service.id === editForm.id ? editForm : service
    ))
    setIsEditing(false)
    setSelectedService(null)
    setEditForm({})
  }

  const cancelEdit = () => {
    setIsEditing(false)
    setSelectedService(null)
    setEditForm({})
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Services Management</h1>
          <p className="text-gray-600 mt-2">Manage your service offerings, pricing, and availability</p>
        </div>
        <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
          <Plus size={20} />
          <span>Add New Service</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Services</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{services.length}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Star size={24} className="text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Services</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{services.filter(s => s.isActive).length}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <ToggleRight size={24} className="text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Bookings</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{services.reduce((sum, s) => sum + s.bookingsCount, 0)}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <Users size={24} className="text-purple-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">€{services.reduce((sum, s) => sum + s.revenue, 0).toLocaleString()}</p>
            </div>
            <div className="p-3 bg-amber-100 rounded-full">
              <DollarSign size={24} className="text-amber-600" />
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
                placeholder="Search services by name or description..."
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
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category.value} value={category.value}>{category.label}</option>
                ))}
              </select>
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredServices.map((service) => {
          const categoryInfo = getCategoryInfo(service.category)
          return (
            <div key={service.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              {/* Service Image */}
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src={service.imageUrl} 
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${categoryInfo.color}`}>
                    {categoryInfo.label}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => toggleServiceStatus(service.id)}
                    className={`p-2 rounded-full ${service.isActive ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}
                  >
                    {service.isActive ? <ToggleRight size={20} /> : <ToggleLeft size={20} />}
                  </button>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                  <div className="text-right">
                    <p className="text-lg font-bold text-amber-600">
                      €{service.priceFrom}{service.priceTo && service.priceTo !== service.priceFrom ? `-${service.priceTo}` : ''}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.shortDescription}</p>

                {/* Service Details */}
                <div className="space-y-2 mb-4">
                  {service.duration && (
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock size={14} />
                      <span>{service.duration} minutes</span>
                    </div>
                  )}
                  {service.maxParticipants && (
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Users size={14} />
                      <span>Max {service.maxParticipants} participants</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin size={14} />
                    <span>{service.location}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center mb-4 text-sm">
                  <div className="text-gray-600">
                    <span className="font-medium">{service.bookingsCount}</span> bookings
                  </div>
                  <div className="text-gray-600">
                    <span className="font-medium">€{service.revenue.toLocaleString()}</span> revenue
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex-1 flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Eye size={16} />
                    <span>View</span>
                  </button>
                  <button
                    onClick={() => startEdit(service)}
                    className="flex-1 flex items-center justify-center space-x-2 bg-amber-100 text-amber-700 py-2 px-4 rounded-lg hover:bg-amber-200 transition-colors"
                  >
                    <Edit size={16} />
                    <span>Edit</span>
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Service Detail/Edit Modal */}
      {(selectedService || isEditing) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  {isEditing ? 'Edit Service' : 'Service Details'}
                </h2>
                <button
                  onClick={cancelEdit}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {isEditing ? (
                <div className="space-y-6">
                  {/* Edit Form */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Name</label>
                      <input
                        type="text"
                        value={editForm.name || ''}
                        onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                      <select
                        value={editForm.category || ''}
                        onChange={(e) => setEditForm({...editForm, category: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        {categories.map(category => (
                          <option key={category.value} value={category.value}>{category.label}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Price From (€)</label>
                      <input
                        type="number"
                        value={editForm.priceFrom || ''}
                        onChange={(e) => setEditForm({...editForm, priceFrom: parseInt(e.target.value)})}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Price To (€)</label>
                      <input
                        type="number"
                        value={editForm.priceTo || ''}
                        onChange={(e) => setEditForm({...editForm, priceTo: parseInt(e.target.value)})}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Duration (minutes)</label>
                      <input
                        type="number"
                        value={editForm.duration || ''}
                        onChange={(e) => setEditForm({...editForm, duration: parseInt(e.target.value)})}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Max Participants</label>
                      <input
                        type="number"
                        value={editForm.maxParticipants || ''}
                        onChange={(e) => setEditForm({...editForm, maxParticipants: parseInt(e.target.value)})}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Short Description</label>
                    <input
                      type="text"
                      value={editForm.shortDescription || ''}
                      onChange={(e) => setEditForm({...editForm, shortDescription: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Description</label>
                    <textarea
                      value={editForm.description || ''}
                      onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                      rows={4}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={cancelEdit}
                      className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={saveService}
                      className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <Save size={16} />
                      <span>Save Changes</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* View Mode */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <img 
                        src={selectedService.imageUrl} 
                        alt={selectedService.name}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Pricing</h3>
                        <p className="text-2xl font-bold text-amber-600">
                          €{selectedService.priceFrom}{selectedService.priceTo && selectedService.priceTo !== selectedService.priceFrom ? `-${selectedService.priceTo}` : ''}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {selectedService.duration && (
                          <div>
                            <h4 className="font-medium text-gray-900">Duration</h4>
                            <p className="text-gray-600">{selectedService.duration} minutes</p>
                          </div>
                        )}
                        {selectedService.maxParticipants && (
                          <div>
                            <h4 className="font-medium text-gray-900">Max Participants</h4>
                            <p className="text-gray-600">{selectedService.maxParticipants}</p>
                          </div>
                        )}
                        <div>
                          <h4 className="font-medium text-gray-900">Skill Level</h4>
                          <p className="text-gray-600 capitalize">{selectedService.skillLevel}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Status</h4>
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            selectedService.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {selectedService.isActive ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900">Location</h4>
                        <p className="text-gray-600">{selectedService.location}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                    <p className="text-gray-700">{selectedService.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedService.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 rounded-lg p-4">
                    <div>
                      <h4 className="font-medium text-gray-900">Total Bookings</h4>
                      <p className="text-2xl font-bold text-blue-600">{selectedService.bookingsCount}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Total Revenue</h4>
                      <p className="text-2xl font-bold text-green-600">€{selectedService.revenue.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => startEdit(selectedService)}
                      className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <Edit size={16} />
                      <span>Edit Service</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
