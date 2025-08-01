'use client'

import Link from 'next/link'
import { Play, ArrowRight, Star } from 'lucide-react'
import { useState } from 'react'

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Celebrity Collaborations' },
    { number: '10+', label: 'Hollywood Films' },
    { number: '1000+', label: 'Students Trained' }
  ]

  const achievements = [
    'Choreographer for Culcha Candela, Seeed, Lena Meyer-Landrut',
    'Stunt work in Matrix Resurrections, Gunpowder Milkshake',
    'CEO of One1Vibe Studio Berlin since 2018',
    'Flying Steps Academy Master Instructor'
  ]

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        {!isVideoPlaying ? (
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2335&q=80')"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          </div>
        ) : (
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            onError={() => setIsVideoPlaying(false)}
          >
            <source src="/videos/bella-showreel.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container-mobile text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-4 py-2">
              <Star className="text-amber-400" size={16} fill="currentColor" />
              <span className="text-amber-200 text-sm font-medium">Multi-Award Winning Artist</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block">Bella</span>
                <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Garcia
                </span>
              </h1>
              <div className="space-y-2">
                <p className="text-xl md:text-2xl text-amber-200 font-medium">
                  Professional Choreographer
                </p>
                <p className="text-xl md:text-2xl text-gray-300">
                  Hollywood Stuntwoman • CEO One1Vibe Studio
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-200 leading-relaxed max-w-xl">
              From dancing with international celebrities to performing stunts in Hollywood blockbusters, 
              I bring movement, culture, and community together through the art of dance and performance.
            </p>

            {/* Achievement List */}
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span>Explore Services</span>
                <ArrowRight size={20} />
              </Link>
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <Play size={20} fill="currentColor" />
                <span>Watch Showreel</span>
              </button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Quote */}
            <div className="bg-gradient-to-br from-amber-500/20 to-orange-600/20 backdrop-blur-sm border border-amber-500/30 rounded-xl p-8">
              <blockquote className="text-lg italic text-center">
                "Dance is the universal language that transcends all barriers. 
                My mission is to share this language while building bridges between cultures."
              </blockquote>
              <div className="text-center mt-4">
                <cite className="text-amber-400 font-semibold">- Bella Garcia</cite>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-amber-400">Ready to Start?</h3>
              <p className="text-gray-300 mb-4">
                Whether you need choreography, stunt work, or want to join our community classes, 
                let's create something amazing together.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
