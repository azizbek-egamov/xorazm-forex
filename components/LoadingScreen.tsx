"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true)
    const [isFading, setIsFading] = useState(false)

    useEffect(() => {
        // Start fade out animation
        const fadeTimer = setTimeout(() => {
            setIsFading(true)
        }, 1000)

        // Remove from DOM after fade completes
        const removeTimer = setTimeout(() => {
            setIsLoading(false)
        }, 1700)

        return () => {
            clearTimeout(fadeTimer)
            clearTimeout(removeTimer)
        }
    }, [])

    if (!isLoading) return null

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-950 transition-all duration-1000 ease-out ${isFading ? "opacity-0 scale-105" : "opacity-100 scale-100"
                }`}
        >
            {/* Logo with spinning ring */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                {/* Spinning ring */}
                <div
                    className="absolute inset-0 rounded-full animate-spin"
                    style={{
                        background: "conic-gradient(from 0deg, transparent, #14b8a6, transparent)",
                        animationDuration: "1.5s",
                    }}
                />

                {/* Inner dark circle */}
                <div className="absolute inset-2 rounded-full bg-gray-950" />

                {/* Logo */}
                <div className="absolute inset-4 flex items-center justify-center">
                    <Image
                        src="/images/logo.png"
                        alt="Xorazm Forex Logo"
                        width={100}
                        height={100}
                        className="w-full h-full object-contain"
                        priority
                    />
                </div>

                {/* Glowing effect */}
                <div
                    className="absolute inset-0 rounded-full animate-pulse"
                    style={{
                        boxShadow: "0 0 40px rgba(20, 184, 166, 0.3), 0 0 80px rgba(20, 184, 166, 0.1)",
                    }}
                />
            </div>

            {/* Loading text */}
            <div className="mt-8 text-center">
                <p className="text-teal-400 text-sm sm:text-base animate-pulse">
                    Yuklanmoqda...
                </p>
            </div>

            {/* Animated dots */}
            <div className="flex gap-1.5 mt-4">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
        </div>
    )
}
