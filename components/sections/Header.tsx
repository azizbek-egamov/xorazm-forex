"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/providers/ThemeProvider"
import { Phone, GraduationCap, Users, Shield, MessageCircle, Sun, Moon, Menu, X, Zap, ExternalLink } from "lucide-react"

export default function Header() {
  const { isDarkMode, toggleTheme, isThemeChanging } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl border-b transition-all duration-300 ${
        isDarkMode
          ? "bg-gray-950/95 border-gray-800/60 shadow-2xl shadow-black/30"
          : "bg-white/95 border-gray-200 shadow-lg"
      }`}
    >
      <div className="flex items-center justify-between px-3 py-2 sm:px-4 sm:py-2 lg:px-8 lg:py-3">
        {/* Logo Section */}
        <div className="flex items-center">
          <div
            className={`p-1 rounded-xl sm:rounded-2xl transition-all duration-200 ${isDarkMode ? "bg-gray-900/60" : "bg-white/80"}`}
          >
            <a href="/" className="block">
              <Image
                src="/images/xorazm-logo.png"
                alt="Xorazm Forex Logo"
                width={220}
                height={110}
                className={`h-8 sm:h-12 lg:h-20 w-auto transition-all duration-200 ${
                  isDarkMode ? "brightness-0 invert" : "brightness-100"
                }`}
                priority
              />
            </a>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`hidden lg:flex items-center space-x-8 text-sm font-medium ${
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
            <span>Akademiya</span>
          </button>
          <button
            onClick={() => scrollToSection("courses")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 ${
              isDarkMode ? "hover:bg-gray-800/60 hover:text-red-400" : "hover:text-red-600 hover:bg-red-50"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Kurslar</span>
          </button>
          <button
            onClick={() => scrollToSection("how-we-work")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 ${
              isDarkMode ? "hover:bg-gray-800/60 hover:text-red-400" : "hover:text-red-600 hover:bg-red-50"
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Jarayon</span>
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
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Phone Number - Hidden on mobile */}
          <a
            href="tel:+998500012959"
            className={`hidden md:flex items-center space-x-2 text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl transition-all duration-200 hover:scale-105 ${
              isDarkMode
                ? "text-gray-300 bg-gray-800/40 hover:bg-gray-700/60"
                : "text-gray-600 bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <Phone className="w-3 sm:w-4 h-3 sm:h-4" />
            <span className="font-medium">+998 (50) 001 29 59</span>
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            disabled={isThemeChanging}
            className={`w-8 sm:w-10 h-8 sm:h-10 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-md ${
              isDarkMode
                ? "bg-gray-800/80 hover:bg-gray-700/80 shadow-lg shadow-black/20"
                : "bg-gray-100 hover:bg-gray-200"
            } ${isThemeChanging ? "opacity-50 cursor-not-allowed" : ""}`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400" />
            ) : (
              <Moon className="w-3 sm:w-4 h-3 sm:h-4 text-gray-600" />
            )}
          </button>

          {/* Enhanced CTA Button */}
          <a href="https://t.me/thexorazmforex" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
            <Button
              className={`group flex items-center space-x-1 sm:space-x-2 px-3 sm:px-5 py-2 sm:py-2.5 font-bold rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-xs sm:text-sm shadow-lg hover:shadow-xl relative overflow-hidden ${
                isDarkMode
                  ? "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 shadow-red-900/30"
                  : "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400"
              } text-white`}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

              <Zap className="w-3 sm:w-4 h-3 sm:h-4 group-hover:animate-spin relative z-10" />
              <span className="relative z-10">30$ BONUS</span>
              <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 relative z-10" />
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden w-8 sm:w-10 h-8 sm:h-10 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-200 ${
              isDarkMode
                ? "bg-gray-800/60 hover:bg-gray-700/60 text-gray-200"
                : "bg-gray-100 hover:bg-gray-200 text-gray-600"
            }`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-3 sm:w-4 h-3 sm:h-4" /> : <Menu className="w-3 sm:w-4 h-3 sm:h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } ${isDarkMode ? "bg-gray-950/98 border-t border-gray-800" : "bg-white/98 border-t border-gray-200"}`}
      >
        <nav className="p-3 sm:p-4 space-y-2">
          <button
            onClick={() => scrollToSection("about-us")}
            className={`w-full flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl transition-all duration-200 text-sm sm:text-base ${
              isDarkMode
                ? "hover:bg-gray-800/60 text-gray-200 hover:text-red-400"
                : "hover:bg-red-50 text-gray-700 hover:text-red-600"
            }`}
          >
            <GraduationCap className="w-4 sm:w-5 h-4 sm:h-5" />
            <span>Akademiya haqida</span>
          </button>
          <button
            onClick={() => scrollToSection("courses")}
            className={`w-full flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl transition-all duration-200 text-sm sm:text-base ${
              isDarkMode
                ? "hover:bg-gray-800/60 text-gray-200 hover:text-red-400"
                : "hover:bg-red-50 text-gray-700 hover:text-red-600"
            }`}
          >
            <Users className="w-4 sm:w-5 h-4 sm:h-5" />
            <span>Kurslarimiz</span>
          </button>
          <button
            onClick={() => scrollToSection("how-we-work")}
            className={`w-full flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl transition-all duration-200 text-sm sm:text-base ${
              isDarkMode
                ? "hover:bg-gray-800/60 text-gray-200 hover:text-red-400"
                : "hover:bg-red-50 text-gray-700 hover:text-red-600"
            }`}
          >
            <Shield className="w-4 sm:w-5 h-4 sm:h-5" />
            <span>Ish jarayoni</span>
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`w-full flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl transition-all duration-200 text-sm sm:text-base ${
              isDarkMode
                ? "hover:bg-gray-800/60 text-gray-200 hover:text-red-400"
                : "hover:bg-red-50 text-gray-700 hover:text-red-600"
            }`}
          >
            <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5" />
            <span>Aloqa</span>
          </button>

          {/* Mobile Actions */}
          <div className="pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-800 space-y-2 sm:space-y-3">
            <a
              href="tel:+998500012959"
              className={`flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-sm sm:text-base transition-all duration-200 hover:scale-105 ${
                isDarkMode
                  ? "bg-gray-800/40 text-gray-300 hover:bg-gray-700/60"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
              <span>+998 (50) 001 29 59</span>
            </a>
            <a href="https://t.me/thexorazmforex" target="_blank" rel="noopener noreferrer" className="block">
              <Button
                className={`w-full py-2 sm:py-3 font-bold rounded-xl transition-all duration-200 text-sm sm:text-base group relative overflow-hidden ${
                  isDarkMode
                    ? "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 shadow-lg shadow-red-900/30"
                    : "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400"
                } text-white`}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                <span className="relative z-10">30$ BONUS OLISH →</span>
              </Button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
