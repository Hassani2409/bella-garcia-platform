import { Film, Award, Clock, Users, ExternalLink, Play, Star, Calendar, MapPin, Briefcase } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Film Credits - Bella Garcia',
  description: 'Explore Bella Garcia\'s extensive film and television credits including work on major German productions, international films, and stunt performances in action sequences.',
}

const filmCredits = [
  {
    id: 'das-boot-tv-series',
    title: 'Das Boot',
    type: 'TV Series',
    year: '2020-2021',
    role: 'Stunt Performer / Movement Coordinator',
    production: 'Sky Deutschland',
    genre: 'War Drama',
    description: 'Performed complex underwater stunts and coordinated movement sequences for the critically acclaimed German TV series continuation of the classic war film.',
    image: 'https://images.unsplash.com/photo-1574953195758-0d8a0f8bb2c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    poster: 'https://images.unsplash.com/photo-1489599735023-27fcb9ba8253?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    location: 'Prague, Czech Republic',
    duration: '8 Episodes',
    featured: true,
    highlights: [
      'Underwater stunt sequences',
      'Military movement training',
      'Period-accurate choreography',
      'International cast coordination'
    ],
    awards: ['Czech Film Commission Recognition'],
    imdbRating: 7.8,
    status: 'Released'
  },
  {
    id: 'babylon-berlin',
    title: 'Babylon Berlin',
    type: 'TV Series',
    year: '2021',
    role: 'Dance Choreographer / Stunt Double',
    production: 'ARD/Sky',
    genre: 'Period Drama',
    description: 'Created authentic 1920s dance sequences and performed stunt work for the award-winning German series set in Weimar Republic era Berlin.',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    location: 'Berlin, Germany',
    duration: '12 Episodes',
    featured: true,
    highlights: [
      '1920s period dance choreography',
      'Charleston and period movements',
      'Cabaret performance sequences',
      'Stunt double work'
    ],
    awards: ['German Television Award Nomination'],
    imdbRating: 8.4,
    status: 'Released'
  },
  {
    id: 'tatort-special',
    title: 'Tatort: Borderline',
    type: 'TV Movie',
    year: '2022',
    role: 'Stunt Coordinator',
    production: 'WDR',
    genre: 'Crime Thriller',
    description: 'Coordinated and performed action sequences for special Tatort episode featuring cross-border crime investigation with complex chase scenes.',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    location: 'Hamburg, Germany',
    duration: '90 Minutes',
    featured: true,
    highlights: [
      'Urban chase sequences',
      'Fight choreography',
      'Automotive stunts',
      'Safety coordination'
    ],
    awards: [],
    imdbRating: 7.2,
    status: 'Released'
  },
  {
    id: 'german-indie-film',
    title: 'Nachtschicht',
    type: 'Feature Film',
    year: '2020',
    role: 'Movement Director',
    production: 'Independent',
    genre: 'Drama',
    description: 'Directed movement and body language for intimate German drama about night shift workers finding connection in urban Berlin.',
    image: 'https://images.unsplash.com/photo-1489599735023-27fcb9ba8253?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    poster: 'https://images.unsplash.com/photo-1574953195758-0d8a0f8bb2c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    location: 'Berlin, Germany',
    duration: '105 Minutes',
    featured: false,
    highlights: [
      'Naturalistic movement direction',
      'Character-driven choreography',
      'Urban environment work',
      'Independent film collaboration'
    ],
    awards: ['Berlin Independent Film Festival'],
    imdbRating: 6.9,
    status: 'Released'
  },
  {
    id: 'commercial-work',
    title: 'Various Commercial Projects',
    type: 'Commercial',
    year: '2019-2023',
    role: 'Stunt Performer / Choreographer',
    production: 'Multiple Agencies',
    genre: 'Advertisement',
    description: 'Ongoing work in commercial productions for major German and international brands, specializing in dynamic movement and product demonstrations.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    poster: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    location: 'Various',
    duration: 'Multiple Projects',
    featured: false,
    highlights: [
      'Brand movement identity',
      'Product demonstration stunts',
      'Commercial choreography',
      'Multi-brand collaboration'
    ],
    awards: [],
    imdbRating: null,
    status: 'Ongoing'
  },
  {
    id: 'music-video-productions',
    title: 'Music Video Productions',
    type: 'Music Video',
    year: '2018-2023',
    role: 'Choreographer / Performer',
    production: 'Various Labels',
    genre: 'Music',
    description: 'Extensive work in German music video productions, creating signature movements for artists and performing in featured roles.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    poster: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    location: 'Germany / Europe',
    duration: '50+ Videos',
    featured: false,
    highlights: [
      'Artist choreography development',
      'Featured performer roles',
      'Concept creation',
      'International artist collaboration'
    ],
    awards: ['Music Video Award Nomination'],
    imdbRating: null,
    status: 'Ongoing'
  }
]

