import { Calendar, Clock, Users, Euro, Check, Star, Shield, Video, Music, Zap, Heart } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Services - Bella Garcia',
  description: 'Book professional choreography, stunt work, workshop sessions, and personal training with Bella Garcia. Flexible packages and pricing for all your movement needs.',
}

const services = [
  {
    id: 'choreography',
    name: 'Choreography Services',
    icon: Music,
    description: 'Professional choreography for music videos, live performances, and artistic projects',
    basePrice: 500,
    unit: 'per project',
    duration: '2-8 hours',
    includes: [
      'Concept development',
      'Custom choreography creation',
      'Dancer training (if needed)',
      'Performance direction',
      'Video documentation'
    ],
    popular: true,
    packages: [
      {
        name: 'Basic Choreography',
        price: 500,
        duration: '2-3 hours',
        description: 'Simple routine for small projects',
        features: ['1 routine', 'Basic training', 'Performance notes']
      },
      {
        name: 'Professional Package',
        price: 1200,
        duration: '4-6 hours',
        description: 'Complete choreography with training',
        features: ['Multiple routines', 'Dancer training', 'Video documentation', 'Performance direction']
      },
      {
        name: 'Premium Production',
        price: 2500,
        duration: '1-2 days',
        description: 'Full-scale production choreography',
        features: ['Complete concept', 'Multiple routines', 'Cast training', 'On-set direction', 'Post-production support']
      }
    ]
  },
  {
    id: 'stunts',
    name: 'Stunt & Action Work',
    icon: Zap,
    description: 'Professional stunt performance and action coordination for film and TV',
    basePrice: 800,
    unit: 'per day',
    duration: '8-12 hours',
    includes: [
      'Stunt performance',
      'Safety coordination',
      'Action sequence planning',
      'Equipment provision',
      'Insurance coverage'
    ],
    popular: false,
    packages: [
      {
        name: 'Stunt Performance',
        price: 800,
        duration: '1 day',
        description: 'Professional stunt performer',
        features: ['Stunt performance', 'Safety protocols', 'Basic equipment']
      },
      {
        name: 'Stunt Coordination',
        price: 1500,
        duration: '1 day',
        description: 'Coordinate action sequences',
        features: ['Team coordination', 'Safety planning', 'Equipment management', 'Multiple performers']
      },
      {
        name: 'Full Action Direction',
        price: 3000,
        duration: '2-3 days',
        description: 'Complete action sequence direction',
        features: ['Complete planning', 'Multiple sequences', 'Team management', 'Safety oversight', 'Post-production support']
      }
    ]
  },
  {
    id: 'workshops',
    name: 'Workshop & Training',
    icon: Users,
    description: 'Group workshops and personal training sessions for all skill levels',
    basePrice: 80,
    unit: 'per person',
    duration: '2-3 hours',
    includes: [
      'Professional instruction',
      'Technique development',
      'Personalized feedback',
      'Practice materials',
      'Progress tracking'
    ],
    popular: true,
    packages: [
      {
        name: 'Group Workshop',
        price: 80,
        duration: '2 hours',
        description: 'Per person in group session',
        features: ['Group instruction', 'Basic techniques', 'Q&A session']
      },
      {
        name: 'Intensive Training',
        price: 150,
        duration: '4 hours',
        description: 'Per person intensive session',
        features: ['Extended training', 'Advanced techniques', 'Personal feedback', 'Take-home materials']
      },
      {
        name: 'Private Coaching',
        price: 300,
        duration: '2 hours',
        description: 'One-on-one private session',
        features: ['Personal attention', 'Customized curriculum', 'Video analysis', 'Progress plan']
      }
    ]
  },
  {
    id: 'personal-training',
    name: 'Personal Fitness Training',
    icon: Heart,
    description: 'Personalized fitness and movement training with MomFlow methodology',
    basePrice: 120,
    unit: 'per session',
    duration: '1 hour',
    includes: [
      'Personalized workout plans',
      'Movement assessment',
      'Nutrition guidance',
      'Progress tracking',
      'Flexible scheduling'
    ],
    popular: false,
    packages: [
      {
        name: 'Single Session',
        price: 120,
        duration: '1 hour',
        description: 'Individual training session',
        features: ['Personal training', 'Custom workout', 'Form correction']
      },
      {
        name: 'Weekly Package',
        price: 400,
        duration: '4 sessions',
        description: '4 sessions per month',
        features: ['Regular sessions', 'Progress tracking', 'Meal planning', 'WhatsApp support']
      },
      {
        name: 'Transformation Program',
        price: 1200,
        duration: '12 sessions',
        description: '3-month intensive program',
        features: ['Complete transformation', 'Nutrition coaching', 'Lifestyle guidance', 'Regular assessments', '24/7 support']
      }
    ]
  }
]

