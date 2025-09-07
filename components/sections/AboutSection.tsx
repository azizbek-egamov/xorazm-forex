"use client"

import { useTheme } from "@/components/providers/ThemeProvider"
import { GraduationCap, TrendingUp, Shield, Award, Target, Users } from "lucide-react"

export default function AboutSection() {
  const { isDarkMode } = useTheme()

  const features = [
    {
      icon: GraduationCap,
      title: "Bilim sifati kafolatlanadi!",
      description:
        "Bizda aniq metodikalarga asoslangan, soha uchun barcha kerakli bo'ladigan bilimlarning barchasi darslarimizdagi o'rgatib boriladi - sohani to'liq o'rganasiz!",
      color: "bg-red-600",
    },
    {
      icon: Target,
      title: "Individual yondashuv",
      description:
        "Har bir o'quvchimizga individual yondashgan holda guruhdasilarining bilim darajalari bir xil tarzda oshirib boriladi.",
      color: "bg-blue-600",
    },
    {
      icon: Users,
      title: "Professional jamoa",
      description:
        "Treyderlarimiz uchun barcha kerakli imkoniyatlarni yaratgan holda ularga investitsiyalar qo'lga kiritishda ko'maklashib savdo zonalarimizda biz bilan birga savdo-qilish imkoniyatlarini beramiz",
      color: "bg-green-600",
    },
    {
      icon: Shield,
      title: "Ishonchli kafolat",
      description: "18 yillik tajriba va minglab muvaffaqiyatli o'quvchilar bizning ishonchliligimizning dalilidir.",
      color: "bg-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Real natijalar",
      description: "O'quvchilarimizning 95% muvaffaqiyat ko'rsatkichi va real daromad olish imkoniyatlari.",
      color: "bg-orange-600",
    },
    {
      icon: Award,
      title: "Rasmiy sertifikat",
      description: "Kurs yakunida rasmiy sertifikat va doimiy qo'llab-quvvatlash xizmatlari.",
      color: "bg-yellow-600",
    },
  ]

  return (
    <section
      id="about-us"
      className={`py-16 lg:py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
      }`}
    >
      {/* Background Effects */}
      {isDarkMode && (
        <>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-red-900/8 to-red-800/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-gray-900/8 to-red-900/8 rounded-full blur-3xl"></div>
        </>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-semibold text-sm mb-6">
            <Award className="w-4 h-4" />
            <span>2006-YILDAN BUYON FAOLIYAT</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-6xl font-black mb-6 transition-all duration-200 ${
              isDarkMode
                ? "bg-gradient-to-r from-gray-100 via-white to-gray-200 bg-clip-text text-transparent"
                : "text-gray-900"
            }`}
          >
            Nega bizni tanlashadi?
          </h2>

          <p
            className={`text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-100" : "text-gray-600"
            }`}
          >
            <span
              className={`font-bold text-2xl ${
                isDarkMode ? "bg-gradient-to-r from-red-300 to-red-400 bg-clip-text text-transparent" : "text-red-600"
              }`}
            >
              18 yillik tajriba
            </span>{" "}
            va jahon bozorlarida savdo qilib keluvchi mentorlar nazorati ostida professional treyderga aylaning!
          </p>
        </div>

        {/* Features Grid - Enhanced with equal heights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group h-full flex flex-col p-6 lg:p-8 rounded-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                isDarkMode
                  ? "bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 shadow-2xl shadow-black/20 hover:shadow-red-900/20"
                  : "bg-white border border-gray-100 shadow-lg hover:shadow-2xl"
              }`}
            >
              {/* Icon and Title - Fixed height */}
              <div className="mb-6 flex-shrink-0">
                <div
                  className={`w-16 lg:w-20 h-16 lg:h-20 rounded-3xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${feature.color} shadow-lg`}
                >
                  <feature.icon className="w-8 lg:w-10 h-8 lg:h-10 text-white" />
                </div>
                <h3 className={`text-xl lg:text-2xl font-bold mb-4 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                  {feature.title}
                </h3>
              </div>

              {/* Description - Flexible height */}
              <div className="flex-1">
                <p className={`leading-relaxed ${isDarkMode ? "text-gray-100" : "text-gray-600"}`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-black text-red-500 mb-2">18</div>
              <div className={`text-sm lg:text-base font-semibold ${isDarkMode ? "text-gray-100" : "text-gray-700"}`}>
                Yillik tajriba
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-black text-green-500 mb-2">95%</div>
              <div className={`text-sm lg:text-base font-semibold ${isDarkMode ? "text-gray-100" : "text-gray-700"}`}>
                Muvaffaqiyat darajasi
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-black text-blue-500 mb-2">1300+</div>
              <div className={`text-sm lg:text-base font-semibold ${isDarkMode ? "text-gray-100" : "text-gray-700"}`}>
                Mamnun mijozlar
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-black text-yellow-500 mb-2">50+</div>
              <div className={`text-sm lg:text-base font-semibold ${isDarkMode ? "text-gray-100" : "text-gray-700"}`}>
                Faol investorlar
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
