'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-primary-lighter py-8">
      <div className="container-custom section-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-tertiary text-sm font-mono">
            © {currentYear} Furkan Süpürenel. {t('footer.builtWith')}
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/frknsprnl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/furkansupurenel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
