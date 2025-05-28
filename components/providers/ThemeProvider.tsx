"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface ThemeContextType {
  isDarkMode: boolean
  toggleTheme: () => void
  isThemeChanging: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isThemeChanging, setIsThemeChanging] = useState(false)

  const toggleTheme = () => {
    setIsThemeChanging(true)
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")

    setTimeout(() => {
      setIsThemeChanging(false)
    }, 200)
  }

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  useEffect(() => {
    // Save theme preference
    localStorage.setItem("theme", isDarkMode ? "dark" : "light")
  }, [isDarkMode])

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, isThemeChanging }}>
      <div
        className={`transition-colors duration-200 ${isDarkMode ? "dark" : ""} ${isThemeChanging ? "pointer-events-none" : ""}`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