const testimonials = [
  {
    name: 'Maria Schmidt',
    service: 'Choreography',
    text: 'Bella created the most amazing choreography for our music video. Her creativity and professionalism are unmatched.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Thomas Weber',
    service: 'Film Production',
    text: 'Working with Bella on our action sequences was incredible. She brought safety and creativity together perfectly.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Sarah Johnson',
    service: 'Personal Training',
    text: 'The MomFlow sessions transformed not just my body but my entire approach to fitness and movement.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }
]

const features = [
  {
    icon: Shield,
    title: 'Professional Insurance',
    description: 'All services fully insured and safety-certified'
  },
  {
    icon: Video,
    title: 'Documentation Included',
    description: 'Video documentation and progress tracking'
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Available weekdays, evenings, and weekends'
  },
  {
    icon: Star,
    title: '10+ Years Experience',
    description: 'Proven track record with professionals'
  }
]

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container-mobile">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Calendar size={16} />
              <span className="font-medium">Professional Booking</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Book Your Session Today
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8">
              Professional choreography, stunt work, training, and workshops with flexible packages to meet your needs
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container-mobile">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container-mobile">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Choose Your Service Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional services with transparent pricing and flexible packages designed for your specific needs
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Service Header */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <service.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{service.name}</h3>
                        <p className="text-gray-300">{service.description}</p>
                      </div>
                    </div>
                    {service.popular && (
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full">
                        <span className="font-semibold">Most Popular</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="flex items-center space-x-2">
                      <Euro className="w-5 h-5 text-purple-300" />
                      <span>From €{service.basePrice} {service.unit}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-purple-300" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-purple-300" />
                      <span>Professional service</span>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-8">
                  {/* What's Included */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.includes.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Check className="w-5 h-5 text-green-600" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Packages */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-6">Available Packages:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {service.packages.map((pkg, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                          <div className="text-center mb-4">
                            <h5 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h5>
                            <div className="text-3xl font-bold text-purple-600 mb-1">€{pkg.price}</div>
                            <div className="text-gray-600 text-sm">{pkg.duration}</div>
                          </div>
                          
                          <p className="text-gray-600 text-center mb-4">{pkg.description}</p>
                          
                          <ul className="space-y-2 mb-6">
                            {pkg.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center space-x-2">
                                <Check className="w-4 h-4 text-green-600" />
                                <span className="text-gray-700 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            Book This Package
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20 bg-white">
        <div className="container-mobile">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Simple Booking Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started with just a few clicks and secure your professional service booking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Service</h3>
              <p className="text-gray-600">Select your preferred service and package from our professional offerings</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Schedule & Pay</h3>
              <p className="text-gray-600">Pick your preferred dates and secure your booking with our online payment system</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enjoy Your Session</h3>
              <p className="text-gray-600">Receive confirmation and preparation materials, then enjoy your professional service</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact?subject=Booking Inquiry"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Calendar size={20} />
              <span>Start Booking Process</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container-mobile">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from professionals who have experienced our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.service}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 italic">
                  "{testimonial.text}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container-mobile">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about booking and our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How far in advance should I book?</h3>
              <p className="text-gray-600">We recommend booking at least 2-4 weeks in advance for workshops and training, and 4-8 weeks for choreography and stunt work to ensure availability and proper preparation time.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What is your cancellation policy?</h3>
              <p className="text-gray-600">Cancellations made 48+ hours in advance receive a full refund. Cancellations within 48 hours are subject to a 50% fee. Same-day cancellations forfeit the full payment unless due to emergency circumstances.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you travel for bookings?</h3>
              <p className="text-gray-600">Yes! We provide services throughout Berlin and surrounding areas. For locations outside Berlin, travel costs may apply. International bookings are available for larger projects with advance notice.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What equipment do you provide?</h3>
              <p className="text-gray-600">All necessary equipment for training and choreography is provided. For stunt work, we bring safety equipment and specialized gear. Venues should provide adequate space and basic facilities as discussed during booking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container-mobile text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Professional Service?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have elevated their projects and personal development with our professional services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Service Booking"
              className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Calendar size={20} />
              <span>Book Now</span>
            </Link>
            <Link
              href="/contact?subject=Custom Quote"
              className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              <Users size={20} />
              <span>Custom Quote</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
