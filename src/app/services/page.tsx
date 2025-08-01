import Link from 'next/link'
import { ArrowRight, Star, Clock, Users, MapPin, Phone, Mail } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Services - Bella Garcia',
  description: 'Explore Bella Garcia\'s comprehensive range of professional services: celebrity choreography, Hollywood stunt work, MomFlow classes, Afro Fusion, workshops, and One1Vibe Studio training.',
}

const services = [
  {
    id: 'choreography',
    title: 'Professional Choreography',
    category: 'Celebrity Level',
    price: 'From €2,500',
    duration: 'Project-based',
    description: 'Elite choreography services for music videos, live performances, and commercial projects. Experience working with top artists like Culcha Candela, Seeed, and Lena Meyer-Landrut.',
    features: [
      'Celebrity collaborations',
      'Music video choreography',
      'Live performance direction',
      'Custom movement creation',
      'Artist coaching',
      'Performance optimization'
    ],
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    testimonials: [
      { name: 'Music Industry Professional', text: 'Bella brings incredible creativity and professionalism to every project.' }
    ]
  },
  {
    id: 'stunts',
    title: 'Hollywood Stunt Work',
    category: 'Film Industry',
    price: 'Contact for quote',
    duration: 'Production schedule',
    description: 'Professional stunt coordination and performance for major film productions. Credits include Matrix Resurrections, Gunpowder Milkshake, and Hunger Games.',
    features: [
      'Fight choreography',
      'Wire work',
      'Vehicle stunts',
      'Safety coordination',
      'Stunt double work',
      'Action sequence planning'
    ],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    testimonials: [
      { name: 'Film Director', text: 'Safety and precision - exactly what you need in professional stunt work.' }
    ]
  },
  {
    id: 'momflow',
    title: 'MomFlow Classes',
    category: 'Mother & Baby',
    price: '€20-28 per session',
    duration: '60 minutes',
    description: 'Special dance classes for mothers with their babies (3-24 months). Strengthen your bond while getting back into movement in a supportive environment.',
    features: [
      'Mother-baby bonding',
      'Postnatal fitness',
      'Community support',
      'Baby-safe environment',
      'Flexible participation',
      'Professional guidance'
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    testimonials: [
      { name: 'Sarah M.', text: 'MomFlow helped me reconnect with my body and bond with my baby.' }
    ]
  },
  {
    id: 'afro-fusion',
    title: 'Afro Fusion Classes',
    category: 'Cultural Dance',
    price: '€25-35 per session',
    duration: '90 minutes',
    description: 'Dynamic classes combining traditional African dance with contemporary styles. Perfect for all levels looking to connect with rhythm and culture.',
    features: [
      'Traditional African techniques',
      'Contemporary fusion',
      'Cultural education',
      'Live drumming sessions',
      'Community building',
      'All skill levels welcome'
    ],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    testimonials: [
      { name: 'Marcus K.', text: 'These classes are energizing and culturally enriching!' }
    ]
  },
  {
    id: 'workshops',
    title: 'Ü30 Workshops',
    category: 'Adult Education',
    price: '€30-40 per session',
    duration: '75 minutes',
    description: 'Special dance workshops designed for adults 30+. A welcoming space to explore movement, build confidence, and have fun regardless of experience level.',
    features: [
      'Age-appropriate movements',
      'Confidence building',
      'Social connection',
      'Various dance styles',
      'Supportive environment',
      'No experience required'
    ],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    testimonials: [
      { name: 'Andrea L.', text: 'Finally found a dance class where I feel comfortable and supported!' }
    ]
  },
  {
    id: 'one1vibe',
    title: 'One1Vibe Studio',
    category: 'Professional Training',
    price: '€45-65 per session',
    duration: '60-120 minutes',
    description: 'Premium studio classes and private sessions in Berlin. Professional-level training with industry insights and networking opportunities.',
    features: [
      'Professional techniques',
      'Performance preparation',
      'Industry insights',
      'Networking opportunities',
      'State-of-the-art facilities',
      'Personalized coaching'
    ],
    image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    testimonials: [
      { name: 'Alex R.', text: 'The professional training here is unmatched in Berlin.' }
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-20">
        <div className="container-mobile">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star size={16} />
              <span className="font-medium">Professional Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Multi-Service Excellence
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 mb-8">
              From celebrity choreography to community classes - discover the full range of professional services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="inline-flex items-center space-x-2 bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Phone size={20} />
                <span>Free Consultation</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300"
              >
                <Mail size={20} />
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-mobile">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      {service.category}
                    </span>
                    <span className="text-2xl font-bold text-amber-600">{service.price}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>Berlin Studio</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">What's Included:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {service.testimonials && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <blockquote className="text-sm italic text-gray-600 mb-2">
                        "{service.testimonials[0].text}"
                      </blockquote>
                      <cite className="text-xs font-semibold text-gray-500">
                        - {service.testimonials[0].name}
                      </cite>
                    </div>
                  )}

                  <div className="flex space-x-3">
                    <Link
                      href={`/services/${service.id}`}
                      className="flex-1 inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      href={`/book?service=${service.id}`}
                      className="inline-flex items-center justify-center space-x-2 border-2 border-amber-500 text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300"
                    >
                      <Users size={16} />
                      <span>Book</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-mobile">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How do I choose the right service for me?",
                answer: "Book a free consultation call where we'll discuss your goals, experience level, and interests to find the perfect fit for your needs."
              },
              {
                question: "Do you offer private sessions?",
                answer: "Yes! We offer private sessions for most services. Private sessions provide personalized attention and can be scheduled to fit your timeline."
              },
              {
                question: "What should I bring to my first class?",
                answer: "Comfortable clothing you can move in, water bottle, and an open mind! We provide any specialized equipment needed."
              },
              {
                question: "Are your classes suitable for beginners?",
                answer: "Absolutely! Most of our classes welcome all levels, and we have specific beginner-friendly options like MomFlow and Ü30 workshops."
              },
              {
                question: "How far in advance should I book?",
                answer: "For regular classes, you can often book the same week. For professional choreography or stunt work, we recommend booking 2-4 weeks in advance."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container-mobile text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking for professional choreography or want to join our community classes, 
            we're here to help you achieve your movement goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-consultation"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Phone size={20} />
              <span>Free Consultation</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 border-2 border-gray-300 text-gray-300 px-8 py-4 rounded-full font-semibold hover:bg-gray-300 hover:text-gray-900 transition-all duration-300"
            >
              <MapPin size={20} />
              <span>Visit Studio</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
