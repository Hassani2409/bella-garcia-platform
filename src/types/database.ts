export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      // User Profiles
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          phone: string | null
          date_of_birth: string | null
          emergency_contact: string | null
          medical_conditions: string | null
          experience_level: 'beginner' | 'intermediate' | 'advanced' | null
          preferred_services: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          phone?: string | null
          date_of_birth?: string | null
          emergency_contact?: string | null
          medical_conditions?: string | null
          experience_level?: 'beginner' | 'intermediate' | 'advanced' | null
          preferred_services?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          phone?: string | null
          date_of_birth?: string | null
          emergency_contact?: string | null
          medical_conditions?: string | null
          experience_level?: 'beginner' | 'intermediate' | 'advanced' | null
          preferred_services?: string[] | null
          created_at?: string
          updated_at?: string
        }
      }

      // Services offered by Bella
      services: {
        Row: {
          id: string
          name: string
          slug: string
          category: 'choreography' | 'stunts' | 'one1vibe' | 'momflow' | 'afro_fusion' | 'workshops'
          description: string
          short_description: string
          price_from: number | null
          price_to: number | null
          duration_minutes: number | null
          max_participants: number | null
          skill_level_required: 'beginner' | 'intermediate' | 'advanced' | 'all'
          image_url: string | null
          video_url: string | null
          features: string[] | null
          location: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          category: 'choreography' | 'stunts' | 'one1vibe' | 'momflow' | 'afro_fusion' | 'workshops'
          description: string
          short_description: string
          price_from?: number | null
          price_to?: number | null
          duration_minutes?: number | null
          max_participants?: number | null
          skill_level_required?: 'beginner' | 'intermediate' | 'advanced' | 'all'
          image_url?: string | null
          video_url?: string | null
          features?: string[] | null
          location?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          category?: 'choreography' | 'stunts' | 'one1vibe' | 'momflow' | 'afro_fusion' | 'workshops'
          description?: string
          short_description?: string
          price_from?: number | null
          price_to?: number | null
          duration_minutes?: number | null
          max_participants?: number | null
          skill_level_required?: 'beginner' | 'intermediate' | 'advanced' | 'all'
          image_url?: string | null
          video_url?: string | null
          features?: string[] | null
          location?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }

      // Celebrity collaborations
      celebrity_collaborations: {
        Row: {
          id: string
          celebrity_name: string
          project_name: string
          project_type: 'music_video' | 'live_performance' | 'tour' | 'commercial' | 'other'
          role: string
          description: string | null
          year: number
          image_url: string | null
          video_url: string | null
          is_featured: boolean
          sort_order: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          celebrity_name: string
          project_name: string
          project_type: 'music_video' | 'live_performance' | 'tour' | 'commercial' | 'other'
          role: string
          description?: string | null
          year: number
          image_url?: string | null
          video_url?: string | null
          is_featured?: boolean
          sort_order?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          celebrity_name?: string
          project_name?: string
          project_type?: 'music_video' | 'live_performance' | 'tour' | 'commercial' | 'other'
          role?: string
          description?: string | null
          year?: number
          image_url?: string | null
          video_url?: string | null
          is_featured?: boolean
          sort_order?: number | null
          created_at?: string
          updated_at?: string
        }
      }

      // Film credits (stunt work)
      film_credits: {
        Row: {
          id: string
          title: string
          role: string
          production_company: string | null
          director: string | null
          year: number
          genre: string[] | null
          description: string | null
          poster_url: string | null
          trailer_url: string | null
          imdb_url: string | null
          is_featured: boolean
          sort_order: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          role: string
          production_company?: string | null
          director?: string | null
          year: number
          genre?: string[] | null
          description?: string | null
          poster_url?: string | null
          trailer_url?: string | null
          imdb_url?: string | null
          is_featured?: boolean
          sort_order?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          role?: string
          production_company?: string | null
          director?: string | null
          year?: number
          genre?: string[] | null
          description?: string | null
          poster_url?: string | null
          trailer_url?: string | null
          imdb_url?: string | null
          is_featured?: boolean
          sort_order?: number | null
          created_at?: string
          updated_at?: string
        }
      }

      // Bookings for classes and workshops
      bookings: {
        Row: {
          id: string
          user_id: string
          service_id: string
          booking_date: string
          booking_time: string
          participants: number
          total_amount: number | null
          status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
          payment_status: 'pending' | 'paid' | 'refunded'
          special_requests: string | null
          cancellation_reason: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          service_id: string
          booking_date: string
          booking_time: string
          participants?: number
          total_amount?: number | null
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed'
          payment_status?: 'pending' | 'paid' | 'refunded'
          special_requests?: string | null
          cancellation_reason?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          service_id?: string
          booking_date?: string
          booking_time?: string
          participants?: number
          total_amount?: number | null
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed'
          payment_status?: 'pending' | 'paid' | 'refunded'
          special_requests?: string | null
          cancellation_reason?: string | null
          created_at?: string
          updated_at?: string
        }
      }

      // Events and workshops
      events: {
        Row: {
          id: string
          title: string
          description: string
          event_type: 'workshop' | 'masterclass' | 'performance' | 'collaboration' | 'other'
          date: string
          time: string
          duration_minutes: number
          location: string
          max_participants: number | null
          current_participants: number
          price: number | null
          image_url: string | null
          is_featured: boolean
          is_published: boolean
          registration_deadline: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          event_type: 'workshop' | 'masterclass' | 'performance' | 'collaboration' | 'other'
          date: string
          time: string
          duration_minutes: number
          location: string
          max_participants?: number | null
          current_participants?: number
          price?: number | null
          image_url?: string | null
          is_featured?: boolean
          is_published?: boolean
          registration_deadline?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          event_type?: 'workshop' | 'masterclass' | 'performance' | 'collaboration' | 'other'
          date?: string
          time?: string
          duration_minutes?: number
          location?: string
          max_participants?: number | null
          current_participants?: number
          price?: number | null
          image_url?: string | null
          is_featured?: boolean
          is_published?: boolean
          registration_deadline?: string | null
          created_at?: string
          updated_at?: string
        }
      }

      // Blog posts
      blog_posts: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string
          content: string
          featured_image: string | null
          category: 'choreography' | 'stunts' | 'lifestyle' | 'behind_scenes' | 'tutorials' | 'news'
          tags: string[] | null
          is_published: boolean
          is_featured: boolean
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          excerpt: string
          content: string
          featured_image?: string | null
          category: 'choreography' | 'stunts' | 'lifestyle' | 'behind_scenes' | 'tutorials' | 'news'
          tags?: string[] | null
          is_published?: boolean
          is_featured?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          excerpt?: string
          content?: string
          featured_image?: string | null
          category?: 'choreography' | 'stunts' | 'lifestyle' | 'behind_scenes' | 'tutorials' | 'news'
          tags?: string[] | null
          is_published?: boolean
          is_featured?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }

      // Contact messages
      contact_messages: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          subject: string
          message: string
          service_interest: string | null
          is_read: boolean
          replied_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          subject: string
          message: string
          service_interest?: string | null
          is_read?: boolean
          replied_at?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          subject?: string
          message?: string
          service_interest?: string | null
          is_read?: boolean
          replied_at?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
