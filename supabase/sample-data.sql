-- Sample Data for Bella Garcia Platform
-- Run this after the schema.sql

-- Insert Services
INSERT INTO services (name, slug, category, description, short_description, price_from, price_to, duration_minutes, max_participants, skill_level_required, features, location, is_active) VALUES
-- Professional Choreography
('Celebrity Choreography', 'celebrity-choreography', 'choreography', 'Professional choreography services for music videos, live performances, and tours. Experience working with top artists like Culcha Candela, Seeed, and Lena Meyer-Landrut.', 'Elite choreography for professional projects and celebrity collaborations.', 2500.00, 15000.00, NULL, NULL, 'advanced', ARRAY['Custom choreography creation', 'Artist coaching', 'Performance direction', 'Music video choreography', 'Live show choreography'], 'Berlin & International', true),

('Commercial Choreography', 'commercial-choreography', 'choreography', 'High-end choreography for commercials, brand campaigns, and corporate events. Bringing creativity and professionalism to every project.', 'Professional choreography for commercials and brand campaigns.', 1500.00, 8000.00, NULL, NULL, 'intermediate', ARRAY['Concept development', 'Dancer casting', 'Full production support', 'Brand alignment'], 'Berlin & Germany', true),

-- Stunt Work
('Film Stunt Work', 'film-stunt-work', 'stunts', 'Professional stunt coordination and performance for major Hollywood productions. Credits include Matrix Resurrections, Gunpowder Milkshake, and Hunger Games.', 'Hollywood-level stunt work and coordination for film productions.', NULL, NULL, NULL, NULL, 'advanced', ARRAY['Fight choreography', 'Wire work', 'Vehicle stunts', 'Safety coordination', 'Stunt double work'], 'International Productions', true),

('Stunt Training', 'stunt-training', 'stunts', 'Professional stunt training for aspiring performers. Learn from someone with real Hollywood experience.', 'Learn professional stunt techniques from a Hollywood veteran.', 150.00, 300.00, 120, 8, 'intermediate', ARRAY['Fight choreography basics', 'Safety protocols', 'Wire work introduction', 'Fall techniques'], 'One1Vibe Studio Berlin', true),

-- One1Vibe Studio Classes
('Afro Fusion Classes', 'afro-fusion', 'afro_fusion', 'Dynamic Afro Fusion dance classes combining traditional African dance with contemporary styles. Perfect for all levels looking to connect with rhythm and culture.', 'Energetic Afro Fusion dance classes celebrating African culture.', 25.00, 35.00, 90, 20, 'all', ARRAY['Traditional African techniques', 'Contemporary fusion', 'Cultural education', 'Live drumming sessions'], 'One1Vibe Studio Berlin', true),

('Ü30 Dance Workshops', 'ue30-workshops', 'workshops', 'Special dance workshops designed for adults 30+. A welcoming space to explore movement, build confidence, and have fun regardless of experience level.', 'Dance workshops specifically designed for adults 30 and older.', 30.00, 40.00, 75, 15, 'all', ARRAY['Age-appropriate movements', 'Confidence building', 'Social connection', 'Various dance styles'], 'One1Vibe Studio Berlin', true),

-- MomFlow
('MomFlow Classes', 'momflow', 'momflow', 'Special dance classes for mothers with their babies (3-24 months). Strengthen your bond while getting back into movement in a supportive environment.', 'Dance classes for mothers with babies - strengthen bonds through movement.', 20.00, 28.00, 60, 12, 'beginner', ARRAY['Mother-baby bonding', 'Postnatal fitness', 'Community support', 'Baby-safe environment', 'Flexible participation'], 'One1Vibe Studio Berlin', true),

('MomFlow Private Sessions', 'momflow-private', 'momflow', 'One-on-one MomFlow sessions tailored to your specific needs and your baby''s schedule. Perfect for new mothers wanting personalized attention.', 'Private MomFlow sessions for personalized mother-baby dance experience.', 80.00, 120.00, 60, 2, 'beginner', ARRAY['Personalized program', 'Flexible scheduling', 'Individual attention', 'Custom music selection'], 'One1Vibe Studio Berlin or Home visits', true),

-- Flying Steps Academy
('Flying Steps Masterclass', 'flying-steps-masterclass', 'workshops', 'Exclusive masterclasses at the renowned Flying Steps Academy. Learn advanced techniques and performance skills.', 'Elite dance training at Flying Steps Academy with professional standards.', 45.00, 65.00, 120, 25, 'advanced', ARRAY['Professional techniques', 'Performance training', 'Industry insights', 'Networking opportunities'], 'Flying Steps Academy Berlin', true);

-- Insert Celebrity Collaborations
INSERT INTO celebrity_collaborations (celebrity_name, project_name, project_type, role, description, year, is_featured, sort_order) VALUES
('Culcha Candela', 'Various Music Videos', 'music_video', 'Lead Choreographer', 'Created signature dance moves and choreographed multiple music videos for the successful German reggae/dancehall band.', 2019, true, 1),
('Seeed', 'Live Tour Performances', 'live_performance', 'Tour Choreographer', 'Developed and directed choreography for major live performances and tour dates across Europe.', 2020, true, 2),
('Lena Meyer-Landrut', 'Music Video Production', 'music_video', 'Creative Director & Choreographer', 'Choreographed and provided creative direction for music video featuring the Eurovision winner and German pop star.', 2021, true, 3),
('Various Artists', 'Commercial Campaigns', 'commercial', 'Movement Director', 'Provided choreography and movement direction for multiple commercial campaigns featuring German celebrities.', 2022, false, 4);

