"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/providers/ThemeProvider"
import { Check, Star, Zap, Crown, Gift, Clock, Users, Award, ArrowRight } from "lucide-react"

export default function CoursesSection() {
  const { isDarkMode } = useTheme()
  const [selectedCourse, setSelectedCourse] = useState("PRO")

  const courses = [
    {
      id: "START",
      name: "START",
      subtitle: "Boshlang'ich kurs",
      description: "0 dan o'rgatiladigan boshlang'ich treyding kurslarimiz, 5-10 kishilik guruhlarda bo'lib o'tadi.",
      originalPrice: "6 000 000 UZS",
      price: "5 000 000 UZS",
      discount: "1 000 000 UZS chegirma",
      popular: false,
      features: [
        "Indikatorlar 1 ta 🔥",
        "VIP guruhimizga a'zolik ✅",
        "Strategiyalar 5ta 🔥",
        "Boshlang'ich bilimlar",
        "Guruh darslar",
      ],
      icon: Users,
      color: "from-blue-600 to-blue-500",
    },
    {
      id: "PRO",
      name: "PRO",
      subtitle: "Eng mashhur",
      description: "Katta ustoz, Ko'p yillik tajribaga ega mentorimiz o'z bilimlarini beradigan, 1.5 oylik kursimiz.",
      price: "37 000 000 UZS",
      popular: true,
      features: [
        "Strategiyalar 5ta 🔥",
        "Indikatorlar to'plami 🔥",
        "Robotlar 4ta 🔥",
        "VIP Moliyaviy maslahatlar ✅",
        "Individual darslar ✅",
        "Doimiy qo'llab-quvvatlash",
        "Real savdo tajribasi",
      ],
      icon: Crown,
      color: "from-red-600 to-red-500",
    },
    {
      id: "ZETA",
      name: "ZETA",
      subtitle: "Kombinatsiya",
      description: "25 kun START kurslari + 5 kun PRO kurslari va treyding klubga yo'llanma!",
      price: "10 000 000 UZS",
      popular: false,
      features: [
        "Strategiyalar 3ta 🔥",
        "100$ gift card 🔥",
        "Robot 1 ta 🔥",
        "Kombinatsiyalangan kurs",
        "Klub a'zoligi",
      ],
      icon: Gift,
      color: "from-green-600 to-green-500",
    },
    {
      id: "MAKTAB",
      name: "MAKTAB",
      subtitle: "Maxsus taklif",
      description: "Treyding 0 dan boshlang'ich kurs 16-21 yoshdaglar uchun 2 oy davomida bilim va tajriba orttirarsiz",
      price: "300 $",
      popular: false,
      features: ["10$ deposit 🔥", "Indikatorlar 🔥", "Robot 🔥", "Yoshlar uchun maxsus", "2 oylik kurs"],
      icon: Award,
      color: "from-purple-600 to-purple-500",
      note: "Darslar 31-maydan boshlandi, 30-ta shartnoma ajratilgan",
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <section
      id="courses"
      className={`relative py-16 lg:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-950 via-black to-gray-950"
          : "bg-gradient-to-br from-white via-gray-50 to-white"
      }`}
    >
      {/* Background Effects */}
      {isDarkMode && (
        <>
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-red-900/10 to-red-800/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-gray-900/8 to-red-900/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-semibold text-sm mb-6">
            <Zap className="w-4 h-4" />
            <span>CHEGIRMA MUDDATI CHEKLANGAN</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-6xl font-black mb-6 transition-all duration-200 ${
              isDarkMode
                ? "bg-gradient-to-r from-gray-100 via-white to-gray-200 bg-clip-text text-transparent"
                : "text-gray-900"
            }`}
          >
            O'quv dasturlarimiz
          </h2>

          <p
            className={`text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-100" : "text-gray-600"
            }`}
          >
            Har xil darajadagi o'quvchilar uchun maxsus ishlab chiqilgan kurslar.
            <span className="font-bold text-red-500"> Birinchi 10 ta mijozga maxsus chegirmalar!</span>
          </p>
        </div>

        {/* Courses Grid - Enhanced with equal heights */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`relative h-full flex flex-col p-6 lg:p-8 rounded-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 group cursor-pointer ${
                course.popular
                  ? isDarkMode
                    ? "bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-2 border-red-800/60 shadow-2xl shadow-red-900/30"
                    : "bg-gradient-to-br from-white to-gray-50 border-2 border-red-200 shadow-2xl shadow-red-500/20"
                  : isDarkMode
                    ? "bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 shadow-2xl shadow-black/20 hover:shadow-red-900/20"
                    : "bg-white border border-gray-200 shadow-lg hover:shadow-2xl"
              }`}
              onClick={() => setSelectedCourse(course.id)}
            >
              {/* Popular Badge */}
              {course.popular && (
                <div
                  className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-2xl text-xs font-bold ${
                    isDarkMode ? "bg-red-600 text-white shadow-lg shadow-red-900/40" : "bg-red-600 text-white"
                  } animate-pulse`}
                >
                  <Star className="w-4 h-4 inline mr-1" />
                  ENG MASHHUR
                </div>
              )}

              {/* Course Header - Fixed height */}
              <div className="text-center mb-6 flex-shrink-0">
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-r ${course.color} shadow-lg`}
                >
                  <course.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                  {course.name}
                </h3>

                <p className={`text-sm font-semibold mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {course.subtitle}
                </p>

                <p className={`text-sm mb-6 min-h-[3rem] ${isDarkMode ? "text-gray-100" : "text-gray-600"}`}>
                  {course.description}
                </p>

                {/* Pricing - Fixed height */}
                <div className="mb-6 min-h-[4rem] flex flex-col justify-center">
                  {course.originalPrice && (
                    <div className="text-red-500 line-through text-lg mb-1">{course.originalPrice}</div>
                  )}
                  <div
                    className={`text-2xl lg:text-3xl font-bold ${
                      isDarkMode
                        ? "bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent"
                        : "text-red-600"
                    }`}
                  >
                    {course.price}
                  </div>
                  {course.discount && (
                    <p className={`text-xs mt-1 ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>
                      {course.discount}
                    </p>
                  )}
                </div>
              </div>

              {/* Features - Flexible height */}
              <div className="flex-1 flex flex-col">
                <div className="space-y-3 mb-8 flex-1">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className={`text-sm ${isDarkMode ? "text-gray-100" : "text-gray-700"}`}>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button - Always at bottom */}
                <div className="mt-auto">
                  <Button
                    onClick={scrollToContact}
                    className={`w-full py-4 font-bold rounded-2xl transition-all duration-200 hover:scale-105 ${
                      course.popular
                        ? isDarkMode
                          ? "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 shadow-lg shadow-red-900/40"
                          : "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400"
                        : isDarkMode
                          ? "bg-gray-800 hover:bg-gray-700 text-white"
                          : "bg-gray-900 hover:bg-gray-800 text-white"
                    } text-white`}
                  >
                    {course.popular ? (
                      <>
                        <Zap className="w-4 h-4 mr-2" />
                        HOZIROQ YOZILISH
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    ) : (
                      <>
                        {course.name} KURSIGA YOZILISH
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>

                  {/* Note */}
                  {course.note && (
                    <p className={`text-xs text-center mt-3 ${isDarkMode ? "text-gray-200" : "text-gray-500"}`}>
                      {course.note}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div
            className={`inline-flex items-center space-x-3 px-8 py-4 rounded-2xl ${
              isDarkMode
                ? "bg-yellow-900/20 border border-yellow-700/40 text-yellow-200"
                : "bg-yellow-50 border border-yellow-200 text-yellow-800"
            }`}
          >
            <Clock className="w-5 h-5 text-yellow-500" />
            <span className="font-bold text-lg">
              CHEGIRMA FAQAT 48 SOAT DAVOMIDA! ULGURMASANGIZ NARX 2 BARAVAR OSHADI!
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
