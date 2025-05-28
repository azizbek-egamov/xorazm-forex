"use client"

import { useTheme } from "@/components/providers/ThemeProvider"
import { TrendingUp, Users, Award, DollarSign } from "lucide-react"

export default function StatsSection() {
  const { isDarkMode } = useTheme()

  const stats = [
    {
      icon: Award,
      number: "18",
      label: "yillik tajriba",
      color: "text-red-500",
    },
    {
      icon: Users,
      number: "50+",
      label: "Investorlar klubidagi hisoblari soni",
      color: "text-blue-500",
    },
    {
      icon: TrendingUp,
      number: "500+",
      label: "O'quvchilarimiz soni",
      color: "text-green-500",
    },
    {
      icon: DollarSign,
      number: "1300+",
      label: "Umumiy mijozlarimiz soni",
      color: "text-yellow-500",
    },
  ]

  return (
    <section
      className={`py-16 lg:py-20 px-4 sm:px-6 lg:px-12 ${isDarkMode ? "bg-gray-950 text-white" : "bg-gray-900 text-white"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Bizning yutuqlarimiz</h2>
          <p className={`text-lg ${isDarkMode ? "text-gray-200" : "text-gray-300"}`}>Raqamlar o'z-o'zidan gapiradi</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gray-800 flex items-center justify-center mb-4 group-hover:bg-gray-700 transition-colors`}
                >
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-4xl lg:text-6xl font-black mb-2 ${stat.color}`}>{stat.number}</div>
                <div className="text-white text-sm lg:text-base font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
