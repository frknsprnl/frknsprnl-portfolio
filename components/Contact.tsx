'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiExternalLink } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Here you would typically send the form data to an API
    // For now, we'll use mailto as a fallback
    const mailtoLink = `mailto:furkansprnl@gmail.com?subject=Contact from Portfolio&body=Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`
    window.location.href = mailtoLink
    
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/frknsprnl', icon: FaGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/furkansupurenel/', icon: FaLinkedin },
    { name: 'Twitter', url: 'https://twitter.com/frknsprnl', icon: FaTwitter },
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4 flex items-center gap-4 justify-center">
            <span className="text-accent font-mono text-xl">05.</span>
            {t('contact.title')}
          </h2>
          <p className="text-text-secondary text-center mb-12 max-w-lg mx-auto">
            {t('contact.description')}
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-text-primary text-sm mb-2 font-mono">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-primary-lighter border border-primary-lighter rounded focus:outline-none focus:border-accent text-text-primary placeholder-text-tertiary transition-colors"
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-primary text-sm mb-2 font-mono">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-primary-lighter border border-primary-lighter rounded focus:outline-none focus:border-accent text-text-primary placeholder-text-tertiary transition-colors"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-text-primary text-sm mb-2 font-mono">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-primary-lighter border border-primary-lighter rounded focus:outline-none focus:border-accent text-text-primary placeholder-text-tertiary transition-colors resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { 
                  scale: 1.02, 
                  y: -2,
                  boxShadow: '0 10px 30px -10px rgba(100, 255, 218, 0.5)'
                } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="w-full px-6 py-3 bg-accent text-[#0a192f] font-semibold rounded border border-accent font-mono text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('contact.sending') : t('contact.sendMessage')}
              </motion.button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-text-primary font-semibold mb-4">{t('contact.letsConnect')}</h3>
                <a
                  href="mailto:furkansprnl@gmail.com"
                  className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors mb-4"
                >
                  <HiMail size={20} />
                  <span>furkansprnl@gmail.com</span>
                </a>
                <a
                  href="tel:+905456748740"
                  className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors mb-6"
                >
                  <HiPhone size={20} />
                  <span>+90 545 674 8740</span>
                </a>
              </div>

              <div>
                <h3 className="text-text-primary font-semibold mb-4">{t('contact.findMeOn')}</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-tertiary hover:text-accent transition-colors"
                        aria-label={link.name}
                      >
                        <Icon size={24} />
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className="pt-8 border-t border-primary-lighter">
                <p className="text-text-secondary text-sm">
                  {t('contact.preferDirect')}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