-- Insert Film Credits
INSERT INTO film_credits (title, role, production_company, director, year, genre, description, is_featured, sort_order) VALUES
('Matrix Resurrections', 'Stunt Performer', 'Warner Bros.', 'Lana Wachowski', 2021, ARRAY['Action', 'Sci-Fi'], 'Performed complex fight sequences and wire work in the highly anticipated fourth Matrix film.', true, 1),
('Gunpowder Milkshake', 'Stunt Coordinator Assistant', 'Studio Babelsberg', 'Navot Papushado', 2021, ARRAY['Action', 'Thriller'], 'Assisted in coordinating high-intensity action sequences for this stylized action thriller.', true, 2),
('The Hunger Games: Mockingjay', 'Stunt Double', 'Lionsgate', 'Francis Lawrence', 2015, ARRAY['Action', 'Adventure'], 'Served as stunt double for key action sequences in the final Hunger Games installment.', true, 3),
('Unknown Action Film', 'Fight Choreographer', 'Independent', 'Various', 2020, ARRAY['Action'], 'Choreographed fight sequences for independent action productions.', false, 4);

-- Insert Events
INSERT INTO events (title, description, event_type, date, time, duration_minutes, location, max_participants, price, is_featured, is_published) VALUES
('Afro Fusion Workshop Weekend', 'Intensive weekend workshop exploring traditional and contemporary African dance styles. Perfect for dancers looking to expand their cultural knowledge and movement vocabulary.', 'workshop', '2024-09-15', '10:00', 180, 'One1Vibe Studio Berlin', 25, 85.00, true, true),
('MomFlow Community Event', 'Special community gathering for MomFlow participants. Includes group classes, baby play time, and networking for new mothers.', 'workshop', '2024-09-22', '14:00', 120, 'One1Vibe Studio Berlin', 20, 15.00, true, true),
('Hollywood Stunt Workshop', 'Learn real Hollywood stunt techniques from someone who''s worked on major films. Includes safety training and basic choreography.', 'masterclass', '2024-10-05', '13:00', 240, 'Professional Stunt Studio Berlin', 12, 150.00, true, true),
('Ü30 Dance Party', 'Monthly social dance event for the Ü30 community. Mixed styles, great music, and a welcoming atmosphere for all levels.', 'performance', '2024-09-28', '19:00', 150, 'One1Vibe Studio Berlin', 40, 20.00, false, true);

-- Insert Blog Posts
INSERT INTO blog_posts (title, slug, excerpt, content, category, tags, is_published, is_featured, published_at) VALUES
('Behind the Scenes: Matrix Resurrections Stunt Work', 'matrix-resurrections-behind-scenes', 'Go behind the scenes of my work on Matrix Resurrections and discover what it takes to perform stunts for Hollywood blockbusters.', 'Working on Matrix Resurrections was a dream come true. The level of precision, safety, and creativity required for each stunt sequence is incredible...', 'stunts', ARRAY['Matrix', 'Hollywood', 'Behind the Scenes', 'Stunt Work'], true, true, '2024-01-15 10:00:00+01'),

('The Cultural Significance of Afro Fusion Dance', 'afro-fusion-cultural-significance', 'Exploring the rich cultural heritage behind Afro Fusion dance and why it''s more than just movement - it''s storytelling.', 'Afro Fusion dance is not just about the steps - it''s about connecting with centuries of cultural expression and storytelling...', 'choreography', ARRAY['Afro Fusion', 'Culture', 'Dance History', 'African Heritage'], true, true, '2024-02-01 14:30:00+01'),

('MomFlow: Why Dancing with Your Baby Matters', 'momflow-dancing-with-baby', 'Discover the physical and emotional benefits of MomFlow classes for both mother and baby, backed by research and real experiences.', 'The bond between mother and child is strengthened through movement. MomFlow classes provide a unique opportunity...', 'lifestyle', ARRAY['MomFlow', 'Parenting', 'Bonding', 'Health'], true, false, '2024-02-20 09:15:00+01'),

('From Flying Steps to One1Vibe: My Journey as a CEO', 'flying-steps-to-one1vibe-journey', 'The story of how I transitioned from performing with Flying Steps to becoming the CEO of One1Vibe Studio Berlin.', 'My journey from dancer to CEO has been filled with challenges, growth, and incredible opportunities...', 'behind_scenes', ARRAY['Entrepreneurship', 'Dance Business', 'Personal Story', 'Berlin'], true, false, '2024-03-10 16:45:00+01');

-- Insert Contact Messages (sample)
INSERT INTO contact_messages (name, email, phone, subject, message, service_interest, is_read) VALUES
('Sarah Schmidt', 'sarah.schmidt@email.com', '+49 30 12345678', 'MomFlow Class Inquiry', 'Hi Bella, I''m a new mother interested in joining MomFlow classes. My baby is 6 months old. When is the next available session?', 'MomFlow Classes', false),
('Music Video Production GmbH', 'contact@mvp-berlin.com', '+49 30 87654321', 'Choreography for Music Video', 'We are producing a music video for an upcoming German artist and would like to discuss choreography services. The project has a budget of €5000.', 'Celebrity Choreography', true),
('Thomas Weber', 'thomas.w@email.com', NULL, 'Ü30 Workshop Question', 'I''m 35 and have never danced before. Are your Ü30 workshops really suitable for complete beginners?', 'Ü30 Dance Workshops', false);
