'use client'

import Link from 'next/link'
import { Play, ExternalLink, Calendar, Award } from 'lucide-react'
import { useState } from 'react'

const CelebritySection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const collaborations = [
    {
      id: 'culcha-candela',
      celebrity: 'Culcha Candela',
      project: 'Various Music Videos',
      year: 2019,
      role: 'Lead Choreographer',
      description: 'Created signature dance moves and choreographed multiple music videos for the successful German reggae/dancehall band.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: '/videos/culcha-candela-showcase.mp4',
      type: 'Music Video',
      featured: true
    },
    {
      id: 'seeed',
      celebrity: 'Seeed',
      project: 'Live Tour Performances',
      year: 2020,
      role: 'Tour Choreographer',
      description: 'Developed and directed choreography for major live performances and tour dates across Europe.',
      image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: '/videos/seeed-live-performance.mp4',
      type: 'Live Performance',
      featured: true
    },
    {
      id: 'lena-meyer-landrut',
      celebrity: 'Lena Meyer-Landrut',
      project: 'Music Video Production',
      year: 2021,
      role: 'Creative Director & Choreographer',
      description: 'Choreographed and provided creative direction for music video featuring the Eurovision winner and German pop star.',
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: '/videos/lena-music-video.mp4',
      type: 'Music Video',
      featured: true
    },
    {
      id: 'commercial-artists',
      celebrity: 'Various Artists',
      project: 'Commercial Campaigns',
      year: 2022,
      role: 'Movement Director',
      description: 'Provided choreography and movement direction for multiple commercial campaigns featuring German celebrities.',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: '/videos/commercial-showcase.mp4',
      type: 'Commercial',
      featured: false
    }
  ]

  const achievements = [
    { icon: Award, title: '50+ Celebrity Collaborations', subtitle: 'Working with top German and international artists' },
    { icon: Play, title: '100+ Music Videos', subtitle: 'Choreographed for various genres and styles' },
    { icon: Calendar, title: '15+ Years Experience', subtitle: 'Professional choreography since 2008' },
    { icon: ExternalLink, title: 'International Recognition', subtitle: 'Featured in major European productions' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-mobile">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
            <Award size={16} />
            <span className="font-medium">Celebrity Collaborations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Working with the Stars
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Culcha Candela to Lena Meyer-Landrut, I've had the privilege of creating 
            movement for some of Germany's biggest artists and international productions.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-lg transition-all duration-300">
              <achievement.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-gray-600 text-sm">{achievement.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Featured Collaborations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Collaborations</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {collaborations.filter(collab => collab.featured).map((collaboration) => (
              <div key={collaboration.id} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="aspect-w-16 aspect-h-12">
                  <img 
                    src={collaboration.image} 
                    alt={collaboration.celebrity}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Video Play Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setActiveVideo(collaboration.videoUrl)}
                    className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                  >
                    <Play className="w-8 h-8 text-white" fill="currentColor" />
                  </button>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-purple-600 px-3 py-1 rounded-full text-xs font-medium">
                      {collaboration.type}
                    </span>
                    <span className="text-sm text-gray-300">{collaboration.year}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-1">{collaboration.celebrity}</h4>
                  <p className="text-purple-300 font-medium mb-2">{collaboration.project}</p>
                  <p className="text-gray-300 text-sm mb-3">{collaboration.role}</p>
                  <p className="text-gray-200 text-sm line-clamp-2">{collaboration.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Collaborations */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">All Collaborations</h3>
          <div className="space-y-6">
            {collaborations.map((collaboration) => (
              <div key={collaboration.id} className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-64 flex-shrink-0">
                    <div className="relative overflow-hidden rounded-lg group">
                      <img 
                        src={collaboration.image} 
                        alt={collaboration.celebrity}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button
                          onClick={() => setActiveVideo(collaboration.videoUrl)}
                          className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300"
                        >
                          <Play className="w-6 h-6 text-white" fill="currentColor" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {collaboration.type}
                      </span>
                      <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {collaboration.year}
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{collaboration.celebrity}</h4>
                    <h5 className="text-lg text-purple-700 font-medium mb-2">{collaboration.project}</h5>
                    <p className="text-amber-600 font-semibold mb-3">{collaboration.role}</p>
                    <p className="text-gray-600 leading-relaxed">{collaboration.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl font-bold"
              >
                ✕ Close
              </button>
              <video
                src={activeVideo}
                controls
                autoPlay
                className="w-full rounded-lg"
                onError={() => setActiveVideo(null)}
              >
                Your browser does not support video playback.
              </video>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Create Something Amazing?</h3>
          <p className="text-xl mb-8 text-purple-100">
            Whether you're an established artist or an emerging talent, let's collaborate 
            to bring your vision to life through movement and choreography.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=choreography"
              className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Award size={20} />
              <span>Discuss Your Project</span>
            </Link>
            <Link
              href="/celebrity-work"
              className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              <ExternalLink size={20} />
              <span>View Full Portfolio</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CelebritySection