const stats = [
  { number: '25+', label: 'Film & TV Credits', icon: Film },
  { number: '150+', label: 'Project Days', icon: Clock },
  { number: '50+', label: 'Cast Members Worked With', icon: Users },
  { number: '10+', label: 'Years in Industry', icon: Award }
]

const skills = [
  'Stunt Coordination',
  'Fight Choreography',
  'Period Movement',
  'Safety Protocols',
  'Cast Training',
  'Action Sequences',
  'Underwater Stunts',
  'Automotive Stunts',
  'Wire Work',
  'Motion Capture',
  'Movement Direction',
  'Character Development'
]

export default function FilmCreditsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="container-mobile">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Film size={16} />
              <span className="font-medium">Film & Television</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Film Credits & Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              From Das Boot to Babylon Berlin - bringing movement and action to Germany's biggest productions
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-gray-700" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Credits */}
      <section className="py-20 bg-gray-50">
        <div className="container-mobile">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Featured Productions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highlighting major film and television productions showcasing expertise in stunts, choreography, and movement direction
            </p>
          </div>

          <div className="space-y-16">
            {filmCredits.filter(credit => credit.featured).map((credit, index) => (
              <div key={credit.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative overflow-hidden rounded-2xl shadow-xl ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={credit.image} 
                    alt={credit.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="bg-gray-800 px-3 py-1 rounded-full text-white text-sm font-medium">
                          {credit.type}
                        </span>
                        {credit.imdbRating && (
                          <div className="flex items-center space-x-1 bg-yellow-500 px-2 py-1 rounded-full">
                            <Star size={12} className="text-white" fill="currentColor" />
                            <span className="text-white text-sm font-medium">{credit.imdbRating}</span>
                          </div>
                        )}
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
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{credit.year}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin size={16} />
                        <span className="text-sm font-medium">{credit.location}</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{credit.title}</h3>
                    <h4 className="text-xl text-gray-600 mb-2">{credit.production}</h4>
                    <p className="text-gray-700 font-semibold mb-4">{credit.role}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="bg-gray-100 px-2 py-1 rounded">{credit.genre}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded">{credit.duration}</span>
                      <span className={`px-2 py-1 rounded ${
                        credit.status === 'Released' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {credit.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    {credit.description}
                  </p>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Key Contributions:</h5>
                    <ul className="space-y-2">
                      {credit.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {credit.awards && credit.awards.length > 0 && (
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <Award className="w-5 h-5 text-yellow-600" />
                        <h5 className="font-semibold text-gray-900">Recognition</h5>
                      </div>
                      <div className="space-y-1">
                        {credit.awards.map((award, awardIndex) => (
                          <p key={awardIndex} className="text-gray-700">{award}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-4">
                    <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-800 to-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      <Play size={18} />
                      <span>Watch Reel</span>
                    </button>
                    <button className="inline-flex items-center space-x-2 border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300">
                      <ExternalLink size={18} />
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container-mobile">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Specialized Skills</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional expertise across all aspects of film and television movement work
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg text-center border border-gray-200 hover:shadow-md transition-all duration-300">
                <span className="text-gray-800 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Filmography */}
      <section className="py-20 bg-gray-50">
        <div className="container-mobile">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Complete Filmography</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filmCredits.map((credit) => (
              <div key={credit.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={credit.poster} 
                    alt={credit.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <span className="bg-gray-800 px-2 py-1 rounded text-white text-xs font-medium">
                        {credit.type}
                      </span>
                      {credit.imdbRating && (
                        <div className="flex items-center space-x-1 bg-yellow-500 px-2 py-1 rounded">
                          <Star size={10} className="text-white" fill="currentColor" />
                          <span className="text-white text-xs font-medium">{credit.imdbRating}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <Calendar size={14} />
                    <span className="text-sm">{credit.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{credit.title}</h3>
                  <h4 className="text-gray-600 mb-1">{credit.production}</h4>
                  <p className="text-gray-700 font-medium mb-3">{credit.role}</p>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">{credit.genre}</span>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">{credit.duration}</span>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {credit.description}
                  </p>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gradient-to-r from-gray-800 to-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300">
                      View Details
                    </button>
                    <button className="border border-gray-800 text-gray-800 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 hover:text-white transition-all duration-300">
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
            Looking for Professional Film & TV Expertise?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Bring authentic movement, professional stunt work, and choreographic excellence 
            to your next production with extensive industry experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=stunts"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Briefcase size={20} />
              <span>Discuss Your Production</span>
            </Link>
            <Link
              href="/services/stunts"
              className="inline-flex items-center space-x-2 border-2 border-gray-300 text-gray-300 px-8 py-4 rounded-full font-semibold hover:bg-gray-300 hover:text-gray-900 transition-all duration-300"
            >
              <ExternalLink size={20} />
              <span>View Stunt Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
