'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { defaultLanguage, translations } from '../translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(defaultLanguage)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get language from localStorage or use default
    const savedLanguage = localStorage.getItem('widget-story-language')
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    // Save language to localStorage when it changes
    if (!isLoading) {
      localStorage.setItem('widget-story-language', language)
    }
  }, [language, isLoading])

  const changeLanguage = (newLanguage) => {
    if (translations[newLanguage]) {
      setLanguage(newLanguage)
    }
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        // Fallback to English if key not found
        value = translations[defaultLanguage]
        for (const k of keys) {
          if (value && typeof value === 'object' && k in value) {
            value = value[k]
          } else {
            return key // Return key if not found anywhere
          }
        }
        break
      }
    }
    
    return value
  }

  const value = {
    language,
    changeLanguage,
    t,
    isLoading,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
