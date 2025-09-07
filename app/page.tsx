"use client"
import Header from "@/components/sections/Header"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import CoursesSection from "@/components/sections/CoursesSection"
import StatsSection from "@/components/sections/StatsSection"
import ProcessSection from "@/components/sections/ProcessSection"
import GallerySection from "@/components/sections/GallerySection"
import PartnersSection from "@/components/sections/PartnersSection"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/sections/Footer"
import { ThemeProvider } from "@/components/providers/ThemeProvider"

export default function HomePage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <StatsSection />
        <ProcessSection />
        <GallerySection />
        <PartnersSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
