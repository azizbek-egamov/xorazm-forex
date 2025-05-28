"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useTheme } from "@/components/providers/ThemeProvider"
import {
  Phone,
  MapPin,
  Instagram,
  Send,
  Youtube,
  Clock,
  Zap,
  Gift,
  CheckCircle,
  Loader2,
  Sparkles,
  ExternalLink,
} from "lucide-react"

export default function ContactSection() {
  const { isDarkMode } = useTheme()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (error) setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Xabar yuborishda xatolik")
      }

      // Success animation
      setIsSuccess(true)
      setFormData({ name: "", phone: "", message: "" })

      // Reset success state after animation
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    } catch (error) {
      console.error("Form submission error:", error)
      setError(error instanceof Error ? error.message : "Xabar yuborishda xatolik yuz berdi")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className={`relative py-16 lg:py-24 px-4 sm:px-6 lg:px-12 text-white overflow-hidden ${
        isDarkMode ? "bg-black" : "bg-gray-900"
      }`}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-red-900/15 to-red-800/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-900/10 to-red-900/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Contest Banner */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-red-600 to-red-500 px-8 py-6 rounded-2xl shadow-2xl mb-8 animate-pulse">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Gift className="w-8 h-8 text-white animate-bounce" />
              <h3 className="text-2xl lg:text-4xl font-black">KONKURS UCHUN KOD:</h3>
            </div>
            <div className="text-3xl lg:text-5xl font-black text-white bg-red-800 px-6 py-3 rounded-xl mb-4 animate-pulse">
              XF2959
            </div>
            <p className="text-red-100 text-lg lg:text-xl font-semibold">
              Ushbu kodni adminga jo'nating va 30$ bonus + chegirmani qo'lga kiriting!
            </p>
          </div>

          <a href="https://t.me/thexorazmforex" target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 text-xl font-bold rounded-2xl shadow-lg hover:scale-105 transition-all duration-200 group">
              <Zap className="w-6 h-6 mr-2 group-hover:animate-spin" />
              ADMIN BILAN ALOQA
              <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
          </a>
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Enhanced Contact Form */}
          <div
            className={`rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden ${
              isDarkMode ? "bg-gray-950/95 backdrop-blur-xl border border-gray-800/50" : "bg-white"
            }`}
          >
            {/* Success Animation Overlay */}
            {isSuccess && (
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/90 to-emerald-500/90 flex items-center justify-center z-50 rounded-2xl animate-fade-in">
                <div className="text-center text-white">
                  <CheckCircle className="w-20 h-20 mx-auto mb-4 animate-bounce" />
                  <h3 className="text-2xl font-bold mb-2">Muvaffaqiyatli!</h3>
                  <p className="text-lg">Xabaringiz yuborildi. Tez orada bog'lanamiz!</p>
                  <div className="flex justify-center mt-4">
                    <Sparkles className="w-6 h-6 animate-spin text-yellow-300" />
                  </div>
                </div>
              </div>
            )}

            <div className="mb-8">
              <h3 className={`text-2xl lg:text-3xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Bepul maslahat olish
              </h3>
              <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                Formani to'ldiring va bizning mutaxassislarimiz siz bilan bog'lanadi
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label
                  htmlFor="name"
                  className={`block text-sm font-semibold mb-3 transition-colors duration-200 ${
                    isDarkMode
                      ? "text-gray-200 group-focus-within:text-red-400"
                      : "text-gray-700 group-focus-within:text-red-600"
                  }`}
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
                  disabled={isSubmitting}
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-lg hover:border-red-300 ${
                    isDarkMode
                      ? "bg-gray-900/80 text-white border-gray-700 hover:bg-gray-800/80 focus:bg-gray-800/80 placeholder:text-gray-400"
                      : "bg-white text-gray-900 border-gray-300 hover:bg-gray-50 focus:bg-white placeholder:text-gray-500"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                  placeholder="Ismingizni kiriting"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="phone"
                  className={`block text-sm font-semibold mb-3 transition-colors duration-200 ${
                    isDarkMode
                      ? "text-gray-200 group-focus-within:text-red-400"
                      : "text-gray-700 group-focus-within:text-red-600"
                  }`}
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
                  disabled={isSubmitting}
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-lg hover:border-red-300 ${
                    isDarkMode
                      ? "bg-gray-900/80 text-white border-gray-700 hover:bg-gray-800/80 focus:bg-gray-800/80 placeholder:text-gray-400"
                      : "bg-white text-gray-900 border-gray-300 hover:bg-gray-50 focus:bg-white placeholder:text-gray-500"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                  placeholder="+998 (90) 123-45-67"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="message"
                  className={`block text-sm font-semibold mb-3 transition-colors duration-200 ${
                    isDarkMode
                      ? "text-gray-200 group-focus-within:text-red-400"
                      : "text-gray-700 group-focus-within:text-red-600"
                  }`}
                >
                  Murojaatingiz *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  rows={4}
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 resize-none text-lg hover:border-red-300 ${
                    isDarkMode
                      ? "bg-gray-900/80 text-white border-gray-700 hover:bg-gray-800/80 focus:bg-gray-800/80 placeholder:text-gray-400"
                      : "bg-white text-gray-900 border-gray-300 hover:bg-gray-50 focus:bg-white placeholder:text-gray-500"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                  placeholder="Qaysi kurs sizni qiziqtiradi? Savollaringizni yozing..."
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-xl">
                  <p className="text-red-700 dark:text-red-300 text-sm font-medium">{error}</p>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full py-4 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg relative overflow-hidden group ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 hover:shadow-2xl"
                } text-white disabled:opacity-50`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                    YUBORILMOQDA...
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle className="w-6 h-6 mr-3" />
                    YUBORILDI!
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                    BEPUL MASLAHAT OLISH
                  </>
                )}
              </Button>

              <p className={`text-xs text-center leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                Tugmani bosish orqali siz{" "}
                <a href="#" className="text-red-500 hover:underline font-semibold transition-colors duration-200">
                  shaxsiy ma'lumotlarni qayta ishlash
                </a>{" "}
                ga rozilik bildirasiz
              </p>
            </form>
          </div>

          {/* Enhanced Contact Information */}
          <div className="space-y-8 lg:space-y-10">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                Boshqa savollaringiz bo'lsa, <span className="text-red-400">albatta javob beramiz!</span>
              </h3>
              <p className="text-xl text-gray-300 mb-8">24/7 qo'llab-quvvatlash xizmati va tezkor javoblar</p>
            </div>

            {/* Enhanced Social Media Links with Real URLs */}
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/xorazmforex/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-16 h-16 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-125 hover:-translate-y-2 shadow-lg hover:shadow-pink-500/40 overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                <Instagram className="w-8 h-8 text-white group-hover:animate-pulse group-hover:scale-110 transition-all duration-300 relative z-10" />

                {/* Floating particles */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-200"></div>
              </a>

              <a
                href="https://t.me/thexorazmforex"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-125 hover:-translate-y-2 shadow-lg hover:shadow-blue-500/40 overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                <Send className="w-8 h-8 text-white group-hover:animate-pulse group-hover:scale-110 transition-all duration-300 relative z-10" />

                {/* Floating particles */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-200"></div>
              </a>

              <a
                href="https://www.youtube.com/@XorazmForex"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-125 hover:-translate-y-2 shadow-lg hover:shadow-red-500/40 overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                <Youtube className="w-8 h-8 text-white group-hover:animate-pulse group-hover:scale-110 transition-all duration-300 relative z-10" />

                {/* Floating particles */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-orange-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-200"></div>
              </a>
            </div>

            {/* Enhanced Contact Details */}
            <div className="space-y-6">
              <a
                href="tel:+998500012959"
                className={`group flex items-center space-x-6 p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer ${
                  isDarkMode ? "bg-gray-900 hover:bg-gray-800" : "bg-gray-800 hover:bg-gray-700"
                } hover:shadow-lg`}
              >
                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-7 h-7 text-white group-hover:animate-pulse" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Telefon raqam</p>
                  <p className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                    +998 (50) 001-29-59
                  </p>
                </div>
              </a>

              <div
                className={`group flex items-center space-x-6 p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer ${
                  isDarkMode ? "bg-gray-900 hover:bg-gray-800" : "bg-gray-800 hover:bg-gray-700"
                } hover:shadow-lg`}
              >
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7 text-white group-hover:animate-pulse" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Manzil</p>
                  <p className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    O'zbekiston, Urganch
                  </p>
                </div>
              </div>

              <div
                className={`group flex items-center space-x-6 p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer ${
                  isDarkMode ? "bg-gray-900 hover:bg-gray-800" : "bg-gray-800 hover:bg-gray-700"
                } hover:shadow-lg`}
              >
                <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-7 h-7 text-white group-hover:animate-pulse" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Ish vaqti</p>
                  <p className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                    Dush - Juma: 9:00 - 18:00
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Map */}
            <div
              className={`rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                isDarkMode ? "bg-gray-900 hover:bg-gray-800" : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              <div className="w-full h-64 bg-gray-300 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.8574234613716!2d60.63580337576566!3d41.54987066678071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc91f3161d24d%3A0x8e2c995863977411!2sXORAZM%20FOREX%20-%20TREYDING%20AKADEMIYASI!5e0!3m2!1sen!2s!4v1716932400000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
