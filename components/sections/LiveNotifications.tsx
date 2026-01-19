"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/components/providers/ThemeProvider"
import { CheckCircle, TrendingUp, Award, Zap } from "lucide-react"

const notifications = [
    { name: "Sultonbek", action: "10 000$ lik prop hisob sotib oldi", icon: Award },
    { name: "Sherbek", action: "5 000$ prop hisobdan 1 200$ yechdi", icon: TrendingUp },
    { name: "Sherzod", action: "25 000$ lik prop hisob imtihonidan o'tdi", icon: CheckCircle },
    { name: "Ruxshona", action: "XM brokeriga 500$ deposit qildi", icon: Zap },
    { name: "Durdona", action: "50 000$ lik imtihonsiz prop hisob sotib oldi", icon: Award },
    { name: "Dinara", action: "FreshForex dan 280$ yechdi", icon: TrendingUp },
    { name: "Muslima", action: "Robot sotib oldi", icon: Zap },
    { name: "Laylo", action: "VIP guruhga qo'shildi", icon: CheckCircle },
    { name: "Polat", action: "START guruhida darslarni boshladi", icon: Zap },
    { name: "Quvondiq", action: "100 000$ prop kapital bilan savdoni boshladi", icon: Award },
    { name: "Orif", action: "XM dan haftalik CASHBACK oldi", icon: TrendingUp },
    { name: "Aziz", action: "algo robot yordamida 300$ foyda oldi", icon: TrendingUp },
    { name: "Amir", action: "PRO guruhiga a'zo bo'ldi", icon: CheckCircle },
    { name: "Mohira", action: "MT5 robotini ishga tushirdi", icon: Zap },
    { name: "Xusan", action: "2 500$ lik prop hisobdan 600$ pul yechdi", icon: TrendingUp },
    { name: "Jahongir", action: "ZETA guruhiga qo'shildi", icon: CheckCircle },
    { name: "Maxmud", action: "15 000$ lik prop hisob oldi", icon: Award },
    { name: "Nizomaddin", action: "algo robot yordamida savdo boshladi", icon: Zap },
    { name: "Bahrom", action: "25 000$ lik prop hisobdan 5 000$ yechdi", icon: TrendingUp },
    { name: "Umirbek", action: "VIP guruhga a'zo bo'ldi", icon: CheckCircle },
    { name: "Manzura", action: "XM brokeriga 1 000$ deposit qildi", icon: Zap },
    { name: "Sevinch", action: "PRO guruhida yangi mavzu o'rgandi", icon: CheckCircle },
    { name: "Farrux", action: "START guruhida birinchi darsni tugatdi", icon: Zap },
    { name: "Hayrullo", action: "5 000$ prop hisobdan 1 200$ pul yechdi", icon: TrendingUp },
    { name: "Izzat", action: "FreshForex dan 150$ yechdi", icon: TrendingUp },
    { name: "Elbek", action: "50 000$ lik prop hisob sotib oldi", icon: Award },
    { name: "Ilyos", action: "MT5 robot bilan birinchi foyda oldi", icon: TrendingUp },
    { name: "Elmurod", action: "START guruhida darslarni boshladi", icon: Zap },
    { name: "Jonibek", action: "10 000$ prop hisobdan 2 500$ pul yechdi", icon: TrendingUp },
    { name: "Sanjar", action: "algo robotni sozladi va foyda oldi", icon: TrendingUp },
    { name: "Bobur", action: "25 000$ lik prop hisob sotib oldi", icon: Award },
    { name: "Rasulbek", action: "VIP guruhga qo'shildi", icon: CheckCircle },
    { name: "Toxir", action: "100 000$ lik prop kapital bilan savdoni boshladi", icon: Award },
    { name: "Fazliddin", action: "MT5 robot yordamida savdo qilindi", icon: Zap },
    { name: "Mushtariy", action: "FreshForex dan 280$ yechdi", icon: TrendingUp },
    { name: "Rajapboy", action: "Robot sotib oldi", icon: Zap },
    { name: "Zufarbek", action: "START guruhida birinchi topshiriqni bajardi", icon: CheckCircle },
    { name: "Obod", action: "5 000$ prop hisobdan 1 000$ yechdi", icon: TrendingUp },
    { name: "Irina", action: "XM brokeriga 500$ deposit qildi", icon: Zap },
    { name: "Nasiba", action: "10 000$ lik prop hisobdan 2 500$ pul yechdi", icon: TrendingUp },
    { name: "Otanazar", action: "ZETA guruhiga qo'shildi", icon: CheckCircle },
    { name: "Rashid", action: "algo robot yordamida savdo boshladi", icon: Zap },
    { name: "Timur", action: "PRO guruhida 500$ foyda yechdi", icon: TrendingUp },
    { name: "Asror", action: "25 000$ lik prop hisobdan 6 000$ yechdi", icon: TrendingUp },
]

export default function LiveNotifications() {
    const { isDarkMode } = useTheme()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true)

            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % notifications.length)
                setIsAnimating(false)
            }, 300)
        }, 30000)

        return () => clearInterval(interval)
    }, [])

    const current = notifications[currentIndex]
    const Icon = current.icon

    return (
        <div
            className={`fixed bottom-4 left-4 z-50 max-w-sm transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                }`}
        >
            <div
                className={`relative flex items-center gap-3 p-4 rounded-2xl shadow-2xl backdrop-blur-md border ${isDarkMode
                    ? "bg-gray-900/95 border-teal-500/30 text-white"
                    : "bg-white/95 border-teal-200 text-gray-900"
                    }`}
                style={{
                    boxShadow: isDarkMode
                        ? "0 10px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(20, 184, 166, 0.1)"
                        : "0 10px 40px rgba(0, 0, 0, 0.15), 0 0 20px rgba(20, 184, 166, 0.1)",
                }}
            >

                {/* Icon */}
                <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                        background: "linear-gradient(135deg, #0d9488, #14b8a6)",
                    }}
                >
                    <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold truncate">{current.name}</p>
                    <p
                        className={`text-xs truncate ${isDarkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                    >
                        {current.action}
                    </p>
                </div>

                {/* Live indicator */}
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span
                        className={`text-xs font-medium ${isDarkMode ? "text-green-400" : "text-green-600"
                            }`}
                    >
                        LIVE
                    </span>
                </div>
            </div>
        </div>
    )
}
