'use client'

import Link from 'next/link'
import { ArrowRight, Users, Star, Clock, MapPin } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      id: 'choreography',
      title: 'Professional Choreography',
      description: 'Elite choreography for celebrities, music videos, and commercial projects',
      price: 'From €2,500',
      duration: 'Project-based',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Celebrity collaborations', 'Music video choreography', 'Live performance direction', 'Custom movement creation'],
      category: 'choreography',
      featured: true
    },
    {
      id: 'stunts',
      title: 'Hollywood Stunt Work',
      description: 'Professional stunt coordination and performance for film productions',
      price: 'Contact for quote',
      duration: 'Production schedule',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Fight choreography', 'Wire work', 'Vehicle stunts', 'Safety coordination'],
      category: 'stunts',
      featured: true
    },
    {
      id: 'momflow',
      title: 'MomFlow Classes',
      description: 'Dance classes for mothers with babies (3-24 months)',
      price: '€20-28',
      duration: '60 minutes',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Mother-baby bonding', 'Postnatal fitness', 'Community support', 'Baby-safe environment'],
      category: 'momflow',
      featured: false
    },
    {
      id: 'afro-fusion',
      title: 'Afro Fusion Classes',
      description: 'Dynamic classes combining African dance with contemporary styles',
      price: '€25-35',
      duration: '90 minutes',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Traditional techniques', 'Contemporary fusion', 'Cultural education', 'Live drumming sessions'],
      category: 'afro_fusion',
      featured: false
    },
    {
      id: 'workshops',
      title: 'Ü30 Workshops',
      description: 'Special dance workshops designed for adults 30+',
      price: '€30-40',
      duration: '75 minutes',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Age-appropriate movements', 'Confidence building', 'Social connection', 'Various dance styles'],
      category: 'workshops',
      featured: false
    },
    {
      id: 'one1vibe',
      title: 'One1Vibe Studio',
      description: 'Premium studio classes and private sessions in Berlin',
      price: '€45-65',
      duration: '60-120 minutes',
      image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Professional training', 'Performance preparation', 'Industry insights', 'Networking opportunities'],
      category: 'one1vibe',
      featured: false
    }
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      choreography: 'border-yellow-500 bg-yellow-50',
      stunts: 'border-red-600 bg-red-50',
      one1vibe: 'border-purple-600 bg-purple-50',
      momflow: 'border-pink-500 bg-pink-50',
      afro_fusion: 'border-green-600 bg-green-50',
      workshops: 'border-blue-600 bg-blue-50'
    }
    return colors[category as keyof typeof colors] || 'border-gray-500 bg-gray-50'
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-mobile">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
            <Star size={16} />
            <span className="font-medium">Multi-Service Platform</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From celebrity choreography to community classes, discover how we can bring 
            movement and culture to your project or personal journey.
          </p>
        </div>

        {/* Featured Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Services</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.filter(service => service.featured).map((service) => (
              <div key={service.id} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${getCategoryColor(service.category)} text-gray-800`}>
                    {service.category.replace('_', ' ').toUpperCase()}
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{service.title}</h4>
                  <p className="text-gray-200 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{service.duration}</span>
                      </span>
                      <span className="font-semibold text-amber-400">{service.price}</span>
                    </div>
                    <Link 
                      href={`/services/${service.id}`}
                      className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Services Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">All Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                </div>
                <div className="p-6">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 border-l-4 ${getCategoryColor(service.category)}`}>
                    {service.category.replace('_', ' ').toUpperCase()}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center space-x-1 text-gray-500">
                        <Clock size={14} />
                        <span>{service.duration}</span>
                      </span>
                      <span className="font-semibold text-lg text-amber-600">{service.price}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href={`/services/${service.id}`}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <span>Book Now</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Not Sure Which Service Is Right for You?</h3>
          <p className="text-xl mb-8 text-amber-100">
            Book a free consultation call to discuss your needs and find the perfect fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-consultation"
              className="inline-flex items-center space-x-2 bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Users size={20} />
              <span>Free Consultation</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300"
            >
              <MapPin size={20} />
              <span>Visit Studio</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
