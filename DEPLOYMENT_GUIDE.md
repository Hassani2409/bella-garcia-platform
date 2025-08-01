# 🚀 Bella Garcia Platform - Deployment Guide

## 📋 Deployment Checklist

### ✅ Completed
- [x] Dependencies installiert (Supabase, OpenAI)
- [x] Next.js Konfiguration optimiert
- [x] Build erfolgreich getestet

### 🔄 Noch zu erledigen
- [ ] Environment Variables konfigurieren
- [ ] Supabase Datenbank einrichten
- [ ] Vercel Deployment vorbereiten
- [ ] Testing und Qualitätssicherung

## 🔧 Environment Variables Setup

### 1. Supabase Setup
1. Gehe zu [supabase.com](https://supabase.com) und erstelle ein neues Projekt
2. Notiere dir:
   - Project URL: `https://your-project-id.supabase.co`
   - Anon Key: `eyJ...` (aus Settings > API)
   - Service Role Key: `eyJ...` (aus Settings > API)

### 2. OpenAI Setup
1. Gehe zu [platform.openai.com](https://platform.openai.com)
2. Erstelle einen API Key
3. Notiere dir: `sk-...`

### 3. .env.local konfigurieren
Ersetze die Platzhalter in `.env.local`:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# OpenAI Configuration
OPENAI_API_KEY=sk-...

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Email Configuration (optional)
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your_email@gmail.com
EMAIL_SERVER_PASSWORD=your_app_password
EMAIL_FROM=bella@bellagarcia.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 🗄️ Supabase Datenbank Setup

### 1. Schema erstellen
1. Öffne dein Supabase Dashboard
2. Gehe zu SQL Editor
3. Führe den Inhalt von `supabase/schema.sql` aus

### 2. Sample Data einfügen (optional)
1. Führe den Inhalt von `supabase/sample-data.sql` aus

## 🚀 Vercel Deployment

### 1. Repository vorbereiten
```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

### 2. Vercel Setup
1. Gehe zu [vercel.com](https://vercel.com)
2. Importiere dein GitHub Repository
3. Setze die Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `OPENAI_API_KEY`
   - `NEXT_PUBLIC_SITE_URL` (deine Vercel URL)

### 3. Deploy
Vercel deployed automatisch bei jedem Push zu main.

## 🧪 Testing Checklist

### Lokales Testing
- [ ] `npm run dev` startet ohne Fehler
- [ ] Alle Seiten laden korrekt
- [ ] AI-Chat funktioniert (benötigt OpenAI API Key)
- [ ] Supabase-Verbindung funktioniert

### Production Testing
- [ ] Build erfolgreich: `npm run build`
- [ ] Production Server: `npm run start`
- [ ] Alle Features funktionieren

## 🔍 Häufige Probleme

### Build Fehler
- ESLint/TypeScript Fehler sind temporär deaktiviert
- Bei Problemen: `npm run build` erneut ausführen

### API Fehler
- Überprüfe Environment Variables
- Stelle sicher, dass API Keys gültig sind

### Supabase Verbindung
- Überprüfe Project URL und Keys
- Stelle sicher, dass RLS Policies korrekt sind

## 📞 Support

Bei Problemen:
1. Überprüfe die Console für Fehlermeldungen
2. Teste Environment Variables lokal
3. Überprüfe Supabase Dashboard für Datenbankfehler

## 🎯 Nächste Schritte nach Deployment

1. Domain konfigurieren
2. SSL-Zertifikat einrichten (automatisch bei Vercel)
3. Analytics einrichten
4. SEO optimieren
5. Performance monitoring einrichten
