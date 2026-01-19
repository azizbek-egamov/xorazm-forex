"use client"

import Image from "next/image"
import { useTheme } from "@/components/providers/ThemeProvider"
import { Shield, Users, GraduationCap } from "lucide-react"

export default function PartnersSection() {
  const { isDarkMode } = useTheme()

  const partners = [
    { name: "XM", logo: "/images/partners/xm-logo-bn250x250.png", bg: "bg-black" },
    { name: "Forex4You", logo: "/images/partners/fx4u.jpeg", bg: "bg-white" },
    { name: "FreshForex", logo: "/images/partners/freshforex.png", bg: "bg-white" },
    { name: "AMarkets", logo: "/images/partners/amark.png", bg: "bg-white" },
    { name: "ApexBank", logo: "/images/partners/apexbank.jpeg", bg: "bg-white" },
    { name: "TCrypto", logo: "/images/partners/tcrypto.png", bg: "bg-gray-900" },
    { name: "Zaza Travel", logo: "/images/partners/travel.png", bg: "bg-white" },
  ]

  return (
    <section
      className={`py-16 lg:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50"
        }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${isDarkMode ? "text-gray-100" : "text-gray-900"
              }`}
          >
            Hamkorlarimiz
          </h2>
          <p className={`text-lg lg:text-xl max-w-3xl mx-auto ${isDarkMode ? "text-gray-100" : "text-gray-600"}`}>
            Biz dunyoning yetakchi kompaniyalari va moliyaviy institutlari bilan hamkorlik qilamiz
          </p>
        </div>

        {/* Partners Carousel */}
        <div className="relative mb-16">
          <div
            className={`overflow-hidden rounded-2xl shadow-lg border ${isDarkMode ? "border-gray-800 bg-gray-950" : "border-gray-200 bg-white"
              }`}
          >
            <div className="flex animate-scroll-left hover:pause-animation">
              {/* First set */}
              <div className="flex items-center space-x-8 lg:space-x-12 px-6 lg:px-8 py-6 lg:py-8 min-w-max">
                {partners.map((partner, index) => (
                  <div key={index} className="group flex-shrink-0">
                    <div
                      className={`w-24 lg:w-32 h-24 lg:h-32 ${partner.bg} rounded-2xl shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-105`}
                    >
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        width={80}
                        height={50}
                        className="object-contain"
                      />
                    </div>
                    <p
                      className={`text-center mt-3 text-sm font-semibold ${isDarkMode ? "text-gray-100" : "text-gray-700"
                        }`}
                    >
                      {partner.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center space-x-8 lg:space-x-12 px-6 lg:px-8 py-6 lg:py-8 min-w-max">
                {partners.map((partner, index) => (
                  <div key={`duplicate-${index}`} className="group flex-shrink-0">
                    <div
                      className={`w-24 lg:w-32 h-24 lg:h-32 ${partner.bg} rounded-2xl shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-105`}
                    >
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        width={80}
                        height={50}
                        className="object-contain"
                      />
                    </div>
                    <p
                      className={`text-center mt-3 text-sm font-semibold ${isDarkMode ? "text-gray-100" : "text-gray-700"
                        }`}
                    >
                      {partner.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gradient overlays */}
          <div
            className={`absolute top-0 left-0 w-20 h-full bg-gradient-to-r pointer-events-none z-10 ${isDarkMode ? "from-gray-900 to-transparent" : "from-gray-50 to-transparent"
              }`}
          ></div>
          <div
            className={`absolute top-0 right-0 w-20 h-full bg-gradient-to-l pointer-events-none z-10 ${isDarkMode ? "from-gray-900 to-transparent" : "from-gray-50 to-transparent"
              }`}
          ></div>
        </div>

        {/* Partnership Benefits - Enhanced with equal heights */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div
            className={`h-full flex flex-col text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white"
              }`}
          >
            {/* Icon and Title - Fixed height */}
            <div className="flex-shrink-0 mb-6">
              <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                Ishonchli hamkorlik
              </h3>
            </div>

            {/* Description - Flexible height */}
            <div className="flex-1">
              <p className={`${isDarkMode ? "text-gray-200" : "text-gray-600"}`}>
                Dunyoning eng yirik moliyaviy institutlari bilan strategik hamkorlik
              </p>
            </div>
          </div>

          <div
            className={`h-full flex flex-col text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white"
              }`}
          >
            {/* Icon and Title - Fixed height */}
            <div className="flex-shrink-0 mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                Keng tarmoq
              </h3>
            </div>

            {/* Description - Flexible height */}
            <div className="flex-1">
              <p className={`${isDarkMode ? "text-gray-200" : "text-gray-600"}`}>
                Turli sohalardagi etakchi kompaniyalar bilan uzoq muddatli aloqalar
              </p>
            </div>
          </div>

          <div
            className={`h-full flex flex-col text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white"
              }`}
          >
            {/* Icon and Title - Fixed height */}
            <div className="flex-shrink-0 mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                Sifatli ta'lim
              </h3>
            </div>

            {/* Description - Flexible height */}
            <div className="flex-1">
              <p className={`${isDarkMode ? "text-gray-200" : "text-gray-600"}`}>
                Hamkorlarimiz tajribasi asosida eng zamonaviy bilimlarni taqdim etamiz
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
