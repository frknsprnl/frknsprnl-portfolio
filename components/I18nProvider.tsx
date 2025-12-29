'use client'

import { useEffect } from 'react'
import i18n from '@/i18n/config'

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // On client-side, sync language with localStorage and browser
    const storedLang = localStorage.getItem('i18nextLng')
    if (storedLang && storedLang !== i18n.language && (storedLang === 'en' || storedLang === 'tr')) {
      i18n.changeLanguage(storedLang)
    }
    
    // Set initial html lang attribute
    document.documentElement.lang = i18n.language || 'en'
    
    // Listen for language changes
    const handleLanguageChanged = (lng: string) => {
      document.documentElement.lang = lng
      localStorage.setItem('i18nextLng', lng)
    }
    
    i18n.on('languageChanged', handleLanguageChanged)
    
    return () => {
      i18n.off('languageChanged', handleLanguageChanged)
    }
  }, [])

  return <>{children}</>
}

