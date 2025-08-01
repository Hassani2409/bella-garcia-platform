'use client'

import { useState } from 'react'
import { 
  MessageSquare, 
  Search, 
  Filter, 
  Eye, 
  Reply, 
  Archive, 
  Star,
  Clock,
  CheckCircle,
  Mail,
  Phone,
  Calendar
} from 'lucide-react'

// Mock messages data
const mockMessages = [
  {
    id: 1,
    name: 'Lisa Anderson',
    email: 'lisa@email.com',
    phone: '+49 30 12345678',
    subject: 'Inquiry about private MomFlow sessions',
    message: 'Hi Bella, I just had my first baby and I\'m interested in your MomFlow classes. Could we schedule a private session first? I\'m a bit nervous about group classes.',
    serviceInterest: 'momflow',
    isRead: false,
    isStarred: true,
    priority: 'high',
    created: '2024-01-15T10:30:00Z',
    repliedAt: null,
    tags: ['new-mom', 'private-session', 'nervous']
  },
  {
    id: 2,
    name: 'Tom Rodriguez',
    email: 'tom@email.com',
    phone: '+49 30 87654321',
    subject: 'Booking confirmation needed for stunt training',
    message: 'Hello, I submitted a booking request for stunt training last week but haven\'t received confirmation yet. Could you please check the status?',
    serviceInterest: 'stunts',
    isRead: true,
    isStarred: false,
    priority: 'medium',
    created: '2024-01-14T14:20:00Z',
    repliedAt: '2024-01-14T16:45:00Z',
    tags: ['booking-confirmation', 'follow-up']
  },
  {
    id: 3,
    name: 'Anna Schmidt',
    email: 'anna@email.com',
    phone: '+49 30 11223344',
    subject: 'Celebrity choreography project inquiry',
    message: 'Dear Bella, we\'re producing a music video for a major German artist and would love to discuss choreography collaboration. This is a high-budget project with tight deadlines. Please let me know your availability.',
    serviceInterest: 'choreography',
    isRead: false,
    isStarred: true,
    priority: 'high',
    created: '2024-01-13T09:15:00Z',
    repliedAt: null,
    tags: ['celebrity', 'music-video', 'high-budget', 'urgent']
  },
  {
    id: 4,
    name: 'Marcus Weber',
    email: 'marcus@email.com',
    phone: '+49 30 55667788',
    subject: 'Afro Fusion class schedule question',
    message: 'Hi, I\'m interested in joining your Afro Fusion classes. What\'s the current schedule and do I need to book in advance?',
    serviceInterest: 'afro_fusion',
    isRead: true,
    isStarred: false,
    priority: 'low',
    created: '2024-01-12T16:45:00Z',
    repliedAt: null,
    tags: ['schedule-inquiry', 'new-student']
  },
]

