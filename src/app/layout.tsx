import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AIAssistant from "@/components/ui/AIAssistant";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bella Garcia - Professional Choreographer, Stuntwoman & CEO",
  description: "Professional choreographer with celebrity collaborations (Culcha Candela, Seeed, Lena Meyer-Landrut), Hollywood stunt experience (Matrix Resurrections, Gunpowder Milkshake), and CEO of One1Vibe Studio Berlin. Offering choreography, stunt work, MomFlow classes, Afro Fusion, and workshops.",
  keywords: ["choreographer", "stunt work", "Berlin", "dance classes", "celebrity choreography", "MomFlow", "Afro Fusion", "One1Vibe Studio", "Bella Garcia"],
  authors: [{ name: "Bella Garcia" }],
  creator: "Bella Garcia",
  publisher: "One1Vibe Studio Berlin",
  openGraph: {
    title: "Bella Garcia - Professional Choreographer, Stuntwoman & CEO",
    description: "Professional choreographer with celebrity collaborations, Hollywood stunt experience, and CEO of One1Vibe Studio Berlin.",
    url: "https://bellagarcia.com",
    siteName: "Bella Garcia",
    images: [
      {
        url: "/images/bella-garcia-og.jpg",
        width: 1200,
        height: 630,
        alt: "Bella Garcia - Professional Choreographer and Stuntwoman",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bella Garcia - Professional Choreographer, Stuntwoman & CEO",
    description: "Professional choreographer with celebrity collaborations, Hollywood stunt experience, and CEO of One1Vibe Studio Berlin.",
    images: ["/images/bella-garcia-twitter.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-32">
          {children}
        </main>
        <Footer />
        <AIAssistant />
      </body>
    </html>
  );
}
