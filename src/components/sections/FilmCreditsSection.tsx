'use client'

import Link from 'next/link'
import { ExternalLink, Film, Calendar, Star, Award } from 'lucide-react'

const FilmCreditsSection = () => {
  const filmCredits = [
    {
      id: 'matrix-resurrections',
      title: 'Matrix Resurrections',
      year: 2021,
      role: 'Stunt Performer',
      director: 'Lana Wachowski',
      productionCompany: 'Warner Bros.',
      genre: ['Action', 'Sci-Fi'],
      description: 'Performed complex fight sequences and wire work in the highly anticipated fourth Matrix film.',
      posterUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      trailerUrl: 'https://www.youtube.com/watch?v=example',
      imdbUrl: 'https://www.imdb.com/title/example',
      featured: true,
      rating: 7.4
    },
    {
      id: 'gunpowder-milkshake',
      title: 'Gunpowder Milkshake',
      year: 2021,
      role: 'Stunt Coordinator Assistant',
      director: 'Navot Papushado',
      productionCompany: 'Studio Babelsberg',
      genre: ['Action', 'Thriller'],
      description: 'Assisted in coordinating high-intensity action sequences for this stylized action thriller.',
      posterUrl: 'https://images.unsplash.com/photo-1489599540447-5adf8b9c9c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      trailerUrl: 'https://www.youtube.com/watch?v=example',
      imdbUrl: 'https://www.imdb.com/title/example',
      featured: true,
      rating: 6.1
    },
    {
      id: 'hunger-games-mockingjay',
      title: 'The Hunger Games: Mockingjay',
      year: 2015,
      role: 'Stunt Double',
      director: 'Francis Lawrence',
      productionCompany: 'Lionsgate',
      genre: ['Action', 'Adventure'],
      description: 'Served as stunt double for key action sequences in the final Hunger Games installment.',
      posterUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      trailerUrl: 'https://www.youtube.com/watch?v=example',
      imdbUrl: 'https://www.imdb.com/title/example',
      featured: true,
      rating: 6.6
    },
    {
      id: 'independent-action',
      title: 'Independent Action Films',
      year: 2020,
      role: 'Fight Choreographer',
      director: 'Various',
      productionCompany: 'Independent',
      genre: ['Action'],
      description: 'Choreographed fight sequences for multiple independent action productions.',
      posterUrl: 'https://images.unsplash.com/photo-1486693128850-a77436e7ba3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      trailerUrl: null,
      imdbUrl: null,
      featured: false,
      rating: null
    }
  ]

  const stuntSkills = [
    { skill: 'Fight Choreography', level: 95, icon: '🥊' },
    { skill: 'Wire Work', level: 90, icon: '🕸️' },
    { skill: 'Vehicle Stunts', level: 85, icon: '🚗' },
    { skill: 'Safety Coordination', level: 98, icon: '🛡️' },
    { skill: 'Weapons Training', level: 88, icon: '⚔️' },
    { skill: 'High Falls', level: 82, icon: '🏢' }
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container-mobile">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-600/20 text-red-400 px-4 py-2 rounded-full mb-4">
            <Film size={16} />
            <span className="font-medium">Hollywood Credits</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Major Film Productions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From The Matrix to The Hunger Games, bringing high-octane action sequences 
            to life with precision, safety, and cinematic flair.
          </p>
        </div>

        {/* Stunt Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Specialized Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stuntSkills.map((skill, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">{skill.icon}</span>
                  <h4 className="text-lg font-semibold">{skill.skill}</h4>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-gray-400">{skill.level}% Proficiency</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Films */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Featured Films</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filmCredits.filter(film => film.featured).map((film) => (
              <div key={film.id} className="group relative overflow-hidden rounded-2xl bg-gray-800 hover:bg-gray-700 transition-all duration-500">
                <div className="aspect-w-2 aspect-h-3">
                  <img 
                    src={film.posterUrl} 
                    alt={film.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {film.genre.map((g, index) => (
                        <span key={index} className="bg-red-600 px-2 py-1 rounded text-xs font-medium">
                          {g}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span className="text-sm">{film.year}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-2">{film.title}</h4>
                  <p className="text-red-400 font-medium mb-2">{film.role}</p>
                  <p className="text-gray-300 text-sm mb-3">Directed by {film.director}</p>
                  
                  {film.rating && (
                    <div className="flex items-center space-x-1 mb-3">
                      <Star className="text-yellow-400" size={16} fill="currentColor" />
                      <span className="text-sm font-medium">{film.rating}/10 IMDb</span>
                    </div>
                  )}
                  
                  <div className="flex space-x-2">
                    {film.trailerUrl && (
                      <a 
                        href={film.trailerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm hover:bg-white/30 transition-all duration-300"
                      >
                        Trailer
                      </a>
                    )}
                    {film.imdbUrl && (
                      <a 
                        href={film.imdbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-yellow-600/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm hover:bg-yellow-600/30 transition-all duration-300"
                      >
                        IMDb
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Complete Filmography */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8">Complete Filmography</h3>
          <div className="space-y-4">
            {filmCredits.map((film) => (
              <div key={film.id} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-32 flex-shrink-0">
                    <img 
                      src={film.posterUrl} 
                      alt={film.title}
                      className="w-full lg:w-32 h-32 lg:h-40 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      {film.genre.map((g, index) => (
                        <span key={index} className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                          {g}
                        </span>
                      ))}
                      <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {film.year}
                      </span>
                      {film.rating && (
                        <div className="flex items-center space-x-1 bg-yellow-600/20 px-3 py-1 rounded-full">
                          <Star className="text-yellow-400" size={14} fill="currentColor" />
                          <span className="text-sm text-yellow-400">{film.rating}</span>
                        </div>
                      )}
                    </div>
                    
                    <h4 className="text-2xl font-bold mb-2">{film.title}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-red-400 font-semibold">{film.role}</p>
                        <p className="text-gray-300">Directed by {film.director}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Production: {film.productionCompany}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4">{film.description}</p>
                    
                    <div className="flex space-x-3">
                      {film.trailerUrl && (
                        <a 
                          href={film.trailerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-red-400 hover:text-red-300 transition-colors"
                        >
                          <ExternalLink size={16} />
                          <span>Watch Trailer</span>
                        </a>
                      )}
                      {film.imdbUrl && (
                        <a 
                          href={film.imdbUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-yellow-400 hover:text-yellow-300 transition-colors"
                        >
                          <ExternalLink size={16} />
                          <span>IMDb Page</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Need Professional Stunt Work?</h3>
          <p className="text-xl mb-8 text-red-100">
            With proven experience in major Hollywood productions, I bring safety, 
            precision, and cinematic expertise to every project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=stunts"
              className="inline-flex items-center space-x-2 bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Award size={20} />
              <span>Discuss Your Production</span>
            </Link>
            <Link
              href="/film-credits"
              className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              <Film size={20} />
              <span>View Complete Reel</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FilmCreditsSection
