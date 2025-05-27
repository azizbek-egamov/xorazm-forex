"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import {
  Phone,
  GraduationCap,
  Users,
  Shield,
  MessageCircle,
  Play,
  X,
  Smile,
  UserCheck,
  Check,
  Handshake,
  FileText,
  Code,
  MessageSquare,
  Eye,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Instagram,
  Send,
  Youtube,
  Clock,
  Star,
  ArrowRight,
  Sun,
  Moon,
  Menu,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isThemeChanging, setIsThemeChanging] = useState(false)

  const toggleTheme = () => {
    setIsThemeChanging(true)
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")

    // Reset theme changing state after animation
    setTimeout(() => {
      setIsThemeChanging(false)
    }, 200)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const galleryImages = [
    {
      src: "/images/gallery-1.png",
      alt: "Argentina jamoasi - Xorazm Forex futbol klubi",
      title: "Argentina jamoasi",
    },
    {
      src: "/images/gallery-2.png",
      alt: "Lions jamoasi - Xorazm Forex futbol klubi",
      title: "Lions jamoasi",
    },
    {
      src: "/images/gallery-3.png",
      alt: "Rasmiy tadbirda ishtirok",
      title: "Rasmiy tadbirda ishtirok",
    },
    {
      src: "/images/gallery-4.png",
      alt: "Ofisda ish jarayoni",
      title: "Ofisda ish jarayoni",
    },
    {
      src: "/images/gallery-5.png",
      alt: "Televideniyeda intervyu",
      title: "Televideniyeda intervyu",
    },
  ]

  const openGallery = (index: number) => {
    setCurrentImageIndex(index)
    setIsGalleryOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", phone: "", message: "" })
    // Show success message or redirect
    alert("Murojaatingiz muvaffaqiyatli yuborildi!")
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (isGalleryOpen) {
        if (event.key === "ArrowRight") {
          nextImage()
        } else if (event.key === "ArrowLeft") {
          previousImage()
        } else if (event.key === "Escape") {
          setIsGalleryOpen(false)
        }
      }
    }

    document.addEventListener("keydown", handleKeyPress)
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [isGalleryOpen])

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isVideoOpen) {
        setIsVideoOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscKey)
    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [isVideoOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  return (
    <>
      <div
        className={`transition-colors duration-200 ${isDarkMode ? "dark" : ""} ${isThemeChanging ? "pointer-events-none" : ""}`}
      >
        {/* Premium Responsive Header */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl border-b transition-all duration-200 ${
            isDarkMode
              ? "bg-gray-950/95 border-gray-800/60 shadow-2xl shadow-black/30"
              : "bg-white/95 border-gray-200 shadow-sm"
          }`}
        >
          <div className="flex items-center justify-between p-0 lg:px-10">
            {/* Logo Section */}
            <div className="flex items-center">
              <div
                className={`p-2 rounded-2xl transition-all duration-200 ${
                  isDarkMode ? "bg-gray-900/60" : "bg-white/80"
                }`}
              >
                <a href="/">
                  <Image
                    src="/images/xorazm-logo.png"
                    alt="Xorazm Forex Logo"
                    width={150}
                    height={150}
                    className={`h-12 lg:h-16 w-auto transition-all duration-200 ${
                      isDarkMode ? "brightness-0 invert" : "brightness-100"
                    }`}
                    priority
                  />
                </a>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav
              className={`hidden lg:flex items-center space-x-6 text-sm font-medium ${
                isDarkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              <button
                onClick={() => scrollToSection("about-us")}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 ${
                  isDarkMode ? "hover:bg-gray-800/60 hover:text-red-400" : "hover:text-red-600 hover:bg-red-50"
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Akademiyamiz haqida</span>
              </button>
              <button
                onClick={() => scrollToSection("courses")}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 ${
                  isDarkMode ? "hover:bg-gray-800/60 hover:text-red-400" : "hover:text-red-600 hover:bg-red-50"
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Kurslarimiz</span>
              </button>
              <button
                onClick={() => scrollToSection("how-we-work")}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 ${
                  isDarkMode ? "hover:bg-gray-800/60 hover:text-red-400" : "hover:text-red-600 hover:bg-red-50"
                }`}
              >
                <Shield className="w-4 h-4" />
                <span>Hamkorlik</span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 ${
                  isDarkMode ? "hover:bg-gray-800/60 hover:text-red-400" : "hover:text-red-600 hover:bg-red-50"
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Aloqa</span>
              </button>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Phone Number - Hidden on mobile */}
              <div
                className={`hidden md:flex items-center space-x-2 text-sm px-4 py-2 rounded-xl ${
                  isDarkMode ? "text-gray-300 bg-gray-800/40" : "text-gray-600"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>+998 (50) 001 29 59</span>
              </div>

              {/* Premium Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                disabled={isThemeChanging}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-md ${
                  isDarkMode
                    ? "bg-gray-800/80 hover:bg-gray-700/80 shadow-lg shadow-black/20"
                    : "bg-gray-100 hover:bg-gray-200"
                } ${isThemeChanging ? "opacity-50 cursor-not-allowed" : ""}`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-600" />}
              </button>

              {/* Bonus Button - Hidden on small mobile */}
              <Button
                className={`hidden sm:flex px-4 lg:px-6 py-3 font-semibold rounded-2xl transition-all duration-200 hover:scale-105 text-sm lg:text-base ${
                  isDarkMode ? "bg-red-600 hover:bg-red-500 shadow-lg shadow-red-900/30" : "bg-red-600 hover:bg-red-700"
                } text-white`}
              >
                30$ bonus →
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className={`lg:hidden w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200 ${
                  isDarkMode
                    ? "bg-gray-800/60 hover:bg-gray-700/60 text-gray-200"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                }`}
                aria-label="Toggle mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden transition-all duration-200 overflow-hidden ${
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } ${isDarkMode ? "bg-gray-950/98 border-t border-gray-800" : "bg-white/98 border-t border-gray-200"}`}
          >
            <nav className="p-4 space-y-2">
              <button
                onClick={() => scrollToSection("about-us")}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isDarkMode
                    ? "hover:bg-gray-800/60 text-gray-200 hover:text-red-400"
                    : "hover:bg-red-50 text-gray-700 hover:text-red-600"
                }`}
              >
                <GraduationCap className="w-5 h-5" />
                <span>Akademiyamiz haqida</span>
              </button>
              <button
                onClick={() => scrollToSection("courses")}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isDarkMode
                    ? "hover:bg-gray-800/60 text-gray-200 hover:text-red-400"
                    : "hover:bg-red-50 text-gray-700 hover:text-red-600"
                }`}
              >
                <Users className="w-5 h-5" />
                <span>Kurslarimiz</span>
              </button>
              <button
                onClick={() => scrollToSection("how-we-work")}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isDarkMode
                    ? "hover:bg-gray-800/60 text-gray-200 hover:text-red-400"
                    : "hover:bg-red-50 text-gray-700 hover:text-red-600"
                }`}
              >
                <Shield className="w-5 h-5" />
                <span>Hamkorlik</span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isDarkMode
                    ? "hover:bg-gray-800/60 text-gray-200 hover:text-red-400"
                    : "hover:bg-red-50 text-gray-700 hover:text-red-600"
                }`}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Aloqa</span>
              </button>

              {/* Mobile Phone and Bonus */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
                <div
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl ${
                    isDarkMode ? "bg-gray-800/40 text-gray-300" : "bg-gray-50 text-gray-600"
                  }`}
                >
                  <Phone className="w-5 h-5" />
                  <span>+998 (50) 001 29 59</span>
                </div>
                <Button
                  className={`w-full py-3 font-semibold rounded-xl transition-all duration-200 ${
                    isDarkMode
                      ? "bg-red-600 hover:bg-red-500 shadow-lg shadow-red-900/30"
                      : "bg-red-600 hover:bg-red-700"
                  } text-white`}
                >
                  30$ bonus olish →
                </Button>
              </div>
            </nav>
          </div>
        </header>

        {/* Premium Hero Section */}
        <div
          className={`min-h-screen relative overflow-hidden pt-20 ${
            isDarkMode ? "bg-gradient-to-br from-gray-950 via-black to-gray-950" : "bg-white"
          } text-gray-900 dark:text-gray-100 transition-all duration-200`}
        >
          {/* Premium Background Effects */}
          <div className="absolute inset-0">
            {isDarkMode ? (
              <>
                {/* Animated gradient orbs - darker and more subtle */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-red-900/15 to-red-800/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-gray-900/15 to-red-900/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-950/8 to-gray-950/8 rounded-full blur-3xl"></div>
              </>
            ) : (
              <div className="opacity-5">
                <Image src="/images/trading-bg.jpg" alt="Trading Background" fill className="object-cover" priority />
              </div>
            )}
          </div>

          {/* Premium Glass Overlay */}
          {isDarkMode && (
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 backdrop-blur-sm"></div>
          )}

          {/* Main Content */}
          <main className="relative z-10 flex items-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full max-w-7xl mx-auto">
              {/* Left Content */}
              <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                <div className="space-y-4 lg:space-y-6">
                  {/* Premium Badge */}
                  <div
                    className={`inline-flex items-center space-x-3 px-6 lg:px-8 py-3 lg:py-4 rounded-2xl border shadow-2xl backdrop-blur-md transition-all duration-200 hover:scale-105 ${
                      isDarkMode
                        ? "bg-red-900/80 border-red-800/40 shadow-black/30"
                        : "bg-red-600 border-red-500 shadow-red-600/25"
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full animate-pulse ${isDarkMode ? "bg-white" : "bg-white"}`}></div>
                    <Star className="w-5 lg:w-6 h-5 lg:h-6 text-white" />
                    <span className="text-white font-bold tracking-wide text-sm lg:text-lg">
                      Professional Trading Academy
                    </span>
                  </div>

                  {/* Premium Typography */}
                  <h1
                    className={`text-4xl sm:text-5xl lg:text-7xl font-black leading-tight transition-all duration-200 ${
                      isDarkMode
                        ? "bg-gradient-to-r from-gray-100 via-white to-gray-200 bg-clip-text text-transparent"
                        : "text-gray-900"
                    }`}
                  >
                    Xorazmda professional
                    <br />
                    <span
                      className={`${
                        isDarkMode
                          ? "bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent"
                          : "text-red-600"
                      }`}
                    >
                      treyding kurslari
                    </span>
                  </h1>

                  <p
                    className={`text-lg lg:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 transition-all duration-200 ${
                      isDarkMode ? "text-gray-200" : "text-gray-600"
                    }`}
                  >
                    <span className={`font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>XORAZM FOREX</span> -
                    treyding akademiyasi ko'p yillik tajribaga ega pro treyderlar tomonidan tashkil etilgan va sifatli
                    bilim kafolatlandi!
                  </p>
                </div>

                {/* Premium Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className={`w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-6 text-lg lg:text-xl font-bold transition-all duration-200 hover:scale-105 hover:shadow-2xl ${
                      isDarkMode
                        ? "bg-red-600 hover:bg-red-500 shadow-lg shadow-red-900/30"
                        : "bg-red-600 hover:bg-red-700"
                    } text-white rounded-2xl`}
                  >
                    Treyder bo'lish
                    <ArrowRight className="w-5 lg:w-6 h-5 lg:h-6 ml-2 lg:ml-3" />
                  </Button>

                  {/* Premium Video Button */}
                  <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="lg"
                        className={`w-full sm:w-auto px-6 lg:px-10 py-4 lg:py-6 text-lg lg:text-xl font-bold flex items-center space-x-3 lg:space-x-4 transition-all duration-200 hover:scale-105 rounded-2xl backdrop-blur-md ${
                          isDarkMode
                            ? "border-gray-700 bg-gray-900/60 hover:bg-gray-800/60 text-gray-100 hover:border-red-500"
                            : "border-gray-300 hover:border-red-600 hover:text-red-600"
                        }`}
                      >
                        <div
                          className={`w-12 lg:w-14 h-12 lg:h-14 rounded-2xl flex items-center justify-center ${
                            isDarkMode ? "bg-red-600" : "bg-red-600"
                          }`}
                        >
                          <Play className="w-6 lg:w-7 h-6 lg:h-7 text-white ml-1" fill="currentColor" />
                        </div>
                        <span className="hidden sm:inline">TREYDING NIMA ?</span>
                        <span className="sm:hidden">VIDEO</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent
                      className={`max-w-5xl w-[95vw] p-4 lg:p-8 rounded-3xl border-0 shadow-2xl ${
                        isDarkMode ? "bg-gray-950" : "bg-white"
                      }`}
                    >
                      <button
                        onClick={() => setIsVideoOpen(false)}
                        className={`absolute top-4 lg:top-6 right-4 lg:right-6 z-50 w-12 lg:w-14 h-12 lg:h-14 rounded-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                          isDarkMode
                            ? "bg-gray-800 hover:bg-red-600 text-gray-200 hover:text-white"
                            : "bg-gray-100 hover:bg-red-600 hover:text-white"
                        }`}
                      >
                        <X className="w-6 lg:w-7 h-6 lg:h-7" />
                      </button>

                      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                        <iframe
                          className="absolute top-0 left-0 w-full h-full"
                          src="https://www.youtube.com/embed/VYL5ogu9Vio?autoplay=1"
                          title="Xorazm Forex akademiyasi"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Premium Bonus Button */}
                <Button
                  variant="outline"
                  className={`w-fit mx-auto lg:mx-0 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-2xl transition-all duration-200 hover:scale-105 backdrop-blur-md ${
                    isDarkMode
                      ? "border-gray-700 bg-gray-900/40 hover:bg-gray-800/60 text-gray-200 hover:text-white hover:border-red-500"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  30$ bonus olish →
                </Button>
              </div>

              {/* Right Content - Enhanced Person Image */}
              <div className="flex justify-center lg:justify-end order-first lg:order-last">
                <div className="relative">
                  {/* Premium Glow Effect */}
                  {isDarkMode && (
                    <div className="absolute inset-0 bg-gradient-to-r from-red-900/15 to-red-800/15 rounded-full blur-3xl scale-110"></div>
                  )}

                  <div
                    className={`relative rounded-3xl overflow-hidden ${isDarkMode ? "shadow-2xl shadow-black/20" : ""}`}
                  >
                    <Image
                      src="/images/person.png"
                      alt="Professional Trader"
                      width={500}
                      height={600}
                      className="w-full max-w-xs sm:max-w-sm lg:max-w-lg h-auto relative z-10"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Premium Why Choose Us Section */}
        <section
        id="about-us"
          className={`py-16 lg:py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden ${
            isDarkMode ? "bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900" : "bg-gray-50"
          }`}
        >
          {/* Premium Background Effects for Dark Mode */}
          {isDarkMode && (
            <>
              <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-red-900/8 to-red-800/8 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-gray-900/8 to-red-900/8 rounded-full blur-3xl"></div>
            </>
          )}

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Premium Header */}
            <div className="flex flex-col lg:flex-row items-center justify-between mb-12 lg:mb-16">
              <div className="text-center lg:text-left mb-8 lg:mb-0">
                <h2
                  className={`text-3xl sm:text-4xl lg:text-6xl font-black mb-4 lg:mb-6 transition-all duration-200 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-gray-100 via-white to-gray-200 bg-clip-text text-transparent"
                      : "text-gray-900"
                  }`}
                >
                  Nega bizni tanlashadi?
                </h2>
                <p
                  className={`text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                    isDarkMode ? "text-gray-200" : "text-gray-600"
                  }`}
                >
                  <span
                    className={`font-bold ${
                      isDarkMode
                        ? "bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent"
                        : "text-red-600"
                    }`}
                  >
                    2006-yildan
                  </span>{" "}
                  buyon jahon bozorlarida savdo qilib keluvchi mentorlar nazorati va metodikalari asosida ta'lim olasiz!
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className={`p-4 rounded-3xl ${isDarkMode ? "bg-gray-800/60 backdrop-blur-md" : ""}`}>
                </div>
              </div>
            </div>

            {/* Premium Feature Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Premium Card 1 */}
              <div
                className={`p-6 lg:p-8 rounded-3xl transition-all duration-200 hover:scale-105 hover:-translate-y-2 group ${
                  isDarkMode
                    ? "bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 shadow-2xl shadow-black/20 hover:shadow-red-900/20"
                    : "border-gray-100 bg-white shadow-sm hover:shadow-xl"
                }`}
              >
                <div className="mb-6">
                  <div
                    className={`w-16 lg:w-20 h-16 lg:h-20 rounded-3xl flex items-center justify-center mb-4 lg:mb-6 transition-all duration-200 group-hover:scale-110 ${
                      isDarkMode ? "bg-red-600 shadow-lg shadow-red-900/40" : "bg-red-600"
                    }`}
                  >
                    <GraduationCap className="w-8 lg:w-10 h-8 lg:h-10 text-white" />
                  </div>
                  <h3
                    className={`text-xl lg:text-2xl font-bold mb-4 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}
                  >
                    Bilim sifati kafolatlanadi!
                  </h3>
                </div>
                <p className={`leading-relaxed ${isDarkMode ? "text-gray-200" : "text-gray-600"}`}>
                  Bizda aniq metodikalarga asoslangan, soha uchun barcha kerakli bo'ladigan bilimlarning barchasi
                  darslarimizdagi o'rgatib boriladi - sohani to'liq o'rganasiz!
                </p>
              </div>

              {/* Premium Card 2 */}
              <div
                className={`p-6 lg:p-8 rounded-3xl transition-all duration-200 hover:scale-105 hover:-translate-y-2 group ${
                  isDarkMode
                    ? "bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 shadow-2xl shadow-black/20 hover:shadow-red-900/20"
                    : "border-gray-100 bg-white shadow-sm hover:shadow-xl"
                }`}
              >
                <div className="mb-6">
                  <div
                    className={`w-16 lg:w-20 h-16 lg:h-20 rounded-3xl flex items-center justify-center mb-4 lg:mb-6 transition-all duration-200 group-hover:scale-110 ${
                      isDarkMode ? "bg-red-600 shadow-lg shadow-red-900/40" : "bg-red-600"
                    }`}
                  >
                    <Smile className="w-8 lg:w-10 h-8 lg:h-10 text-white" />
                  </div>
                  <h3
                    className={`text-xl lg:text-2xl font-bold mb-4 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}
                  >
                    Individuallik
                  </h3>
                </div>
                <p className={`leading-relaxed ${isDarkMode ? "text-gray-200" : "text-gray-600"}`}>
                  Har bir o'quvchimizga individual yondashgan holda quruhdasilarining bilim darajalari bir xil tarzda
                  oshirib boriladi.
                </p>
              </div>

              {/* Premium Card 3 */}
              <div
                className={`p-6 lg:p-8 rounded-3xl transition-all duration-200 hover:scale-105 hover:-translate-y-2 group md:col-span-2 lg:col-span-1 ${
                  isDarkMode
                    ? "bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 shadow-2xl shadow-black/20 hover:shadow-red-900/20"
                    : "border-gray-100 bg-white shadow-sm hover:shadow-xl"
                }`}
              >
                <div className="mb-6">
                  <div
                    className={`w-16 lg:w-20 h-16 lg:h-20 rounded-3xl flex items-center justify-center mb-4 lg:mb-6 transition-all duration-200 group-hover:scale-110 ${
                      isDarkMode ? "bg-red-600 shadow-lg shadow-red-900/40" : "bg-red-600"
                    }`}
                  >
                    <UserCheck className="w-8 lg:w-10 h-8 lg:h-10 text-white" />
                  </div>
                  <h3
                    className={`text-xl lg:text-2xl font-bold mb-4 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}
                  >
                    Jamoa
                  </h3>
                </div>
                <p className={`leading-relaxed ${isDarkMode ? "text-gray-200" : "text-gray-600"}`}>
                  Treyderlarimiz uchun barcha kerakli imkoniyatlarni yaratgan holda ularga investitsiyalar qo'lga
                  kiritishda ko'maklashib savdo zonalarimizda biz bilan birga savdo-qilish imkoniyatlarini beramiz
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Pricing Section */}
        <section
          id="courses"
          className={`relative py-16 lg:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden ${
            isDarkMode ? "bg-gradient-to-br from-gray-950 via-black to-gray-950" : "bg-white"
          }`}
        >
          {/* Premium Background Effects */}
          {isDarkMode && (
            <>
              <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-red-900/10 to-red-800/8 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-gray-900/8 to-red-900/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </>
          )}

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Premium Header */}
            <div className="text-center mb-12 lg:mb-16">
              <h2
                className={`text-3xl sm:text-4xl lg:text-6xl font-black mb-4 transition-all duration-200 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-gray-100 via-white to-gray-200 bg-clip-text text-transparent"
                    : "text-gray-900"
                }`}
              >
                O'quv dasturlarimiz haqida
              </h2>
            </div>

            {/* Premium Pricing Cards */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {/* START Plan - Premium */}
              <div
                className={`p-6 lg:p-8 rounded-3xl transition-all duration-200 hover:scale-105 hover:-translate-y-2 group ${
                  isDarkMode
                    ? "bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 shadow-2xl shadow-black/20 hover:shadow-red-900/20"
                    : "border-gray-200 bg-white shadow-sm hover:shadow-xl"
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>START</h3>
                  <p className={`text-sm mb-6 ${isDarkMode ? "text-gray-200" : "text-gray-600"}`}>
                    0 dan o'rgatiladigan boshlang'ich treyding kurslarimiz, 5-10 kishilik guruhlarda bo'lib o'tadi.
                  </p>

                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center mr-3 ${
                          isDarkMode ? "bg-gray-800" : "bg-gray-900"
                        }`}
                      >
                        <span className="text-white font-bold">$</span>
                      </div>
                      <div>
                        <div className="text-red-500 line-through text-lg">6 000 000 UZS</div>
                        <div
                          className={`text-2xl font-bold ${
                            isDarkMode
                              ? "bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent"
                              : "text-red-600"
                          }`}
                        >
                          5 000 000 UZS
                        </div>
                      </div>
                    </div>
                    <p className={`text-xs ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>
                      birinchi 5 ta shartnomaga 1 min so'm chegirma
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                      Indikatorlar 1 ta 🔥
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                      VIP guruhimizga a'zolik ✅
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                      Strategiyalar 5ta 🔥
                    </span>
                  </div>
                </div>

                <Button
                  className={`w-full py-4 font-semibold rounded-2xl transition-all duration-200 hover:scale-105 ${
                    isDarkMode
                      ? "bg-red-600 hover:bg-red-500 shadow-lg shadow-red-900/40"
                      : "bg-red-600 hover:bg-red-700"
                  } text-white`}
                >
                  START kursiga yozilish →
                </Button>
              </div>

              {/* PRO Plan - Premium with special styling */}
              <div
                className={`p-6 lg:p-8 rounded-3xl transition-all duration-200 hover:scale-105 hover:-translate-y-2 group relative ${
                  isDarkMode
                    ? "bg-gray-900/95 backdrop-blur-xl border-2 border-red-800/60 shadow-2xl shadow-red-900/30"
                    : "bg-white border-2 border-red-200 shadow-lg hover:shadow-xl"
                }`}
              >
                <div
                  className={`absolute top-4 right-4 px-4 py-2 rounded-2xl text-xs font-bold ${
                    isDarkMode ? "bg-red-600 text-white shadow-lg shadow-red-900/40" : "bg-red-600 text-white"
                  }`}
                >
                  POPULAR
                </div>

                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>PRO</h3>
                  <p className={`text-sm mb-6 ${isDarkMode ? "text-gray-200" : "text-gray-600"}`}>
                    Katta ustoz, Ko'p yillik tajribaga ega mentorimiz o'z bilimlarini beradigan, 1 yarim oylik kursimiz.
                  </p>

                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center mr-3 ${
                          isDarkMode ? "bg-gray-800" : "bg-gray-900"
                        }`}
                      >
                        <span className="text-white font-bold">$</span>
                      </div>
                      <div
                        className={`text-2xl font-bold ${
                          isDarkMode
                            ? "bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent"
                            : "text-red-600"
                        }`}
                      >
                        37 000 000 UZS
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                      Strategiyalar 5ta 🔥
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>Indikatorlar 🔥</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>Robotlar 4ta🔥</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                      VIP Moliyaviy maslahatlar ✅
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                      Individual darslar ✅
                    </span>
                  </div>
                </div>

                <Button
                  className={`w-full py-4 font-semibold rounded-2xl transition-all duration-200 hover:scale-105 ${
                    isDarkMode
                      ? "bg-red-600 hover:bg-red-500 shadow-lg shadow-red-900/40"
                      : "bg-red-600 hover:bg-red-700"
                  } text-white`}
                >
                  PRO kursiga yozilish →
                </Button>
              </div>

              {/* ZETA Plan - Premium */}
              <div
                className={`p-6 lg:p-8 rounded-3xl transition-all duration-200 hover:scale-105 hover:-translate-y-2 group ${
                  isDarkMode
                    ? "bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 shadow-2xl shadow-black/20 hover:shadow-red-900/20"
                    : "border-gray-200 bg-white shadow-sm hover:shadow-xl"
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>ZETA</h3>
                  <p className={`text-sm mb-6 ${isDarkMode ? "text-gray-200" : "text-gray-600"}`}>
                    25 kun START kurslari 5 kun PRO kurslari va treyding klubga yo'llanma!
                  </p>

                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center mr-3 ${
                          isDarkMode ? "bg-gray-800" : "bg-gray-900"
                        }`}
                      >
                        <span className="text-white font-bold">$</span>
                      </div>
                      <div
                        className={`text-2xl font-bold ${
                          isDarkMode
                            ? "bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent"
                            : "text-red-600"
                        }`}
                      >
                        10 000 000 UZS
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                      Strategiyalar 3ta 🔥
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                      100$ gift card 🔥
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>Robot 1 ta 🔥</span>
                  </div>
                </div>

                <Button
                  className={`w-full py-4 font-semibold rounded-2xl transition-all duration-200 hover:scale-105 ${
                    isDarkMode
                      ? "bg-red-600 hover:bg-red-500 shadow-lg shadow-red-900/40"
                      : "bg-red-600 hover:bg-red-700"
                  } text-white`}
                >
                  ZETA kursiga yozilish →
                </Button>
              </div>

              {/* MAKTAB Plan - Premium */}
              <div
                className={`p-6 lg:p-8 rounded-3xl transition-all duration-200 hover:scale-105 hover:-translate-y-2 group ${
                  isDarkMode
                    ? "bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 shadow-2xl shadow-black/20 hover:shadow-red-900/20"
                    : "border-gray-200 bg-white shadow-sm hover:shadow-xl"
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>MAKTAB</h3>
                  <h4 className={`text-sm font-semibold mb-4 ${isDarkMode ? "text-gray-200" : "text-gray-600"}`}>
                    (MAXSUS TAKLIF)
                  </h4>
                  <p className={`text-sm mb-6 ${isDarkMode ? "text-gray-200" : "text-gray-600"}`}>
                    Treyding 0 dan boshlang'ich kurs 16-21 yoshdaglar uchun 2 oy davomida bilim va tajriba orttirarsiz
                  </p>

                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center mr-3 ${
                          isDarkMode ? "bg-gray-800" : "bg-gray-900"
                        }`}
                      >
                        <span className="text-white font-bold">$</span>
                      </div>
                      <div
                        className={`text-2xl font-bold ${
                          isDarkMode
                            ? "bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent"
                            : "text-red-600"
                        }`}
                      >
                        300 $
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>10$ deposit 🔥</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>Indikatorlar 🔥</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    <span className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>Robot 🔥</span>
                  </div>
                </div>

                <Button
                  className={`w-full py-4 font-semibold rounded-2xl transition-all duration-200 hover:scale-105 ${
                    isDarkMode
                      ? "bg-red-600 hover:bg-red-500 shadow-lg shadow-red-900/40"
                      : "bg-red-600 hover:bg-red-700"
                  } text-white`}
                >
                  School kursiga yozilish →
                </Button>

                <p className={`text-xs text-center mt-3 ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>
                  Darslar 31-maydan boshlandi, 30-ta shartnoma ajratilgan
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className={`py-16 px-4 sm:px-6 lg:px-12 ${isDarkMode ? "bg-gray-950 text-white" : "bg-gray-900"}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
              {/* Stat 1 */}
              <div className="space-y-2">
                <div className="text-4xl lg:text-6xl font-bold text-red-500">18</div>
                <div className="text-white text-sm lg:text-lg">yillik tajriba</div>
              </div>

              {/* Stat 2 */}
              <div className="space-y-2">
                <div className="text-4xl lg:text-6xl font-bold text-red-500">50+</div>
                <div className="text-white text-sm lg:text-lg">Investorlar klubidagi hisoblari soni</div>
              </div>

              {/* Stat 3 */}
              <div className="space-y-2">
                <div className="text-4xl lg:text-6xl font-bold text-red-500">500+</div>
                <div className="text-white text-sm lg:text-lg">O'quvchilarimiz soni</div>
              </div>

              {/* Stat 4 */}
              <div className="space-y-2">
                <div className="text-4xl lg:text-6xl font-bold text-red-500">1300+</div>
                <div className="text-white text-sm lg:text-lg">Umumiy mijozlarimiz soni</div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section
          id="how-we-work"
          className={`py-16 lg:py-20 px-4 sm:px-6 lg:px-12 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 lg:mb-16">
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Biz qanday ishlaymiz?
              </h2>
            </div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Step 1 */}
              <div
                className={`p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center ${
                  isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
                }`}
              >
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>Tanishuv</h3>
                <p className={`leading-relaxed ${isDarkMode ? "text-gray-200" : "text-gray-600"}`}>
                  Soha bilan sizni yana ofislarimizda yoki telefon orqali tanishtirib, hohishingizga ko'ra shartnoma
                  tuzish jarayoniga o'tiladi!
                </p>
              </div>

              {/* Step 2 */}
              <div
                className={`p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center ${
                  isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
                }`}
              >
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                  Shartnoma
                </h3>
                <p className={`leading-relaxed ${isDarkMode ? "text-gray-200" : "text-gray-600"}`}>
                  Tasdiqlangan o'quv dasturlarimizni tanlaganingizdan keyin shartnoma tuzamiz va uni rasmiylashtirramiz
                </p>
              </div>

              {/* Step 3 */}
              <div
                className={`p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center ${
                  isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
                }`}
              >
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                  O'rganish
                </h3>
                <p className={`leading-relaxed ${isDarkMode ? "text-gray-200" : "text-gray-600"}`}>
                  Darhol o'quvchilar guruhlariga bo'linadi va dars jarayonlari 0 dan boshlanadi!
                </p>
              </div>

              {/* Step 4 */}
              <div
                className={`p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center ${
                  isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
                }`}
              >
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                  Siz treydersiz
                </h3>
                <p className={`leading-relaxed ${isDarkMode ? "text-gray-200" : "text-gray-600"}`}>
                  1 oy o'tar otmas siz bilimlaringiz oshishini sezasiz va buning natijasida sohaga sho'ng'iy boshlaysiz
                  va kurslarimiz ohirida sizga sertifikatlar beriladi, treyderlik faoliyatingiz boshlanadi!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section
          className={`py-16 lg:py-20 px-4 sm:px-6 lg:px-12 ${isDarkMode ? "bg-gray-950 text-white" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 lg:mb-16">
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Bizning galereya
              </h2>
              <p className={`text-lg ${isDarkMode ? "text-gray-200" : "text-gray-600"}`}>
                Akademiyamizning faoliyati va yutuqlaridan lavhalar
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative aspect-square cursor-pointer group overflow-hidden rounded-lg border transition-colors ${
                    isDarkMode ? "border-gray-700 hover:border-red-400" : "border-gray-200 hover:border-red-300"
                  }`}
                  onClick={() => openGallery(index)}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Modal */}
        <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
          <DialogContent
            className={`max-w-6xl w-[95vw] h-[90vh] p-0 border-0 ${isDarkMode ? "bg-gray-950 border-gray-800" : "bg-white border-gray-200"}`}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={() => setIsGalleryOpen(false)}
                className={`absolute top-4 right-4 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-red-600 text-gray-200 hover:text-white"
                    : "bg-gray-100 hover:bg-red-600 hover:text-white"
                }`}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Previous Button */}
              <button
                onClick={previousImage}
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-gray-200"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-gray-200"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Main Image */}
              <div className="relative w-full h-full flex items-center justify-center p-8 lg:p-16">
                <Image
                  src={galleryImages[currentImageIndex].src || "/placeholder.svg"}
                  alt={galleryImages[currentImageIndex].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Image Counter and Dots */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
                <div className="flex flex-col items-center space-y-4">
                  {/* Counter */}
                  <div
                    className={`px-4 py-2 rounded-full text-sm ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-900 text-white"}`}
                  >
                    {currentImageIndex + 1} / {galleryImages.length}
                  </div>

                  {/* Dots */}
                  <div className="flex space-x-2">
                    {galleryImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentImageIndex ? "bg-red-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Title */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-40">
                <div
                  className={`px-6 py-3 rounded-full text-lg font-semibold ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-900 text-white"}`}
                >
                  {galleryImages[currentImageIndex].title}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Partners Section */}
        <section
          className={`py-16 lg:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden ${
            isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 lg:mb-16">
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Hamkorlarimiz
              </h2>
              <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? "text-gray-200" : "text-gray-600"}`}>
                Biz dunyoning yetakchi kompaniyalari va moliyaviy institutlari bilan hamkorlik qilamiz
              </p>
            </div>

            {/* Partners Carousel */}
            <div className="relative">
              {/* Carousel Container */}
              <div
                className={`overflow-hidden rounded-xl shadow-sm border ${
                  isDarkMode ? "border-gray-800 bg-gray-950" : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex animate-scroll-left hover:pause-animation">
                  {/* First set of partners */}
                  <div className="flex items-center space-x-8 lg:space-x-12 px-6 lg:px-8 py-6 lg:py-8 min-w-max">
                    {/* Analytics Platform */}
                    <div className="group flex-shrink-0">
                      <div className="w-24 lg:w-32 h-24 lg:h-32 bg-gray-800 rounded-xl shadow-sm flex items-center justify-center transition-transform duration-200 hover:scale-105">
                        <Image
                          src="/images/partners/analytics.png"
                          alt="Analytics Platform"
                          width={70}
                          height={70}
                          className="object-contain"
                        />
                      </div>
                      <p
                        className={`text-center mt-3 text-sm font-semibold ${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        Analytics
                      </p>
                    </div>

                    {/* Hamkorbank */}
                    <div className="group flex-shrink-0">
                      <div
                        className={`w-24 lg:w-32 h-24 lg:h-32 rounded-xl shadow-sm flex items-center justify-center transition-transform duration-200 hover:scale-105 border ${
                          isDarkMode ? "border-gray-800 bg-gray-950" : "border-gray-100 bg-white"
                        }`}
                      >
                        <Image
                          src="/images/partners/hamkorbank.png"
                          alt="Hamkorbank"
                          width={90}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <p
                        className={`text-center mt-3 text-sm font-semibold ${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        Hamkorbank
                      </p>
                    </div>

                    {/* Kapitalbank */}
                    <div className="group flex-shrink-0">
                      <div className="w-24 lg:w-32 h-24 lg:h-32 bg-yellow-400 rounded-xl shadow-sm flex items-center justify-center transition-transform duration-200 hover:scale-105">
                        <Image
                          src="/images/partners/kapitalbank.png"
                          alt="Kapitalbank"
                          width={80}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <p
                        className={`text-center mt-3 text-sm font-semibold ${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        Kapitalbank
                      </p>
                    </div>

                    {/* FundedNext */}
                    <div className="group flex-shrink-0">
                      <div
                        className={`w-24 lg:w-32 h-24 lg:h-32 rounded-xl shadow-sm flex items-center justify-center transition-transform duration-200 hover:scale-105 border ${
                          isDarkMode ? "border-gray-800 bg-gray-950" : "border-gray-100 bg-white"
                        }`}
                      >
                        <Image
                          src="/images/partners/fundednext.jpeg"
                          alt="FundedNext"
                          width={80}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <p
                        className={`text-center mt-3 text-sm font-semibold ${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        FundedNext
                      </p>
                    </div>

                    {/* FXIFY */}
                    <div className="group flex-shrink-0">
                      <div className="w-24 lg:w-32 h-24 lg:h-32 bg-black rounded-xl shadow-sm flex items-center justify-center transition-transform duration-200 hover:scale-105">
                        <Image
                          src="/images/partners/fxify.png"
                          alt="FXIFY"
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      <p
                        className={`text-center mt-3 text-sm font-semibold ${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        FXIFY
                      </p>
                    </div>

                    {/* Travel Partner */}
                    <div className="group flex-shrink-0">
                      <div className="w-24 lg:w-32 h-24 lg:h-32 bg-green-500 rounded-xl shadow-sm flex items-center justify-center transition-transform duration-200 hover:scale-105">
                        <Image
                          src="/images/partners/travel.png"
                          alt="Travel Partner"
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      <p
                        className={`text-center mt-3 text-sm font-semibold ${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        Travel
                      </p>
                    </div>

                    {/* Xorazm FC */}
                    <div className="group flex-shrink-0">
                      <div className="w-24 lg:w-32 h-24 lg:h-32 bg-black rounded-xl shadow-sm flex items-center justify-center transition-transform duration-200 hover:scale-105">
                        <Image
                          src="/images/partners/xorazm-fc.jpeg"
                          alt="Xorazm Football Club"
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      <p
                        className={`text-center mt-3 text-sm font-semibold ${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        Xorazm FC
                      </p>
                    </div>

                    {/* Western Union */}
                    <div className="group flex-shrink-0">
                      <div
                        className={`w-24 lg:w-32 h-24 lg:h-32 rounded-xl shadow-sm flex items-center justify-center transition-transform duration-200 hover:scale-105 border ${
                          isDarkMode ? "border-gray-800 bg-gray-950" : "border-gray-100 bg-white"
                        }`}
                      >
                        <Image
                          src="/images/partners/western-union.png"
                          alt="Western Union"
                          width={90}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <p
                        className={`text-center mt-3 text-sm font-semibold ${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        Western Union
                      </p>
                    </div>

                    {/* Yandex */}
                    <div className="group flex-shrink-0">
                      <div
                        className={`w-24 lg:w-32 h-24 lg:h-32 rounded-xl shadow-sm flex items-center justify-center transition-transform duration-200 hover:scale-105 border ${
                          isDarkMode ? "border-gray-800 bg-gray-950" : "border-gray-100 bg-white"
                        }`}
                      >
                        <Image
                          src="/images/partners/yandex.png"
                          alt="Yandex"
                          width={80}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <p
                        className={`text-center mt-3 text-sm font-semibold ${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        Yandex
                      </p>
                    </div>
                  </div>

                  {/* Duplicate set for seamless loop */}
                  <div className="flex items-center space-x-8 lg:space-x-12 px-6 lg:px-8 py-6 lg:py-8 min-w-max">
                    {/* Same partners repeated for infinite scroll */}
                    <div className="group flex-shrink-0">
                      <div className="w-24 lg:w-32 h-24 lg:h-32 bg-gray-800 rounded-xl shadow-sm flex items-center justify-center transition-transform duration-200 hover:scale-105">
                        <Image
                          src="/images/partners/analytics.png"
                          alt="Analytics Platform"
                          width={70}
                          height={70}
                          className="object-contain"
                        />
                      </div>
                      <p
                        className={`text-center mt-3 text-sm font-semibold ${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        Analytics
                      </p>
                    </div>

                    <div className="group flex-shrink-0">
                      <div
                        className={`w-24 lg:w-32 h-24 lg:h-32 rounded-xl shadow-sm flex items-center justify-center transition-transform duration-200 hover:scale-105 border ${
                          isDarkMode ? "border-gray-800 bg-gray-950" : "border-gray-100 bg-white"
                        }`}
                      >
                        <Image
                          src="/images/partners/hamkorbank.png"
                          alt="Hamkorbank"
                          width={90}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <p
                        className={`text-center mt-3 text-sm font-semibold ${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        Hamkorbank
                      </p>
                    </div>

                    <div className="group flex-shrink-0">
                      <div className="w-24 lg:w-32 h-24 lg:h-32 bg-yellow-400 rounded-xl shadow-sm flex items-center justify-center transition-transform duration-200 hover:scale-105">
                        <Image
                          src="/images/partners/kapitalbank.png"
                          alt="Kapitalbank"
                          width={80}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <p
                        className={`text-center mt-3 text-sm font-semibold ${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        Kapitalbank
                      </p>
                    </div>

                    <div className="group flex-shrink-0">
                      <div
                        className={`w-24 lg:w-32 h-24 lg:h-32 rounded-xl shadow-sm flex items-center justify-center transition-transform duration-200 hover:scale-105 border ${
                          isDarkMode ? "border-gray-800 bg-gray-950" : "border-gray-100 bg-white"
                        }`}
                      >
                        <Image
                          src="/images/partners/fundednext.jpeg"
                          alt="FundedNext"
                          width={80}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <p
                        className={`text-center mt-3 text-sm font-semibold ${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        FundedNext
                      </p>
                    </div>

                    <div className="group flex-shrink-0">
                      <div className="w-24 lg:w-32 h-24 lg:h-32 bg-black rounded-xl shadow-sm flex items-center justify-center transition-transform duration-200 hover:scale-105">
                        <Image
                          src="/images/partners/fxify.png"
                          alt="FXIFY"
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      <p
                        className={`text-center mt-3 text-sm font-semibold ${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        FXIFY
                      </p>
                    </div>

                    <div className="group flex-shrink-0">
                      <div className="w-24 lg:w-32 h-24 lg:h-32 bg-green-500 rounded-xl shadow-sm flex items-center justify-center transition-transform duration-200 hover:scale-105">
                        <Image
                          src="/images/partners/travel.png"
                          alt="Travel Partner"
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      <p
                        className={`text-center mt-3 text-sm font-semibold ${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        Travel
                      </p>
                    </div>

                    <div className="group flex-shrink-0">
                      <div className="w-24 lg:w-32 h-24 lg:h-32 bg-black rounded-xl shadow-sm flex items-center justify-center transition-transform duration-200 hover:scale-105">
                        <Image
                          src="/images/partners/xorazm-fc.jpeg"
                          alt="Xorazm Football Club"
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      <p
                        className={`text-center mt-3 text-sm font-semibold ${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        Xorazm FC
                      </p>
                    </div>

                    <div className="group flex-shrink-0">
                      <div
                        className={`w-24 lg:w-32 h-24 lg:h-32 rounded-xl shadow-sm flex items-center justify-center transition-transform duration-200 hover:scale-105 border ${
                          isDarkMode ? "border-gray-800 bg-gray-950" : "border-gray-100 bg-white"
                        }`}
                      >
                        <Image
                          src="/images/partners/western-union.png"
                          alt="Western Union"
                          width={90}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <p
                        className={`text-center mt-3 text-sm font-semibold ${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        Western Union
                      </p>
                    </div>

                    <div className="group flex-shrink-0">
                      <div
                        className={`w-24 lg:w-32 h-24 lg:h-32 rounded-xl shadow-sm flex items-center justify-center transition-transform duration-200 hover:scale-105 border ${
                          isDarkMode ? "border-gray-800 bg-gray-950" : "border-gray-100 bg-white"
                        }`}
                      >
                        <Image
                          src="/images/partners/yandex.png"
                          alt="Yandex"
                          width={80}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <p
                        className={`text-center mt-3 text-sm font-semibold ${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        Yandex
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gradient overlays for smooth edges */}
              <div
                className={`absolute top-0 left-0 w-20 h-full bg-gradient-to-r pointer-events-none z-10 ${
                  isDarkMode ? "from-gray-900 to-transparent" : "from-gray-50 to-transparent"
                }`}
              ></div>
              <div
                className={`absolute top-0 right-0 w-20 h-full bg-gradient-to-l pointer-events-none z-10 ${
                  isDarkMode ? "from-gray-900 to-transparent" : "from-gray-50 to-transparent"
                }`}
              ></div>
            </div>

            {/* Partnership Benefits */}
            <div className="mt-16 lg:mt-20 grid md:grid-cols-3 gap-6 lg:gap-8">
              <div
                className={`text-center p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 ${
                  isDarkMode ? "bg-gray-800 text-white" : "bg-white"
                }`}
              >
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                  Ishonchli hamkorlik
                </h3>
                <p className={`${isDarkMode ? "text-gray-200" : "text-gray-600"}`}>
                  Dunyoning eng yirik moliyaviy institutlari bilan strategik hamkorlik
                </p>
              </div>

              <div
                className={`text-center p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 ${
                  isDarkMode ? "bg-gray-800 text-white" : "bg-white"
                }`}
              >
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                  Keng tarmoq
                </h3>
                <p className={`${isDarkMode ? "text-gray-200" : "text-gray-600"}`}>
                  Turli sohalardagi etakchi kompaniyalar bilan uzoq muddatli aloqalar
                </p>
              </div>

              <div
                className={`text-center p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 ${
                  isDarkMode ? "bg-gray-800 text-white" : "bg-white"
                }`}
              >
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                  Sifatli ta'lim
                </h3>
                <p className={`${isDarkMode ? "text-gray-200" : "text-gray-600"}`}>
                  Hamkorlarimiz tajribasi asosida eng zamonaviy bilimlarni taqdim etamiz
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className={`relative py-16 lg:py-20 px-4 sm:px-6 lg:px-12 text-white ${
            isDarkMode ? "bg-black" : "bg-gray-900"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            {/* Contest Banner */}
            <div className="text-center mb-12">
              <div className="inline-block bg-red-600 px-6 lg:px-8 py-4 rounded-xl shadow-lg mb-6">
                <h3 className="text-xl lg:text-3xl font-bold mb-2">
                  <span className="text-red-200">KONKURS UCHUN KOD:</span>{" "}
                  <span className="text-white bg-red-800 px-4 py-2 rounded-lg">XF2959</span>
                </h3>
                <p className="text-red-100 text-base lg:text-lg">ushbu kodni adminga jo'nating</p>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 lg:px-8 py-3 text-base lg:text-lg font-semibold rounded-lg">
                Admin bilan aloqa
              </Button>
            </div>

            {/* Main Contact Section */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Contact Form */}
              <div className={`rounded-xl p-6 lg:p-8 shadow-lg ${isDarkMode ? "bg-gray-950" : "bg-white"}`}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}
                    >
                      Ismingiz *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 ${
                        isDarkMode ? "bg-gray-900 text-white border-gray-700" : "border-gray-300"
                      }`}
                      placeholder="Ismingizni kiriting"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}
                    >
                      Telefon raqamingiz *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 ${
                        isDarkMode ? "bg-gray-900 text-white border-gray-700" : "border-gray-300"
                      }`}
                      placeholder="+998 (90) 123-45-67"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}
                    >
                      Murojaatingiz *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none ${
                        isDarkMode ? "bg-gray-900 text-white border-gray-700" : "border-gray-300"
                      }`}
                      placeholder="Sizning savolingiz yoki murojaatingizni yozing..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg text-lg font-semibold transition-colors"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Murojaatni jo'natish
                  </Button>

                  <p
                    className={`text-xs text-center leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}
                  >
                    Tugmani bosish orqali siz{" "}
                    <a href="#" className="text-red-600 hover:underline">
                      shaxsiy ma'lumotlarni qayta ishlash
                    </a>{" "}
                    ga rozilik bildirasiz
                  </p>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 lg:space-y-8">
                <div>
                  <h3 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-tight">
                    Boshqa mavzuda murojaatingiz bo'lsa ushbu forma orqali yo'llang,{" "}
                    <span className="text-red-400">albatta siz bilan aloqaga chiqamiz!</span>
                  </h3>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-4 lg:space-x-6">
                  <a
                    href="#"
                    className="w-12 lg:w-14 h-12 lg:h-14 bg-gray-800 hover:bg-pink-600 rounded-xl flex items-center justify-center transition-colors"
                  >
                    <Instagram className="w-6 lg:w-7 h-6 lg:h-7 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 lg:w-14 h-12 lg:h-14 bg-gray-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors"
                  >
                    <Send className="w-6 lg:w-7 h-6 lg:h-7 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 lg:w-14 h-12 lg:h-14 bg-gray-800 hover:bg-red-600 rounded-xl flex items-center justify-center transition-colors"
                  >
                    <Youtube className="w-6 lg:w-7 h-6 lg:h-7 text-white" />
                  </a>
                </div>

                {/* Contact Details */}
                <div className="space-y-4 lg:space-y-6">
                  <div
                    className={`flex items-center space-x-4 p-4 rounded-xl ${
                      isDarkMode ? "bg-gray-900" : "bg-gray-800"
                    }`}
                  >
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-300"}`}>Telefon raqam</p>
                      <p className="text-lg font-semibold text-white">+998 (50) 001-29-59</p>
                    </div>
                  </div>

                  <div
                    className={`flex items-center space-x-4 p-4 rounded-xl ${
                      isDarkMode ? "bg-gray-900" : "bg-gray-800"
                    }`}
                  >
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-300"}`}>Manzil</p>
                      <p className="text-lg font-semibold text-white">O'zbekiston, Urganch</p>
                    </div>
                  </div>

                  <div
                    className={`flex items-center space-x-4 p-4 rounded-xl ${
                      isDarkMode ? "bg-gray-900" : "bg-gray-800"
                    }`}
                  >
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-300"}`}>Ish vaqti</p>
                      <p className="text-lg font-semibold text-white">Dush - Juma: 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className={`rounded-xl p-4 ${isDarkMode ? "bg-gray-900" : "bg-gray-800"}`}>
                  <div className="w-full h-48 lg:h-64 bg-gray-300 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4!2d60.6!3d41.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDMzJzAwLjAiTiA2MMKwMzYnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`py-8 lg:py-12 px-4 sm:px-6 lg:px-12 border-t ${
            isDarkMode ? "bg-black border-gray-800 text-white" : "bg-white border-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              {/* Logo Section */}
              <div className="flex items-center">
                <a href="/">
                  <Image
                    src="/images/xorazm-logo.png"
                    alt="Xorazm Forex Logo"
                    width={150}
                    height={75}
                    className={`h-12 lg:h-16 w-auto transition-all duration-200 ${
                      isDarkMode ? "brightness-0 invert" : "brightness-100"
                    }`}
                  />
                </a>
              </div>

              {/* Company Information */}
              <div className="text-center">
                <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                  YaTT "Sardorbek Vaisov"
                </h3>
                <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Urganch sh, A.Qodiriy 11</p>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors group ${
                    isDarkMode ? "bg-gray-900 hover:bg-gray-800" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <Instagram
                    className={`w-5 h-5 ${
                      isDarkMode ? "text-gray-200 group-hover:text-white" : "text-gray-600 group-hover:text-gray-900"
                    }`}
                  />
                </a>
                <a
                  href="#"
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors group ${
                    isDarkMode ? "bg-gray-900 hover:bg-gray-800" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <Send
                    className={`w-5 h-5 ${
                      isDarkMode ? "text-gray-200 group-hover:text-white" : "text-gray-600 group-hover:text-gray-900"
                    }`}
                  />
                </a>
                <a
                  href="#"
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors group ${
                    isDarkMode ? "bg-gray-900 hover:bg-gray-800" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <Youtube
                    className={`w-5 h-5 ${
                      isDarkMode ? "text-gray-200 group-hover:text-white" : "text-gray-600 group-hover:text-gray-900"
                    }`}
                  />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-6 lg:mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 text-center">
              <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>
                © 2024 Xorazm Forex. Barcha huquqlar himoyalangan.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
