"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "@/components/providers/ThemeProvider"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  ArrowRight,
  ArrowLeft,
  Copy,
  Upload,
  CheckCircle,
  Loader2,
  CreditCard,
  User,
  Phone,
  FileImage,
  Sparkles,
} from "lucide-react"

interface Course {
  id: string
  name: string
  price: string
  originalPrice?: string
}

interface PurchaseModalProps {
  isOpen: boolean
  onClose: () => void
  course: Course | null
}

export default function PurchaseModal({ isOpen, onClose, course }: PurchaseModalProps) {
  const { isDarkMode } = useTheme()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    receiptImage: null as File | null,
  })

  const cardNumber = "8600 1204 1840 9390"

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({
        ...prev,
        receiptImage: file,
      }))
    }
  }

  const copyCardNumber = async () => {
    try {
      await navigator.clipboard.writeText(cardNumber.replace(/\s/g, ""))
      // You could add a toast notification here
    } catch (err) {
      console.error("Failed to copy card number:", err)
    }
  }

  const handleContinue = () => {
    if (step === 1) {
      if (formData.fullName && formData.phone) {
        setStep(2)
      }
    } else if (step === 2) {
      setStep(3)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = async () => {
    if (!course || !formData.fullName || !formData.phone || !formData.receiptImage) {
      return
    }

    setIsSubmitting(true)

    try {
      // Create FormData for file upload
      const submitData = new FormData()
      submitData.append("courseName", course.name)
      submitData.append("coursePrice", course.price)
      submitData.append("fullName", formData.fullName)
      submitData.append("phone", formData.phone)
      submitData.append("receiptImage", formData.receiptImage)

      const response = await fetch("/api/course-enrollment", {
        method: "POST",
        body: submitData,
      })

      if (!response.ok) {
        throw new Error("Enrollment failed")
      }

      setIsSuccess(true)

      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false)
        setStep(1)
        setFormData({
          fullName: "",
          phone: "",
          receiptImage: null,
        })
        onClose()
      }, 3000)
    } catch (error) {
      console.error("Enrollment error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setStep(1)
    setFormData({
      fullName: "",
      phone: "",
      receiptImage: null,
    })
    onClose()
  }

  if (!course) return null

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className={`max-w-md mx-auto ${isDarkMode ? "bg-gray-900 border-gray-800" : "bg-white"}`}>
        {/* Success Animation Overlay */}
        {isSuccess && (
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/90 to-emerald-500/90 flex items-center justify-center z-50 rounded-lg animate-fade-in">
            <div className="text-center text-white">
              <CheckCircle className="w-16 h-16 mx-auto mb-4 animate-bounce" />
              <h3 className="text-xl font-bold mb-2">Muvaffaqiyatli!</h3>
              <p className="text-sm">Kursga yozilish so'rovi yuborildi!</p>
              <div className="flex justify-center mt-4">
                <Sparkles className="w-5 h-5 animate-spin text-yellow-300" />
              </div>
            </div>
          </div>
        )}

        <DialogHeader>
          <DialogTitle className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            {course.name} kursiga yozilish
          </DialogTitle>
        </DialogHeader>

        {/* Step Indicator */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  step >= stepNumber
                    ? "bg-red-600 text-white"
                    : isDarkMode
                      ? "bg-gray-700 text-gray-300"
                      : "bg-gray-200 text-gray-600"
                }`}
              >
                {stepNumber}
              </div>
              {stepNumber < 3 && (
                <div
                  className={`w-8 h-0.5 mx-2 transition-all duration-300 ${
                    step > stepNumber ? "bg-red-600" : isDarkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Course Info */}
        <div className={`p-4 rounded-lg mb-6 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
          <h3 className={`font-bold text-lg ${isDarkMode ? "text-white" : "text-gray-900"}`}>{course.name} kursi</h3>
          <div className="flex items-center space-x-2 mt-2">
            {course.originalPrice && <span className="text-red-500 line-through text-sm">{course.originalPrice}</span>}
            <span className={`text-xl font-bold ${isDarkMode ? "text-red-400" : "text-red-600"}`}>{course.price}</span>
          </div>
        </div>

        {/* Step Content */}
        <div className="space-y-4">
          {step === 1 && (
            <>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>
                  <User className="w-4 h-4 inline mr-2" />
                  To'liq ismingiz *
                </label>
                <Input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Ismingizni kiriting"
                  className={`w-full ${isDarkMode ? "bg-gray-800 border-gray-700 text-white placeholder:text-gray-300" : "bg-white border-gray-300 placeholder:text-gray-600"}`}
                  required
                />
              </div>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>
                  <Phone className="w-4 h-4 inline mr-2" />
                  Telefon raqamingiz *
                </label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+998 (90) 123-45-67"
                  className={`w-full ${isDarkMode ? "bg-gray-800 border-gray-700 text-white placeholder:text-gray-300" : "bg-white border-gray-300 placeholder:text-gray-600"}`}
                  required
                />
              </div>
            </>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-blue-50"}`}>
                <h4 className={`font-bold mb-3 flex items-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  <CreditCard className="w-5 h-5 mr-2" />
                  To'lov ma'lumotlari
                </h4>
                <p className={`text-sm mb-3 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                  Quyidagi karta raqamiga to'lov qiling:
                </p>
                <div className="flex items-center space-x-2">
                  <div
                    className={`flex-1 p-3 rounded-lg font-mono text-lg font-bold ${isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"}`}
                  >
                    {cardNumber}
                  </div>
                  <Button
                    onClick={copyCardNumber}
                    variant="outline"
                    size="sm"
                    className={`${isDarkMode ? "border-gray-600 hover:bg-gray-700" : "border-gray-300 hover:bg-gray-50"}`}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
                <p className={`text-xs mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  To'lov qilgandan so'ng, chekni keyingi bosqichda yuklang
                </p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>
                  <FileImage className="w-4 h-4 inline mr-2" />
                  To'lov cheki rasmini yuklang *
                </label>
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors duration-200 ${
                    formData.receiptImage
                      ? isDarkMode
                        ? "border-green-600 bg-green-900/20"
                        : "border-green-500 bg-green-50"
                      : isDarkMode
                        ? "border-gray-600 hover:border-gray-500"
                        : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    id="receipt-upload"
                  />
                  <label htmlFor="receipt-upload" className="cursor-pointer">
                    {formData.receiptImage ? (
                      <div className="space-y-2">
                        <CheckCircle className="w-12 h-12 mx-auto text-green-500" />
                        <p className={`font-semibold ${isDarkMode ? "text-green-400" : "text-green-600"}`}>
                          Rasm yuklandi!
                        </p>
                        <p className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                          {formData.receiptImage.name}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Upload className={`w-12 h-12 mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`} />
                        <p className={`font-semibold ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>
                          Chek rasmini yuklash uchun bosing
                        </p>
                        <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                          PNG, JPG yoki JPEG formatida
                        </p>
                      </div>
                    )}
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <Button
              onClick={handleBack}
              variant="outline"
              className={`${isDarkMode ? "border-gray-600 hover:bg-gray-700" : "border-gray-300 hover:bg-gray-50"}`}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Orqaga
            </Button>
          )}

          <div className="ml-auto">
            {step < 3 ? (
              <Button
                onClick={handleContinue}
                disabled={step === 1 && (!formData.fullName || !formData.phone)}
                className="bg-red-600 hover:bg-red-500 text-white"
              >
                Davom etish
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!formData.receiptImage || isSubmitting}
                className="bg-green-600 hover:bg-green-500 text-white"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Yuborilmoqda...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Yakunlash
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