export default function MessagesPage() {
  const [messages, setMessages] = useState(mockMessages)
  const [selectedMessage, setSelectedMessage] = useState<any>(null)
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterPriority, setFilterPriority] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [replyText, setReplyText] = useState('')

  const filteredMessages = messages.filter(message => {
    const matchesStatus = filterStatus === 'all' || 
      (filterStatus === 'unread' && !message.isRead) ||
      (filterStatus === 'read' && message.isRead) ||
      (filterStatus === 'starred' && message.isStarred) ||
      (filterStatus === 'replied' && message.repliedAt)
    
    const matchesPriority = filterPriority === 'all' || message.priority === filterPriority
    
    const matchesSearch = message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.serviceInterest.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesStatus && matchesPriority && matchesSearch
  })

  const markAsRead = (messageId: number) => {
    setMessages(messages.map(msg => 
      msg.id === messageId ? { ...msg, isRead: true } : msg
    ))
  }

  const toggleStar = (messageId: number) => {
    setMessages(messages.map(msg => 
      msg.id === messageId ? { ...msg, isStarred: !msg.isStarred } : msg
    ))
  }

  const sendReply = (messageId: number) => {
    setMessages(messages.map(msg => 
      msg.id === messageId ? { ...msg, repliedAt: new Date().toISOString() } : msg
    ))
    setReplyText('')
    setSelectedMessage(null)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-amber-100 text-amber-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getServiceColor = (service: string) => {
    switch (service) {
      case 'choreography': return 'bg-purple-100 text-purple-800'
      case 'stunts': return 'bg-red-100 text-red-800'
      case 'momflow': return 'bg-pink-100 text-pink-800'
      case 'afro_fusion': return 'bg-green-100 text-green-800'
      case 'workshops': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    
    if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h ago`
    } else {
      return date.toLocaleDateString()
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Messages & Inquiries</h1>
          <p className="text-gray-600 mt-2">Manage customer inquiries and communications</p>
        </div>
        <div className="flex items-center space-x-3">
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
            {messages.filter(m => !m.isRead).length} unread
          </span>
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
                placeholder="Search messages by name, subject, or service..."
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
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="all">All Messages</option>
                <option value="unread">Unread</option>
                <option value="read">Read</option>
                <option value="starred">Starred</option>
                <option value="replied">Replied</option>
              </select>
            </div>

            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="all">All Priority</option>
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>
          </div>
        </div>
      </div>

      {/* Messages List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="divide-y divide-gray-200">
          {filteredMessages.map((message) => (
            <div
              key={message.id}
              className={`p-6 hover:bg-gray-50 cursor-pointer ${!message.isRead ? 'bg-amber-50' : ''}`}
              onClick={() => {
                setSelectedMessage(message)
                if (!message.isRead) markAsRead(message.id)
              }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className={`font-semibold ${!message.isRead ? 'text-gray-900' : 'text-gray-700'}`}>
                      {message.name}
                    </h3>
                    {!message.isRead && (
                      <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    )}
                    {message.isStarred && (
                      <Star size={16} className="text-amber-500 fill-current" />
                    )}
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(message.priority)}`}>
                      {message.priority}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getServiceColor(message.serviceInterest)}`}>
                      {message.serviceInterest}
                    </span>
                  </div>
                  
                  <p className={`text-lg mb-2 ${!message.isRead ? 'font-medium text-gray-900' : 'text-gray-700'}`}>
                    {message.subject}
                  </p>
                  
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {message.message}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock size={12} />
                      <span>{formatDate(message.created)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Mail size={12} />
                      <span>{message.email}</span>
                    </div>
                    {message.phone && (
                      <div className="flex items-center space-x-1">
                        <Phone size={12} />
                        <span>{message.phone}</span>
                      </div>
                    )}
                    {message.repliedAt && (
                      <div className="flex items-center space-x-1 text-green-600">
                        <CheckCircle size={12} />
                        <span>Replied</span>
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  {message.tags && message.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {message.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleStar(message.id)
                    }}
                    className={`p-2 rounded-lg transition-colors ${
                      message.isStarred 
                        ? 'text-amber-500 hover:bg-amber-50' 
                        : 'text-gray-400 hover:text-amber-500 hover:bg-amber-50'
                    }`}
                  >
                    <Star size={16} className={message.isStarred ? 'fill-current' : ''} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedMessage(message)
                    }}
                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Eye size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Detail Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedMessage.subject}</h2>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                    <span>From: {selectedMessage.name}</span>
                    <span>•</span>
                    <span>{formatDate(selectedMessage.created)}</span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(selectedMessage.priority)}`}>
                      {selectedMessage.priority} priority
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Contact Info */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Mail size={16} className="text-gray-500" />
                    <span className="text-sm">{selectedMessage.email}</span>
                  </div>
                  {selectedMessage.phone && (
                    <div className="flex items-center space-x-2">
                      <Phone size={16} className="text-gray-500" />
                      <span className="text-sm">{selectedMessage.phone}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getServiceColor(selectedMessage.serviceInterest)}`}>
                      {selectedMessage.serviceInterest}
                    </span>
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Message</h3>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700 whitespace-pre-wrap">{selectedMessage.message}</p>
                </div>
              </div>

              {/* Reply Section */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Reply</h3>
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type your reply here..."
                  rows={6}
                  className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => toggleStar(selectedMessage.id)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                        selectedMessage.isStarred 
                          ? 'bg-amber-100 text-amber-700' 
                          : 'bg-gray-100 text-gray-600 hover:bg-amber-100 hover:text-amber-700'
                      }`}
                    >
                      <Star size={16} className={selectedMessage.isStarred ? 'fill-current' : ''} />
                      <span>{selectedMessage.isStarred ? 'Starred' : 'Star'}</span>
                    </button>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setSelectedMessage(null)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => sendReply(selectedMessage.id)}
                      disabled={!replyText.trim()}
                      className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Reply size={16} />
                      <span>Send Reply</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
