"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { getTranslation } from "@/lib/translations" // Import as value, not type
import type { Language } from "@/lib/translations"

// Import the translations type to ensure type safety
type Translations = ReturnType<typeof getTranslation>

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  dir: "ltr" | "rtl"
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load language from localStorage
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && (savedLang === "en" || savedLang === "ar")) {
      setLanguageState(savedLang)
      document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr"
      document.documentElement.lang = savedLang
    } else {
      document.documentElement.dir = "ltr"
      document.documentElement.lang = "en"
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    // Update document direction
    const newDir = lang === "ar" ? "rtl" : "ltr"
    document.documentElement.dir = newDir
    document.documentElement.lang = lang
  }

  const dir = language === "ar" ? "rtl" : "ltr"
  const t = getTranslation(language) // Create the translations object

  useEffect(() => {
    if (mounted) {
      document.documentElement.dir = dir
      document.documentElement.lang = language
    }
  }, [language, dir, mounted])

  return <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
