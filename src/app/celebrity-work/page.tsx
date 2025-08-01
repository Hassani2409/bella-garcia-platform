import { Play, ExternalLink, Calendar, Award, Star, Music, Video } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Celebrity Collaborations - Bella Garcia',
  description: 'Explore Bella Garcia\'s extensive celebrity collaboration portfolio including work with Culcha Candela, Seeed, Lena Meyer-Landrut, and other top German and international artists.',
}

const collaborations = [
  {
    id: 'culcha-candela',
    celebrity: 'Culcha Candela',
    project: 'Multiple Music Videos & Tours',
    year: '2019-2022',
    role: 'Lead Choreographer',
    description: 'Created signature dance moves and choreographed multiple music videos for the successful German reggae/dancehall band. Developed touring choreography that became part of their signature style.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoUrl: '/videos/culcha-candela-showcase.mp4',
    type: 'Music Video & Tour',
    featured: true,
    achievements: [
      'Choreographed 5+ music videos',
      '50+ live performances',
      'Signature dance moves adopted by fans',
      'European tour choreography'
    ],
    testimonial: {
      text: "Bella's creativity and energy brought our music to life in ways we never imagined. Her choreography became part of our identity.",
      author: "Culcha Candela Band Member"
    }
  },
  {
    id: 'seeed',
    celebrity: 'Seeed',
    project: 'Live Tour Performances',
    year: '2020-2021',
    role: 'Tour Choreographer',
    description: 'Developed and directed choreography for major live performances and tour dates across Europe. Created dynamic stage movements that enhanced the band\'s energetic performances.',
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoUrl: '/videos/seeed-live-performance.mp4',
    type: 'Live Performance',
    featured: true,
    achievements: [
      'European tour choreography',
      '30+ venues across Germany',
      'Festival performance direction',
      'Live TV show choreography'
    ],
    testimonial: {
      text: "Professional, creative, and always brings positive energy to our performances. Bella understands how to make music visual.",
      author: "Seeed Production Team"
    }
  },
  {
    id: 'lena-meyer-landrut',
    celebrity: 'Lena Meyer-Landrut',
    project: 'Music Video Production',
    year: '2021',
    role: 'Creative Director & Choreographer',
    description: 'Choreographed and provided creative direction for music video featuring the Eurovision winner and German pop star. Developed conceptual movement pieces that complemented the artistic vision.',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoUrl: '/videos/lena-music-video.mp4',
    type: 'Music Video',
    featured: true,
    achievements: [
      'Creative concept development',
      'Principal artist choreography',
      'Backup dancer coordination',
      'Music video direction'
    ],
    testimonial: {
      text: "Bella brought such professionalism and artistic vision to the project. The choreography perfectly captured the song's emotion.",
      author: "Lena Meyer-Landrut"
    }
  },
  {
    id: 'commercial-artists',
    celebrity: 'Various Commercial Artists',
    project: 'Brand Campaigns & Commercials',
    year: '2020-2023',
    role: 'Movement Director',
    description: 'Provided choreography and movement direction for multiple commercial campaigns featuring German celebrities. Specialized in brand-aligned movement that enhances product messaging.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoUrl: '/videos/commercial-showcase.mp4',
    type: 'Commercial',
    featured: false,
    achievements: [
      '15+ commercial campaigns',
      'Brand movement identity',
      'Celebrity movement coaching',
      'Product launch choreography'
    ]
  },
  {
    id: 'independent-artists',
    celebrity: 'Emerging Artists',
    project: 'Artist Development Program',
    year: '2018-Present',
    role: 'Choreographer & Mentor',
    description: 'Ongoing work with emerging artists to develop their stage presence and movement vocabulary. Providing choreographic support for rising talents in the German music scene.',
    image: 'https://images.unsplash.com/photo-1571266028243-d220c9e5f32e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'Artist Development',
    featured: false,
    achievements: [
      '20+ emerging artists supported',
      'Performance coaching',
      'Stage presence development',
      'Industry mentorship'
    ]
  }
]

const stats = [
  { number: '50+', label: 'Celebrity Collaborations', icon: Star },
  { number: '100+', label: 'Music Videos', icon: Video },
  { number: '200+', label: 'Live Performances', icon: Music },
  { number: '15+', label: 'Years Experience', icon: Award }
]

export default function CelebrityWorkPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container-mobile">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award size={16} />
              <span className="font-medium">Celebrity Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Celebrity Collaborations
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8">
              From Culcha Candela to Lena Meyer-Landrut - bringing movement to Germany's biggest stars
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-mobile">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collaborations */}
      <section className="py-20 bg-gray-50">
        <div className="container-mobile">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Featured Collaborations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highlighting some of the most impactful celebrity partnerships that have shaped careers and created memorable performances
            </p>
          </div>

          <div className="space-y-16">
            {collaborations.filter(collab => collab.featured).map((collaboration, index) => (
              <div key={collaboration.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative overflow-hidden rounded-2xl shadow-xl ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={collaboration.image} 
                    alt={collaboration.celebrity}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="bg-purple-600 px-3 py-1 rounded-full text-white text-sm font-medium">
                          {collaboration.type}
                        </span>
                      </div>
                      <button className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300">
                        <Play className="w-6 h-6 text-white" fill="currentColor" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <div className="flex items-center space-x-2 text-purple-600 mb-2">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{collaboration.year}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{collaboration.celebrity}</h3>
                    <h4 className="text-xl text-gray-600 mb-4">{collaboration.project}</h4>
                    <p className="text-purple-700 font-semibold mb-4">{collaboration.role}</p>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    {collaboration.description}
                  </p>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {collaboration.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {collaboration.testimonial && (
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                      <blockquote className="text-gray-700 italic mb-3">
                        "{collaboration.testimonial.text}"
                      </blockquote>
                      <cite className="text-purple-700 font-semibold">
                        - {collaboration.testimonial.author}
                      </cite>
                    </div>
                  )}

                  <div className="flex space-x-4">
                    <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      <Play size={18} />
                      <span>Watch Reel</span>
                    </button>
                    <button className="inline-flex items-center space-x-2 border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
                      <ExternalLink size={18} />
                      <span>Learn More</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Collaborations */}
      <section className="py-20 bg-white">
        <div className="container-mobile">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Complete Portfolio</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborations.map((collaboration) => (
              <div key={collaboration.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={collaboration.image} 
                    alt={collaboration.celebrity}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-purple-600 px-2 py-1 rounded text-white text-xs font-medium">
                      {collaboration.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-purple-600 mb-2">
                    <Calendar size={14} />
                    <span className="text-sm">{collaboration.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{collaboration.celebrity}</h3>
                  <h4 className="text-gray-600 mb-3">{collaboration.project}</h4>
                  <p className="text-purple-700 font-medium mb-3">{collaboration.role}</p>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {collaboration.description}
                  </p>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300">
                      View Details
                    </button>
                    <button className="border border-purple-600 text-purple-600 py-2 px-4 rounded-lg text-sm font-medium hover:bg-purple-600 hover:text-white transition-all duration-300">
                      <Play size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container-mobile text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Something Amazing Together?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're an established artist or an emerging talent, let's collaborate 
            to bring your vision to life through movement and choreography.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=choreography"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Award size={20} />
              <span>Discuss Your Project</span>
            </Link>
            <Link
              href="/services/choreography"
              className="inline-flex items-center space-x-2 border-2 border-gray-300 text-gray-300 px-8 py-4 rounded-full font-semibold hover:bg-gray-300 hover:text-gray-900 transition-all duration-300"
            >
              <ExternalLink size={20} />
              <span>View Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
