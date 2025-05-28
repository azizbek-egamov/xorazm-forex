"use client"

import Image from "next/image"
import { useTheme } from "@/components/providers/ThemeProvider"
import { Instagram, Send, Youtube, ArrowUp } from "lucide-react"

export default function Footer() {
  const { isDarkMode } = useTheme()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer
      className={`py-12 lg:py-16 px-4 sm:px-6 lg:px-12 border-t ${
        isDarkMode ? "bg-black border-gray-800 text-white" : "bg-white border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" className="block">
              <Image
                src="/images/xorazm-logo.png"
                alt="Xorazm Forex Logo"
                width={160}
                height={80}
                className={`h-14 lg:h-16 w-auto transition-all duration-200 ${
                  isDarkMode ? "brightness-0 invert" : "brightness-100"
                }`}
              />
            </a>
          </div>

          {/* Company Information */}
          <div className="text-center">
            <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
              YaTT "Sardorbek Vaisov"
            </h3>
            <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Urganch sh, A.Qodiriy 11</p>
            <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
              Professional treyding ta'limi markazi
            </p>
          </div>

          {/* Enhanced Social Media Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/xorazmforex/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-125 hover:-translate-y-2 overflow-hidden ${
                isDarkMode ? "bg-gray-900 hover:bg-pink-600" : "bg-gray-100 hover:bg-pink-600"
              }`}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

              <Instagram
                className={`w-6 h-6 transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse relative z-10 ${
                  isDarkMode ? "text-gray-200 group-hover:text-white" : "text-gray-600 group-hover:text-white"
                }`}
              />

              {/* Floating particles */}
              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
            </a>

            <a
              href="https://t.me/thexorazmforex"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-125 hover:-translate-y-2 overflow-hidden ${
                isDarkMode ? "bg-gray-900 hover:bg-blue-600" : "bg-gray-100 hover:bg-blue-600"
              }`}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

              <Send
                className={`w-6 h-6 transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse relative z-10 ${
                  isDarkMode ? "text-gray-200 group-hover:text-white" : "text-gray-600 group-hover:text-white"
                }`}
              />

              {/* Floating particles */}
              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
            </a>

            <a
              href="https://www.youtube.com/@XorazmForex"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-125 hover:-translate-y-2 overflow-hidden ${
                isDarkMode ? "bg-gray-900 hover:bg-red-600" : "bg-gray-100 hover:bg-red-600"
              }`}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

              <Youtube
                className={`w-6 h-6 transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse relative z-10 ${
                  isDarkMode ? "text-gray-200 group-hover:text-white" : "text-gray-600 group-hover:text-white"
                }`}
              />

              {/* Floating particles */}
              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
            </a>
          </div>
        </div>

        {/* Copyright and Scroll to Top */}
        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>
            © 2024 Xorazm Forex. Barcha huquqlar himoyalangan. | Professional treyding ta'limi
          </p>

          <button
            onClick={scrollToTop}
            className={`group w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-125 hover:-translate-y-2 relative overflow-hidden ${
              isDarkMode ? "bg-red-600 hover:bg-red-500" : "bg-red-600 hover:bg-red-700"
            } text-white shadow-lg`}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

            <ArrowUp className="w-6 h-6 group-hover:animate-bounce relative z-10" />
          </button>
        </div>
      </div>
    </footer>
  )
}
