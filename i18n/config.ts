import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslations from './locales/en.json'
import trTranslations from './locales/tr.json'

// Always use 'en' on both server and initial client render to prevent hydration mismatch
// Language will be detected and changed on client-side after hydration completes
const initialLanguage = 'en'

i18n
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
    lng: initialLanguage, // Always start with 'en' to prevent hydration mismatch
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, // Disable suspense to prevent hydration issues
    },
  })

export default i18n

