'use client'

import Link from 'next/link'
import { Instagram, Youtube, Facebook, MapPin, Phone, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Celebrity Work', href: '/celebrity-work' },
    { name: 'Film Credits', href: '/film-credits' },
    { name: 'One1Vibe Studio', href: '/studio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ]

  const services = [
    { name: 'Professional Choreography', href: '/services/choreography' },
    { name: 'Stunt Work', href: '/services/stunts' },
    { name: 'MomFlow Classes', href: '/services/momflow' },
    { name: 'Afro Fusion', href: '/services/afro-fusion' },
    { name: 'Ü30 Workshops', href: '/services/workshops' },
    { name: 'Private Sessions', href: '/services/private' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container-mobile py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">BG</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Bella Garcia</h3>
                <p className="text-gray-400 text-sm">Choreographer • Stuntwoman • CEO</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional choreographer with celebrity collaborations, Hollywood stunt experience, 
              and CEO of One1Vibe Studio Berlin. Bringing movement, culture, and community together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300">One1Vibe Studio</p>
                  <p className="text-gray-400 text-sm">Berlin, Germany</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-amber-500 flex-shrink-0" size={20} />
                <p className="text-gray-300">+49 30 123456789</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-amber-500 flex-shrink-0" size={20} />
                <p className="text-gray-300">bella@bellagarcia.com</p>
              </div>
            </div>

            {/* Newsletter signup */}
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                />
                <button className="bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 rounded-r-md hover:shadow-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-mobile py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Bella Garcia. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} fill="currentColor" />
              <span>in Berlin</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/impressum" className="text-gray-400 hover:text-white transition-colors">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
