import { Heart, Star, Award, Users, Globe, Target, Zap, Music, Film, Dumbbell } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Bella Garcia - Multi-Service Artist & CEO',
  description: 'Meet Bella Garcia: Professional choreographer, stuntwoman, fitness entrepreneur, and CEO. From Berlin stages to Hollywood sets, discover her journey of movement, empowerment, and artistic excellence.',
}

const milestones = [
  {
    year: '2010',
    title: 'Started Professional Career',
    description: 'Began professional dance training in Berlin, specializing in Afro Fusion and contemporary movement',
    icon: Music
  },
  {
    year: '2015',
    title: 'First Celebrity Collaboration',
    description: 'Choreographed first music video for emerging German artists, establishing reputation in entertainment industry',
    icon: Star
  },
  {
    year: '2018',
    title: 'Film Industry Entry',
    description: 'Transitioned into stunt work and action choreography for German film and television productions',
    icon: Film
  },
  {
    year: '2020',
    title: 'Founded One1Vibe Studio',
    description: 'Opened first physical studio location in Berlin, creating a hub for movement and artistic expression',
    icon: Heart
  },
  {
    year: '2021',
    title: 'Launched MomFlow',
    description: 'Developed specialized fitness program for mothers, combining movement therapy with strength training',
    icon: Dumbbell
  },
  {
    year: '2023',
    title: 'International Recognition',
    description: 'Achieved recognition in European entertainment industry and expanded services internationally',
    icon: Globe
  }
]

const values = [
  {
    icon: Heart,
    title: 'Empowerment Through Movement',
    description: 'Every person has the potential to transform their life through conscious movement and self-expression. We unlock that potential together.'
  },
  {
    icon: Star,
    title: 'Artistic Excellence',
    description: 'Pursuing the highest standards in every project, from intimate personal training to major film productions.'
  },
  {
    icon: Users,
    title: 'Inclusive Community',
    description: 'Creating spaces where people of all backgrounds, ages, and abilities can explore movement and find their voice.'
  },
  {
    icon: Target,
    title: 'Personal Growth',
    description: 'Supporting individual journeys of transformation, whether in fitness, artistry, or personal development.'
  }
]

const expertise = [
  {
    category: 'Choreography & Dance',
    skills: ['Afro Fusion', 'Contemporary', 'Urban Dance', 'Music Video Choreography', 'Live Performance Direction'],
    experience: '10+ years',
    projects: '100+ projects'
  },
  {
    category: 'Stunt & Action Work',
    skills: ['Fight Choreography', 'Stunt Coordination', 'Safety Protocols', 'Wire Work', 'Automotive Stunts'],
    experience: '5+ years',
    projects: '25+ productions'
  },
  {
    category: 'Fitness & Wellness',
    skills: ['Personal Training', 'MomFlow Method', 'Movement Therapy', 'Nutrition Coaching', 'Life Coaching'],
    experience: '8+ years',
    projects: '500+ clients'
  },
  {
    category: 'Business & Leadership',
    skills: ['Studio Management', 'Team Leadership', 'Creative Direction', 'Business Development', 'Community Building'],
    experience: '6+ years',
    projects: '3 successful ventures'
  }
]

const personalStats = [
  { number: '15+', label: 'Years in Movement', icon: Target },
  { number: '1000+', label: 'Lives Transformed', icon: Heart },
  { number: '3', label: 'Successful Businesses', icon: Award },
  { number: '6', label: 'Countries Worked', icon: Globe }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container-mobile">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Heart size={16} />
                <span className="font-medium">About Bella</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Movement is My Language
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8">
                From Berlin's dance studios to Hollywood sets, I've built a career transforming lives through movement, art, and empowerment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/booking"
                  className="inline-flex items-center space-x-2 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Star size={18} />
                  <span>Work With Me</span>
                </Link>
                <Link
                  href="/celebrity-work"
                  className="inline-flex items-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
                >
                  <Award size={18} />
                  <span>View Portfolio</span>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1594736797933-d0c41327fd85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Bella Garcia - Professional Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-purple-100">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Stats */}
      <section className="py-16 bg-white">
        <div className="container-mobile">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {personalStats.map((stat, index) => (
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

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-mobile">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">My Story</h2>
              <p className="text-xl text-gray-600">
                A journey of movement, empowerment, and artistic excellence
              </p>
            </div>

            <div className="prose prose-lg prose-gray max-w-none">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">From Passion to Profession</h3>
                  <p className="text-gray-600 leading-relaxed">
                    My relationship with movement began in childhood, but it wasn't until I discovered the power of Afro Fusion dance that I found my true calling. What started as personal expression evolved into a mission to help others find their voice through movement.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Berlin became my canvas - a city where diverse cultures meet and create something beautiful together. It's here that I built my first studio, collaborated with my first celebrity clients, and discovered that movement could be both art and healing.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    The transition into stunt work happened naturally. The same body awareness and control that made me an effective choreographer translated perfectly to action sequences and safety coordination. Suddenly, I was working on German TV productions and film sets, bringing the same precision and creativity to action scenes.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Building Community</h3>
                  <p className="text-gray-600 leading-relaxed">
                    One1Vibe Studio became more than a business - it became a community hub where people could explore movement without judgment. Whether someone was preparing for a professional audition or just looking to reconnect with their body, we created space for every journey.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    The development of MomFlow came from recognizing a specific need. Mothers were struggling to find fitness programs that understood their unique challenges and celebrated their strength. We created something that honored their journey while helping them reclaim their power.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Today, as a CEO and creative director, I'm passionate about building systems that empower others. Whether it's training new instructors, developing innovative programs, or collaborating with artists, the mission remains the same: transformation through movement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="container-mobile">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Journey Milestones</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key moments that shaped my career and mission in movement and empowerment
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                      <milestone.icon className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="container-mobile">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision and interaction in my work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-full p-3">
                    <value.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="container-mobile">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Areas of Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive skills developed through years of professional practice and continuous learning
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {expertise.map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{area.category}</h3>
                  <div className="text-right">
                    <div className="text-purple-600 font-semibold">{area.experience}</div>
                    <div className="text-gray-600 text-sm">{area.projects}</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {area.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Philosophy */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container-mobile">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">My Philosophy</h2>
            <blockquote className="text-xl md:text-2xl text-purple-100 leading-relaxed mb-8 italic">
              "Movement is the universal language that connects us to ourselves and each other. 
              Whether we're creating art, building strength, or telling stories through our bodies, 
              we're participating in something fundamentally human and transformative."
            </blockquote>
            <div className="w-24 h-1 bg-white/30 mx-auto mb-8"></div>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto">
              This belief drives everything I do - from intimate personal training sessions to choreographing for major productions. 
              Every movement has meaning, and every person has the potential to unlock their power through conscious, purposeful motion.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-mobile text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're looking for professional choreography, personal transformation, or artistic collaboration, 
            let's explore what's possible when we move with intention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Heart size={20} />
              <span>Book a Session</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              <Users size={20} />
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
