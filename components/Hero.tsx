'use client'

import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent font-mono text-sm sm:text-base mb-4"
          >
            {t('hero.greeting')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4"
          >
            Furkan Süpürenel.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-secondary mb-6"
          >
            {t('hero.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-text-secondary text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            <Trans
              i18nKey="hero.description"
              components={[<span className="text-accent" />]}
            />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: '0 10px 30px -10px rgba(100, 255, 218, 0.5)'
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="px-8 py-4 bg-accent text-[#0a192f] font-semibold rounded border border-accent font-mono text-sm block cursor-pointer"
            >
              {t('hero.viewProjects')}
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                borderColor: 'rgba(100, 255, 218, 1)'
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="px-8 py-4 border border-text-tertiary text-text-primary rounded hover:text-accent font-mono text-sm block cursor-pointer"
            >
              {t('hero.contactMe')}
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 2 }}
            className="mt-20 flex justify-center"
          >
            <a
              href="#about"
              className="text-text-tertiary hover:text-accent transition-colors"
              aria-label="Scroll to about section"
            >
              <HiArrowDown size={24} className="animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

