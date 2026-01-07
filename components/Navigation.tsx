'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'

const navItems = [
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
]

export default function Navigation() {
  const { t, i18n } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const currentLanguage = i18n.language || 'en'

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const changeLanguage = (lang: 'en' | 'tr') => {
    i18n.changeLanguage(lang)
    // Update html lang attribute
    document.documentElement.lang = lang
  }

  // Flag Icons Components
  const TurkishFlag = () => (
    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="18" fill="#E30A17"/>
      {/* Crescent (Hilal) */}
      <circle cx="8" cy="9" r="4" fill="white"/>
      <circle cx="9.5" cy="9" r="4" fill="#E30A17"/>
      {/* Star */}
      <path d="M15 6L15.6 7.8L17.4 7.8L15.9 8.9L16.5 10.7L15 9.5L13.5 10.7L14.1 8.9L12.6 7.8L14.4 7.8L15 6Z" fill="white"/>
    </svg>
  )

  const EnglishFlag = () => (
    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="18" fill="#012169"/>
      <path d="M0 0L24 18M24 0L0 18" stroke="white" strokeWidth="2"/>
      <path d="M0 0L24 18M24 0L0 18" stroke="#C8102E" strokeWidth="1.2"/>
      <path d="M12 0V18M0 9H24" stroke="white" strokeWidth="3"/>
      <path d="M12 0V18M0 9H24" stroke="#C8102E" strokeWidth="2"/>
    </svg>
  )

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-primary/80 backdrop-blur-md border-b border-primary-light'
          : 'bg-transparent'
        }`}
    >
      <div className="container-custom px-6 sm:px-12 lg:px-24 py-3">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navItems.map((item, index) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector(item.href)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="text-sm text-text-secondary hover:text-accent transition-colors font-mono"
                style={{ animationDelay: `${index * 0.1}s` }}
                suppressHydrationWarning
              >
                <span className="text-accent">0{index + 1}.</span> {mounted ? t(`nav.${item.key}`) : item.key}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm border border-accent text-accent rounded hover:bg-accent/10 transition-colors font-mono"
              suppressHydrationWarning
            >
              {mounted ? t('nav.resume') : 'Resume'}
            </a>
          </div>

          {/* Language Toggle Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => changeLanguage('tr')}
              className={`p-2 rounded transition-all duration-200 ${
                currentLanguage === 'tr'
                  ? 'bg-accent/20 border-2 border-accent'
                  : 'hover:bg-primary/50 border-2 border-transparent opacity-60 hover:opacity-100'
              }`}
              aria-label="Switch to Turkish"
              title="Türkçe"
            >
              <TurkishFlag />
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`p-2 rounded transition-all duration-200 ${
                currentLanguage === 'en'
                  ? 'bg-accent/20 border-2 border-accent'
                  : 'hover:bg-primary/50 border-2 border-transparent opacity-60 hover:opacity-100'
              }`}
              aria-label="Switch to English"
              title="English"
            >
              <EnglishFlag />
            </button>
          </div>

          {/* Mobile Menu Button and Language Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <div className="flex items-center gap-1">
              <button
                onClick={() => changeLanguage('tr')}
                className={`p-1.5 rounded transition-all duration-200 ${
                  currentLanguage === 'tr'
                    ? 'bg-accent/20 border border-accent'
                    : 'hover:bg-primary/50 border border-transparent opacity-60 hover:opacity-100'
                }`}
                aria-label="Switch to Turkish"
                title="Türkçe"
              >
                <TurkishFlag />
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`p-1.5 rounded transition-all duration-200 ${
                  currentLanguage === 'en'
                    ? 'bg-accent/20 border border-accent'
                    : 'hover:bg-primary/50 border border-transparent opacity-60 hover:opacity-100'
                }`}
                aria-label="Switch to English"
                title="English"
              >
                <EnglishFlag />
              </button>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-primary p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 space-y-4"
              >
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      setIsMobileMenuOpen(false)
                      const element = document.querySelector(item.href)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }
                    }}
                    className="block text-text-secondary hover:text-accent transition-colors py-2"
                    suppressHydrationWarning
                  >
                    {mounted ? t(`nav.${item.key}`) : item.key}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm border border-accent text-accent rounded hover:bg-accent/10 transition-colors w-fit"
                  suppressHydrationWarning
                >
                  {mounted ? t('nav.resume') : 'Resume'}
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  )
}

