"use client"

import { useTheme } from "@/components/providers/ThemeProvider"
import { Handshake, FileText, Code, MessageSquare, ArrowRight } from "lucide-react"

export default function ProcessSection() {
  const { isDarkMode } = useTheme()

  const steps = [
    {
      icon: Handshake,
      number: "1",
      title: "Tanishuv",
      description:
        "Soha bilan sizni yana ofislarimizda yoki telefon orqali tanishtirib, hohishingizga ko'ra shartnoma tuzish jarayoniga o'tiladi!",
    },
    {
      icon: FileText,
      number: "2",
      title: "Shartnoma",
      description:
        "Tasdiqlangan o'quv dasturlarimizni tanlaganingizdan keyin shartnoma tuzamiz va uni rasmiylashtirramiz",
    },
    {
      icon: Code,
      number: "3",
      title: "O'rganish",
      description: "Darhol o'quvchilar guruhlariga bo'linadi va dars jarayonlari 0 dan boshlanadi!",
    },
    {
      icon: MessageSquare,
      number: "4",
      title: "Siz treydersiz",
      description:
        "1 oy o'tar otmas siz bilimlaringiz oshishini sezasiz va buning natijasida sohaga sho'ng'iy boshlaysiz va kurslarimiz ohirida sizga sertifikatlar beriladi, treyderlik faoliyatingiz boshlanadi!",
    },
  ]

  return (
    <section
      id="how-we-work"
      className={`py-16 lg:py-24 px-4 sm:px-6 lg:px-12 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${
              isDarkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Biz qanday ishlaymiz?
          </h2>
          <p className={`text-lg lg:text-xl max-w-3xl mx-auto ${isDarkMode ? "text-gray-200" : "text-gray-600"}`}>
            Oddiy 4 bosqichda professional treyderga aylaning
          </p>
        </div>

        {/* Process Steps - Enhanced with equal heights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative h-full">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-12 h-0.5 bg-red-500 z-0">
                  <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-red-500" />
                </div>
              )}

              <div
                className={`relative z-10 h-full flex flex-col p-6 lg:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 text-center ${
                  isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
                }`}
              >
                {/* Icon and Number - Fixed height */}
                <div className="flex-shrink-0 mb-6">
                  <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                    {step.title}
                  </h3>
                </div>

                {/* Description - Flexible height */}
                <div className="flex-1">
                  <p className={`leading-relaxed ${isDarkMode ? "text-gray-200" : "text-gray-600"}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
