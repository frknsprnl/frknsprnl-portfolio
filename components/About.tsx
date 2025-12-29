'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'
import Image from 'next/image'

export default function About() {
  const { t } = useTranslation()
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          // className="max-w-4xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4 flex items-center gap-4">
            <span className="text-accent font-mono text-xl">01.</span>
            {t('about.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-4 text-text-secondary">
              <p>
                <Trans
                  i18nKey="about.paragraph1"
                  components={[
                    <span key="0" className="text-accent" />,
                    <span key="1" className="text-accent" />,
                  ]}
                />
              </p>
              <p>
                <Trans
                  i18nKey="about.paragraph2"
                  components={[
                    <span key="0" className="text-accent" />,
                    <span key="1" className="text-accent" />,
                    <span key="2" className="text-accent" />,
                  ]}
                />
              </p>
              <p>
                <Trans
                  i18nKey="about.paragraph3"
                  components={[<span key="0" className="text-accent" />]}
                />
              </p>
            </div>

            <div className="space-y-4">
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-full max-w-sm mx-auto md:mx-0"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-accent/20 group">
                  <div className="absolute inset-0 bg-accent/10 rounded-lg blur-xl group-hover:blur-2xl transition-all" />
                  <Image
                    src="/assets/frknsprnl.png"
                    alt="Furkan Süpürenel"
                    fill
                    className="object-cover rounded-lg opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 border-2 border-accent/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>

          
            </div>
            
                {/* What I Bring */}
                <div className="space-y-4">
                <h3 className="text-text-primary font-semibold mb-4">{t('about.whatIBring')}</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">▹</span>
                    <span>
                      <Trans
                        i18nKey="about.problemSolving"
                        components={[<strong key="0" className="text-text-primary" />]}
                      />
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">▹</span>
                    <span>
                      <Trans
                        i18nKey="about.scalableSystems"
                        components={[<strong key="0" className="text-text-primary" />]}
                      />
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">▹</span>
                    <span>
                      <Trans
                        i18nKey="about.cleanCode"
                        components={[<strong key="0" className="text-text-primary" />]}
                      />
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">▹</span>
                    <span>
                      <Trans
                        i18nKey="about.productMindset"
                        components={[<strong key="0" className="text-text-primary" />]}
                      />
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">▹</span>
                    <span>
                      <Trans
                        i18nKey="about.collaboration"
                        components={[<strong key="0" className="text-text-primary" />]}
                      />
                    </span>
                  </li>
                </ul>
              </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

