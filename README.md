# Bella Garcia - Multi-Service Artist Platform

A comprehensive Next.js 14 platform showcasing Bella Garcia as a multi-talented artist, choreographer, stuntwoman, and CEO. The platform integrates professional services including choreography, stunt work, fitness training, workshops, and business ventures.

## 🌟 Project Overview

This professional platform represents Bella Garcia's diverse expertise across multiple industries:

- **Choreography & Dance**: Celebrity collaborations (Culcha Candela, Seeed, Lena Meyer-Landrut), music video choreography, live performance direction
- **Stunt & Action Work**: Film and TV stunt coordination (Das Boot, Babylon Berlin, Tatort), safety protocols, action sequence planning
- **Fitness & Wellness**: MomFlow method, personal training, movement therapy
- **Business Ventures**: One1Vibe Studio, Afro Fusion workshops, Ü30 programs
- **Education & Workshops**: Professional training sessions, group workshops, skill development

## 🚀 Features

### Core Functionality
- **AI-Powered Assistant**: OpenAI-integrated chatbot for service inquiries
- **Service Booking System**: Comprehensive booking platform with package options
- **Portfolio Showcase**: Celebrity collaborations and film credit displays
- **Multi-Service Integration**: Seamless navigation between different service offerings
- **Responsive Design**: Mobile-first approach with Berlin-inspired aesthetics

### Technical Features
- **Next.js 14**: App Router with TypeScript and Turbopack
- **Supabase Integration**: PostgreSQL database with real-time capabilities
- **AI Chat System**: OpenAI API integration for intelligent customer support
- **Modern UI/UX**: Tailwind CSS with custom African-European design elements
- **SEO Optimized**: Comprehensive metadata and performance optimization

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Supabase account
- OpenAI API key (for AI assistant)

### Installation

1. **Clone and install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**
```bash
cp .env.local.example .env.local
```

## 🗂️ Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── about/                    # Personal story and background
│   ├── booking/                  # Service booking system
│   ├── celebrity-work/           # Celebrity collaboration portfolio
│   ├── contact/                  # Contact forms and studio information
│   ├── film-credits/             # Film and TV credit showcase
│   ├── services/                 # Service overview and details
│   ├── api/
│   │   └── chat/                 # OpenAI API integration
│   ├── globals.css               # Global styles and Tailwind config
│   ├── layout.tsx                # Root layout with Header/Footer
│   └── page.tsx                  # Homepage with hero and overview
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Navigation with service links
│   │   └── Footer.tsx            # Contact info and social links
│   ├── sections/
│   │   ├── HeroSection.tsx       # Homepage hero with video/stats
│   │   ├── ServicesSection.tsx   # Service overview grid
│   │   ├── CelebritySection.tsx  # Celebrity collaboration highlights
│   │   └── FilmCreditsSection.tsx # Film/TV credit highlights
│   └── ui/
│       └── AIAssistant.tsx       # Floating AI chat interface
│
└── lib/
    ├── supabase.ts               # Supabase client configuration
    └── types.ts                  # TypeScript type definitions
```

## 🗄️ Database Schema

The platform uses a comprehensive multi-service database schema:

### Core Tables
- **profiles** - User profiles with preferences and experience levels
- **services** - All service offerings with categories and pricing
- **celebrity_collaborations** - Celebrity work showcase with testimonials
- **film_credits** - Film and TV production credits with details
- **bookings** - Service bookings and scheduling
- **events** - Workshops and special events
- **blog_posts** - Content management system
- **contact_messages** - Inquiry management and follow-up

### Service Categories
- `choreography` - Professional choreography services
- `stunts` - Stunt work and action coordination
- `one1vibe` - Studio classes and training
- `momflow` - Mother-focused fitness programs
- `afro_fusion` - African fusion dance classes
- `workshops` - Specialized workshops and training

## 🎨 Design System

### Color Palette
- **Primary Purple**: `#7C3AED` - Premium branding
- **Accent Pink**: `#EC4899` - Energy and creativity
- **African Gold**: `#F59E0B` - Heritage and warmth
- **Berlin Gray**: `#374151` - Urban sophistication
- **Nature Green**: `#10B981` - Growth and wellness

### Typography
- **Headers**: Inter font family, bold weights
- **Body**: Inter font family, regular/medium weights
- **Accents**: Gradients and custom spacing

