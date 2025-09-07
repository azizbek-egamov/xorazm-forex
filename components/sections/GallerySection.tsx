"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useTheme } from "@/components/providers/ThemeProvider"
import { Eye, ChevronLeft, ChevronRight, X } from "lucide-react"

export default function GallerySection() {
  const { isDarkMode } = useTheme()
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const galleryImages = [
    {
      src: "/images/gallery-1.png",
      alt: "Argentina jamoasi - Xorazm Forex futbol klubi",
      title: "Argentina jamoasi",
    },
    {
      src: "/images/gallery-2.png",
      alt: "Lions jamoasi - Xorazm Forex futbol klubi",
      title: "Lions jamoasi",
    },
    {
      src: "/images/gallery-3.png",
      alt: "Rasmiy tadbirda ishtirok",
      title: "Rasmiy tadbirda ishtirok",
    },
    {
      src: "/images/gallery-4.png",
      alt: "Ofisda ish jarayoni",
      title: "Ofisda ish jarayoni",
    },
    {
      src: "/images/gallery-5.png",
      alt: "Televideniyeda intervyu",
      title: "Televideniyeda intervyu",
    },
  ]

  const openGallery = (index: number) => {
    setCurrentImageIndex(index)
    setIsGalleryOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (isGalleryOpen) {
        if (event.key === "ArrowRight") {
          nextImage()
        } else if (event.key === "ArrowLeft") {
          previousImage()
        } else if (event.key === "Escape") {
          setIsGalleryOpen(false)
        }
      }
    }

    document.addEventListener("keydown", handleKeyPress)
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [isGalleryOpen])

  return (
    <section className={`py-16 lg:py-24 px-4 sm:px-6 lg:px-12 ${isDarkMode ? "bg-gray-950 text-white" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${
              isDarkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Bizning galereya
          </h2>
          <p className={`text-lg lg:text-xl ${isDarkMode ? "text-gray-100" : "text-gray-600"}`}>
            Akademiyamizning faoliyati va yutuqlaridan lavhalar
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative aspect-square cursor-pointer group overflow-hidden rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                isDarkMode ? "border-gray-700 hover:border-red-400" : "border-gray-200 hover:border-red-300"
              }`}
              onClick={() => openGallery(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Eye className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Modal */}
        <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
          <DialogContent
            className={`max-w-6xl w-[95vw] h-[90vh] p-0 border-0 ${isDarkMode ? "bg-gray-950 border-gray-800" : "bg-white border-gray-200"}`}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={() => setIsGalleryOpen(false)}
                className={`absolute top-4 right-4 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-red-600 text-gray-200 hover:text-white"
                    : "bg-gray-100 hover:bg-red-600 hover:text-white"
                }`}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Previous Button */}
              <button
                onClick={previousImage}
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-gray-200"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-gray-200"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Main Image */}
              <div className="relative w-full h-full flex items-center justify-center p-8 lg:p-16">
                <Image
                  src={galleryImages[currentImageIndex].src || "/placeholder.svg"}
                  alt={galleryImages[currentImageIndex].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Image Counter and Dots */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
                <div className="flex flex-col items-center space-y-4">
                  {/* Counter */}
                  <div
                    className={`px-4 py-2 rounded-full text-sm ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-900 text-white"}`}
                  >
                    {currentImageIndex + 1} / {galleryImages.length}
                  </div>

                  {/* Dots */}
                  <div className="flex space-x-2">
                    {galleryImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentImageIndex ? "bg-red-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Title */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-40">
                <div
                  className={`px-6 py-3 rounded-full text-lg font-semibold ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-900 text-white"}`}
                >
                  {galleryImages[currentImageIndex].title}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
