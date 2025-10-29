'use client'

import { usePathname, useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'
import { defaultLanguage, supportedLanguages, translations } from '../translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(defaultLanguage)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()
  // Avoid useSearchParams to prevent Suspense requirement during SSG

  useEffect(() => {
    // Determine language precedence: URL ?lang= -> localStorage -> default
    const urlLang = typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search).get('lang')
      : null
    const savedLanguage = typeof window !== 'undefined' 
      ? localStorage.getItem('widget-story-language') 
      : null

    if (urlLang && supportedLanguages.includes(urlLang)) {
      setLanguage(urlLang)
      if (typeof window !== 'undefined') {
        localStorage.setItem('widget-story-language', urlLang)
      }
    } else if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    } else {
      setLanguage(defaultLanguage)
    }
    setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // Save language to localStorage when it changes
    if (!isLoading) {
      localStorage.setItem('widget-story-language', language)
    }
  }, [language, isLoading])

  const changeLanguage = (newLanguage) => {
    if (!translations[newLanguage]) return
    setLanguage(newLanguage)
    if (typeof window !== 'undefined') {
      localStorage.setItem('widget-story-language', newLanguage)
    }
    // Sync URL ?lang=newLanguage without full reload
    try {
      if (router && pathname && typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search)
        params.set('lang', newLanguage)
        router.replace(`${pathname}?${params.toString()}`)
      }
    } catch (_) {
      // no-op if navigation not available
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