### Component Architecture
- **Glass morphism effects**: Backdrop blur with transparency
- **Gradient overlays**: Purple-to-pink brand gradients
- **Custom animations**: Hover effects and transitions
- **Mobile-first**: Responsive breakpoints for all devices

## 🤖 AI Assistant Features

The platform includes an intelligent AI assistant powered by OpenAI that can:
- Answer questions about all service offerings
- Provide detailed pricing and package information
- Help with booking inquiries and availability
- Share insights about celebrity collaborations
- Explain the MomFlow methodology and benefits
- Assist with workshop selection and prerequisites

## 📱 Page Overview

### Homepage (`/`)
- Hero section with professional video and achievements
- Service overview with call-to-action buttons
- Celebrity collaboration highlights
- Film credit showcase
- AI Assistant integration

### About Page (`/about`)
- Personal story and journey timeline
- Core values and philosophy
- Areas of expertise and skills
- Professional milestones and achievements
- Personal statistics and recognition

### Services Page (`/services`)
- Comprehensive service listings
- Detailed descriptions and benefits
- Pricing and package information
- Booking call-to-actions
- Service-specific features and testimonials

### Celebrity Work (`/celebrity-work`)
- Celebrity collaboration portfolio
- Featured partnerships with testimonials
- Project details and achievements
- Video showcases and documentation
- Professional recognition and awards

### Film Credits (`/film-credits`)
- Complete filmography with ratings
- Production details and roles
- Industry recognition and achievements
- Behind-the-scenes insights
- Stunt work specializations and safety protocols

### Booking System (`/booking`)
- Service selection interface
- Package comparison and pricing
- Booking process workflow
- Client testimonials and reviews
- FAQ section and policies

### Contact Page (`/contact`)
- Multi-purpose contact forms
- Studio location and information
- Service-specific inquiry options
- Social media integration
- Response time expectations

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Supabase account
- OpenAI API key (for AI assistant)

### Installation

1. **Clone and install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**
```bash
cp .env.local.example .env.local
```
3. **Configure environment variables:**
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# OpenAI Configuration (for AI assistant)
OPENAI_API_KEY=your_openai_api_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Set up Supabase database:**
```bash
# Run the schema in your Supabase SQL editor
# Use the database schema provided in the documentation
```

5. **Start development server:**
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## � Development Commands

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Type checking
npm run type-check   # TypeScript type checking
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on git push to main branch

### Environment Variables for Production
```env
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_production_service_role_key
OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📊 Analytics & Performance

### SEO Optimization
- Comprehensive metadata for all pages
- Open Graph and Twitter Card integration
- Structured data for rich snippets
- Sitemap and robots.txt generation

### Performance Features
- Next.js 14 App Router with Turbopack
- Image optimization and lazy loading
- Code splitting and bundle optimization
- Core Web Vitals optimization

### Analytics Integration
- Google Analytics ready
- Conversion tracking for bookings
- AI Assistant engagement metrics
- Portfolio view analytics

## 🛡️ Security & Privacy

### Data Protection
- GDPR compliance considerations
- Secure API endpoints with authentication
- Row Level Security (RLS) with Supabase
- Environment variable protection

### Performance Monitoring
- Real-time error tracking
- Performance metrics monitoring
- User experience analytics
- Uptime monitoring

## 🤝 Contributing

### Development Guidelines
1. Follow TypeScript best practices
2. Maintain component consistency
3. Update documentation for new features
4. Include tests for new functionality

### Contribution Process
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved to Bella Garcia.

## 📞 Support & Contact

For technical support, business inquiries, or collaboration opportunities:

- **Professional Website**: [Live Platform](platform-url)
- **Business Email**: bella@bellagarcia.com
- **Studio Location**: One1Vibe Studio, Berlin
- **Emergency Technical Support**: [GitHub Issues](repository-issues-url)

---

**Built with ❤️ in Berlin**

*This platform represents the intersection of technology, artistry, and human empowerment - bringing movement and transformation to the digital space.*

### Platform Statistics
- **Pages**: 7 comprehensive service pages
- **Components**: 15+ reusable React components
- **Database Tables**: 8 core tables with relationships
- **API Endpoints**: AI chat integration with OpenAI
- **Design System**: Custom African-European aesthetic
- **Mobile Optimization**: 100% responsive design
- **Performance**: Next.js 14 with Turbopack optimization
- Phone: +49 30 123456789

---

**Built with ❤️ in Berlin** - Showcasing the intersection of African culture, European innovation, and professional excellence.
