"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useTheme } from "@/components/providers/ThemeProvider"
import { Award, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"

export default function CertificatesSection() {
    const { isDarkMode } = useTheme()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const certificates = [
        { src: "/images/cert/1.jpg", alt: "Mijoz natijasi 1" },
        { src: "/images/cert/2.jpg", alt: "Mijoz natijasi 2" },
        { src: "/images/cert/3.jpg", alt: "Mijoz natijasi 3" },
        { src: "/images/cert/4.jpg", alt: "Mijoz natijasi 4" },
        { src: "/images/cert/5.jpg", alt: "Mijoz natijasi 5" },
        { src: "/images/cert/6.jpg", alt: "Mijoz natijasi 6" },
        { src: "/images/cert/7.jpg", alt: "Mijoz natijasi 7" },
        { src: "/images/cert/8.jpg", alt: "Mijoz natijasi 8" },
        { src: "/images/cert/9.jpg", alt: "Mijoz natijasi 9" },
    ]

    const openModal = (index: number) => {
        setCurrentImageIndex(index)
        setIsModalOpen(true)
    }

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % certificates.length)
    }

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
    }

    return (
        <section
            id="certificates"
            className={`py-16 lg:py-24 px-4 sm:px-6 lg:px-12 ${isDarkMode ? "bg-gray-950 text-white" : "bg-white"
                }`}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-sm font-semibold mb-6">
                        <Award className="w-4 h-4" />
                        REAL NATIJALAR
                    </div>
                    <h2
                        className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${isDarkMode ? "text-gray-100" : "text-gray-900"
                            }`}
                    >
                        Mijozlarimizning natijalari
                    </h2>
                    <p
                        className={`text-lg max-w-2xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                    >
                        Treyderlarimizning real savdo natijalari va muvaffaqiyatlari
                    </p>
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            onClick={() => openModal(index)}
                            className={`group relative aspect-[16/10] cursor-pointer overflow-hidden rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${isDarkMode
                                ? "border-gray-700 hover:border-teal-500"
                                : "border-gray-200 hover:border-teal-400"
                                }`}
                        >
                            <Image
                                src={cert.src}
                                alt={cert.alt}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                <div className="flex items-center gap-2 text-white bg-teal-600/80 px-3 py-1.5 rounded-full text-sm font-medium">
                                    <ZoomIn className="w-4 h-4" />
                                    Ko'rish
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent
                    className={`max-w-4xl w-[95vw] h-[90vh] p-0 border-0 ${isDarkMode ? "bg-gray-950" : "bg-white"
                        }`}
                >
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className={`absolute top-4 right-4 z-50 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDarkMode
                                ? "bg-gray-800 hover:bg-teal-600 text-white"
                                : "bg-gray-100 hover:bg-teal-600 hover:text-white"
                                }`}
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevImage}
                            className={`absolute left-4 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all ${isDarkMode
                                ? "bg-gray-800/80 hover:bg-teal-600 text-white"
                                : "bg-white/80 hover:bg-teal-600 hover:text-white shadow-lg"
                                }`}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextImage}
                            className={`absolute right-4 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all ${isDarkMode
                                ? "bg-gray-800/80 hover:bg-teal-600 text-white"
                                : "bg-white/80 hover:bg-teal-600 hover:text-white shadow-lg"
                                }`}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Image */}
                        <div className="relative w-full h-full p-12">
                            <Image
                                src={certificates[currentImageIndex].src}
                                alt={certificates[currentImageIndex].alt}
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Counter */}
                        <div
                            className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? "bg-gray-800 text-white" : "bg-white shadow-lg"
                                }`}
                        >
                            {currentImageIndex + 1} / {certificates.length}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    )
}
