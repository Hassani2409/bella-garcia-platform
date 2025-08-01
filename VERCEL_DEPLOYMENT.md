# 🚀 Vercel Deployment Guide - Bella Garcia Platform

## 📋 Pre-Deployment Checklist

### ✅ Bereits erledigt:
- [x] Dependencies installiert
- [x] Build erfolgreich getestet
- [x] Next.js Konfiguration optimiert
- [x] Vercel.json konfiguriert

### 🔄 Vor Deployment:
- [ ] GitHub Repository erstellen/aktualisieren
- [ ] Environment Variables sammeln
- [ ] Supabase Projekt erstellen
- [ ] OpenAI API Key bereit

## 🔧 Schritt-für-Schritt Deployment

### 1. GitHub Repository vorbereiten

```bash
# Falls noch nicht initialisiert
git init
git add .
git commit -m "Initial commit - Bella Garcia Platform"

# Repository zu GitHub pushen
git branch -M main
git remote add origin https://github.com/yourusername/bella-garcia-platform.git
git push -u origin main
```

### 2. Supabase Projekt erstellen

1. Gehe zu [supabase.com](https://supabase.com)
2. Klicke "New Project"
3. Wähle Organisation und gib Projektname ein: `bella-garcia-platform`
4. Wähle Region: `Europe (Frankfurt)` für beste Performance
5. Erstelle starkes Passwort
6. Warte auf Projekt-Erstellung (2-3 Minuten)

### 3. Supabase Datenbank einrichten

1. Öffne dein Supabase Dashboard
2. Gehe zu "SQL Editor"
3. Erstelle neue Query
4. Kopiere den kompletten Inhalt von `supabase/schema.sql`
5. Führe die Query aus
6. Erstelle eine weitere Query für `supabase/sample-data.sql`
7. Führe auch diese aus

### 4. API Keys sammeln

#### Supabase Keys:
1. Gehe zu Settings > API
2. Kopiere:
   - Project URL: `https://xxx.supabase.co`
   - Anon public key: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
   - Service role key: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

#### OpenAI API Key:
1. Gehe zu [platform.openai.com](https://platform.openai.com)
2. Erstelle neuen API Key
3. Kopiere: `sk-...`

### 5. Vercel Deployment

1. Gehe zu [vercel.com](https://vercel.com)
2. Klicke "New Project"
3. Importiere dein GitHub Repository
4. Konfiguriere das Projekt:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (Standard)
   - **Build Command**: `npm run build` (Standard)
   - **Output Directory**: `.next` (Standard)
   - **Install Command**: `npm install` (Standard)

### 6. Environment Variables in Vercel setzen

Gehe zu Project Settings > Environment Variables und füge hinzu:

```
NEXT_PUBLIC_SUPABASE_URL = https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
OPENAI_API_KEY = sk-...
NEXT_PUBLIC_SITE_URL = https://your-project.vercel.app
```

**Wichtig**: Setze alle auf "Production", "Preview" und "Development"

### 7. Deployment starten

1. Klicke "Deploy"
2. Warte auf Build (2-3 Minuten)
3. Bei Erfolg: ✅ Deployment erfolgreich!

## 🔍 Nach dem Deployment testen

### 1. Basis-Funktionalität
- [ ] Website lädt: `https://your-project.vercel.app`
- [ ] Alle Seiten erreichbar
- [ ] Navigation funktioniert
- [ ] Responsive Design funktioniert

### 2. AI-Chat testen
- [ ] Chat-Button erscheint
- [ ] Chat öffnet sich
- [ ] Nachricht senden funktioniert
- [ ] AI antwortet korrekt

### 3. Supabase-Integration
- [ ] Keine Datenbankfehler in Console
- [ ] Daten werden geladen (falls implementiert)

## 🚨 Troubleshooting

### Build Fehler
```
Error: Environment variable not found
```
**Lösung**: Überprüfe Environment Variables in Vercel

### API Fehler
```
OpenAI API Error
```
**Lösung**: 
- Überprüfe API Key
- Stelle sicher, dass Guthaben vorhanden ist

### Supabase Fehler
```
Invalid API key
```
**Lösung**:
- Überprüfe Supabase URL und Keys
- Stelle sicher, dass Projekt aktiv ist

## 🎯 Nach erfolgreichem Deployment

### 1. Custom Domain (optional)
1. Gehe zu Project Settings > Domains
2. Füge deine Domain hinzu
3. Konfiguriere DNS bei deinem Provider

### 2. Analytics einrichten
1. Vercel Analytics automatisch aktiv
2. Optional: Google Analytics hinzufügen

### 3. Performance optimieren
- Vercel Edge Functions nutzen
- Image Optimization ist automatisch aktiv
- CDN ist automatisch konfiguriert

## 📊 Monitoring

### Vercel Dashboard
- Build Logs überwachen
- Performance Metrics checken
- Error Tracking aktivieren

### Supabase Dashboard
- Database Performance
- API Usage
- Storage Usage

## 🔄 Updates deployen

Jeder Push zu `main` löst automatisch neues Deployment aus:

```bash
git add .
git commit -m "Update: description"
git push origin main
```

## 📞 Support

Bei Problemen:
1. Vercel Build Logs checken
2. Browser Console für Fehler prüfen
3. Supabase Logs überprüfen
4. Environment Variables validieren
