"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useTheme } from "@/components/providers/ThemeProvider"
import { Play, X, Star, ArrowRight, Zap, Users, TrendingUp, Award, Sparkles, Target, Trophy } from "lucide-react"

export default function HeroSection() {
  const { isDarkMode } = useTheme()
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <section
      className={`min-h-screen relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-950 via-black to-gray-950"
          : "bg-gradient-to-br from-white via-gray-50 to-white"
      } text-gray-900 dark:text-gray-100 transition-all duration-500`}
    >
      {/* Enhanced Background Effects with Parallax */}
      <div className="absolute inset-0">
        {isDarkMode ? (
          <>
            {/* Animated gradient orbs */}
            <div
              className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-red-900/20 to-red-800/15 rounded-full blur-3xl animate-pulse"
              style={{
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              }}
            ></div>
            <div
              className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-gray-900/20 to-red-900/15 rounded-full blur-3xl animate-pulse delay-1000"
              style={{
                transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
              }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-r from-red-950/10 to-gray-950/10 rounded-full blur-3xl"
              style={{
                transform: `translate(calc(-50% + ${mousePosition.x * 0.01}px), calc(-50% + ${mousePosition.y * 0.01}px))`,
              }}
            ></div>

            {/* Animated grid pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
            </div>
          </>
        ) : (
          <>
            <div
              className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-red-100/40 to-red-50/30 rounded-full blur-3xl animate-pulse"
              style={{
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              }}
            ></div>
            <div
              className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-gray-100/40 to-red-100/30 rounded-full blur-3xl animate-pulse delay-1000"
              style={{
                transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
              }}
            ></div>
          </>
        )}
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 sm:w-4 h-2 sm:h-4 bg-red-500 rounded-full animate-bounce opacity-30 shadow-lg shadow-red-500/50"></div>
        <div className="absolute top-3/4 right-1/4 w-3 sm:w-6 h-3 sm:h-6 bg-yellow-500 rounded-full animate-bounce delay-500 opacity-30 shadow-lg shadow-yellow-500/50"></div>
        <div className="absolute top-1/2 right-1/3 w-2 sm:w-3 h-2 sm:h-3 bg-blue-500 rounded-full animate-bounce delay-1000 opacity-30 shadow-lg shadow-blue-500/50"></div>

        {/* Additional floating icons */}
        <div className="absolute top-1/3 right-1/5 animate-float opacity-20">
          <Sparkles className="w-4 h-4 text-yellow-400" />
        </div>
        <div className="absolute bottom-1/3 left-1/5 animate-float delay-700 opacity-20">
          <Target className="w-5 h-5 text-red-400" />
        </div>
        <div className="absolute top-2/3 left-1/3 animate-float delay-1500 opacity-20">
          <Trophy className="w-4 h-4 text-yellow-500" />
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-5 relative z-10 flex items-center min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-96px)] px-3 sm:px-4 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center w-full max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1 animate-fade-in-up">
            {/* Main Headline with enhanced animations */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <h1
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black leading-tight transition-all duration-700 hover:scale-105 ${
                  isDarkMode
                    ? "text-white" // Changed from gradient to solid white for better visibility
                    : "text-gray-900 hover:text-gray-700"
                } animate-slide-in-left`}
              >
                <span className="block animate-fade-in delay-300">Xorazmda</span>
                <span
                  className={`block animate-fade-in delay-500 ${
                    isDarkMode
                      ? "text-red-400" // Changed from gradient to solid red-400 for better visibility
                      : "text-red-600 hover:text-red-500"
                  } transition-all duration-500`}
                >
                  PROFESSIONAL
                </span>
                <span className="block animate-fade-in delay-700">Treyding Kurslari</span>
              </h1>

              <p
                className={`text-sm sm:text-base lg:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 transition-all duration-500 hover:scale-105 animate-fade-in delay-1000 ${
                  isDarkMode ? "text-gray-100 hover:text-white" : "text-gray-600 hover:text-gray-500"
                }`}
              >
                <span
                  className={`font-bold text-lg sm:text-xl lg:text-2xl animate-pulse ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  18 YILLIK
                </span>{" "}
                tajribaga ega professional treyderlardan{" "}
                <span className={`font-bold animate-pulse delay-500 ${isDarkMode ? "text-red-300" : "text-red-600"}`}>
                  KAFOLATLANGAN NATIJA
                </span>{" "}
                bilan o'rganing!
              </p>
            </div>

            {/* Enhanced Social Proof with hover effects */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs sm:text-sm animate-fade-in delay-1200">
              <div className="flex items-center space-x-1 sm:space-x-2 group hover:scale-110 transition-all duration-300 cursor-pointer">
                <Users className="w-3 sm:w-5 h-3 sm:h-5 text-red-500 group-hover:animate-bounce" />
                <span
                  className={`font-semibold transition-colors duration-300 ${
                    isDarkMode ? "text-gray-100 group-hover:text-white" : "text-gray-700 group-hover:text-gray-900"
                  }`}
                >
                  1300+ Mijoz
                </span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 group hover:scale-110 transition-all duration-300 cursor-pointer">
                <TrendingUp className="w-3 sm:w-5 h-3 sm:h-5 text-green-500 group-hover:animate-bounce" />
                <span
                  className={`font-semibold transition-colors duration-300 ${
                    isDarkMode ? "text-gray-100 group-hover:text-white" : "text-gray-700 group-hover:text-gray-900"
                  }`}
                >
                  95% Muvaffaqiyat
                </span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 group hover:scale-110 transition-all duration-300 cursor-pointer">
                <Award className="w-3 sm:w-5 h-3 sm:h-5 text-yellow-500 group-hover:animate-bounce" />
                <span
                  className={`font-semibold transition-colors duration-300 ${
                    isDarkMode ? "text-gray-100 group-hover:text-white" : "text-gray-700 group-hover:text-gray-900"
                  }`}
                >
                  Sertifikat
                </span>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 items-center justify-center lg:justify-start animate-fade-in delay-1400">
              <Button
                onClick={() => scrollToSection("courses")}
                size="lg"
                className={`group w-full sm:w-auto px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 text-sm sm:text-lg lg:text-xl font-bold transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:-translate-y-1 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 shadow-lg shadow-red-900/30 hover:shadow-red-900/50"
                    : "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 hover:shadow-red-500/30"
                } text-white rounded-xl sm:rounded-2xl animate-[pulse_3s_ease-in-out_infinite] hover:animate-none relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <Zap className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 mr-2 lg:mr-3 group-hover:animate-spin" />
                HOZIROQ BOSHLASH
                <ArrowRight className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 ml-2 lg:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              {/* Enhanced Video Button */}
              <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className={`group w-full sm:w-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-4 lg:py-6 text-sm sm:text-lg lg:text-xl font-bold flex items-center space-x-2 sm:space-x-3 lg:space-x-4 transition-all duration-500 hover:scale-110 hover:-translate-y-1 rounded-xl sm:rounded-2xl backdrop-blur-md relative overflow-hidden ${
                      isDarkMode
                        ? "border-gray-700 bg-gray-900/60 hover:bg-gray-800/80 text-gray-100 hover:border-red-500 hover:shadow-lg hover:shadow-red-900/30"
                        : "border-gray-300 hover:border-red-600 hover:text-red-600 bg-white/80 hover:bg-white hover:shadow-lg hover:shadow-red-500/20"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <div
                      className={`w-10 sm:w-14 lg:w-16 h-10 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${
                        isDarkMode ? "bg-red-600 group-hover:bg-red-500" : "bg-red-600 group-hover:bg-red-500"
                      } shadow-lg`}
                    >
                      <Play
                        className="w-5 sm:w-7 lg:w-8 h-5 sm:h-7 lg:h-8 text-white ml-1 group-hover:scale-110 transition-transform duration-300"
                        fill="currentColor"
                      />
                    </div>
                    <span className="hidden sm:inline">TREYDING NIMA?</span>
                    <span className="sm:hidden">VIDEO</span>
                  </Button>
                </DialogTrigger>
                <DialogContent
                  className={`max-w-5xl w-[95vw] p-2 sm:p-4 lg:p-8 rounded-2xl sm:rounded-3xl border-0 shadow-2xl animate-scale-in ${
                    isDarkMode ? "bg-gray-950" : "bg-white"
                  }`}
                >
                  <button
                    onClick={() => setIsVideoOpen(false)}
                    className={`absolute top-2 sm:top-4 lg:top-6 right-2 sm:right-4 lg:right-6 z-50 w-8 sm:w-12 lg:w-14 h-8 sm:h-12 lg:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-90 ${
                      isDarkMode
                        ? "bg-gray-800 hover:bg-red-600 text-gray-200 hover:text-white"
                        : "bg-gray-100 hover:bg-red-600 hover:text-white"
                    } shadow-lg`}
                  >
                    <X className="w-4 sm:w-6 lg:w-7 h-4 sm:h-6 lg:h-7" />
                  </button>

                  <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
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

            {/* Enhanced Special Offer */}
            <div
              className={`group inline-flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border transition-all duration-500 hover:scale-105 hover:-translate-y-1 text-xs sm:text-sm lg:text-base cursor-pointer animate-fade-in delay-1600 relative overflow-hidden ${
                isDarkMode
                  ? "bg-yellow-900/20 border-yellow-700/40 text-yellow-200 hover:bg-yellow-900/30 hover:border-yellow-600/60 hover:shadow-lg hover:shadow-yellow-900/30"
                  : "bg-yellow-50 border-yellow-200 text-yellow-800 hover:bg-yellow-100 hover:border-yellow-300 hover:shadow-lg hover:shadow-yellow-500/20"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <Star className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-500 flex-shrink-0 group-hover:animate-spin group-hover:scale-110 transition-all duration-300" />
              <span className="font-bold text-center relative z-10">
                BIRINCHI 10 TA MIJOZGA 30$ BONUS + 1 MILLION SO'M CHEGIRMA!
              </span>
            </div>
          </div>

          {/* Enhanced Right Content - Person Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in-right">
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-lg group">
              {/* Enhanced Glow Effect */}
              {isDarkMode && (
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-red-800/30 rounded-full blur-3xl scale-110 animate-pulse group-hover:scale-125 transition-transform duration-700"></div>
              )}

              {/* Enhanced Floating Stats with animations */}
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 lg:-left-8 animate-float">
                <div
                  className={`px-2 sm:px-4 py-1 sm:py-2 rounded-xl sm:rounded-2xl shadow-lg backdrop-blur-md text-xs sm:text-sm transition-all duration-500 hover:scale-110 hover:-translate-y-1 cursor-pointer group/stat ${
                    isDarkMode
                      ? "bg-gray-900/90 text-white hover:bg-gray-800/90"
                      : "bg-white/90 text-gray-900 hover:bg-white"
                  } border border-red-500/20 hover:border-red-500/40`}
                >
                  <div className="text-lg sm:text-2xl font-bold text-red-500 group-hover/stat:animate-pulse">18</div>
                  <div className="text-xs">Yillik tajriba</div>
                </div>
              </div>

              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 lg:-right-8 animate-float delay-1000">
                <div
                  className={`px-2 sm:px-4 py-1 sm:py-2 rounded-xl sm:rounded-2xl shadow-lg backdrop-blur-md text-xs sm:text-sm transition-all duration-500 hover:scale-110 hover:-translate-y-1 cursor-pointer group/stat ${
                    isDarkMode
                      ? "bg-gray-900/90 text-white hover:bg-gray-800/90"
                      : "bg-white/90 text-gray-900 hover:bg-white"
                  } border border-green-500/20 hover:border-green-500/40`}
                >
                  <div className="text-lg sm:text-2xl font-bold text-green-500 group-hover/stat:animate-pulse">95%</div>
                  <div className="text-xs">Muvaffaqiyat</div>
                </div>
              </div>

              {/* Enhanced Image Container */}
              <div
                className={`relative rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-700 hover:scale-105 hover:-translate-y-2 group-hover:shadow-2xl ${
                  isDarkMode
                    ? "shadow-2xl shadow-black/20 hover:shadow-red-900/30"
                    : "shadow-2xl shadow-gray-500/20 hover:shadow-red-500/20"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src="/images/person.png"
                  alt="Professional Trader"
                  width={500}
                  height={600}
                  className="w-full h-auto relative z-10 transition-transform duration-700 group-hover:scale-110"
                  priority
                />

                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}
