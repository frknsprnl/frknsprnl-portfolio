import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enTranslations from './locales/en.json'
import trTranslations from './locales/tr.json'

// Determine if we're on the client-side
const isClient = typeof window !== 'undefined'

// Always use 'en' on server to prevent hydration mismatch
// Language will be detected and changed on client-side after hydration
const initialLanguage = isClient ? undefined : 'en'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      tr: {
        translation: trTranslations,
      },
    },
    lng: initialLanguage, // undefined on client (will be detected), 'en' on server
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // Only detect language on client-side
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      order: ['localStorage', 'navigator'],
    },
    react: {
      useSuspense: false, // Disable suspense to prevent hydration issues
    },
  })

export default i18n

