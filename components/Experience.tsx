'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const experienceData = [
  {
    id: '1',
    company: 'ACD | Veri Muhendisligi',
    startDate: '10/2023',
    endDate: '10/2025',
    current: false,
    technologies: ['React', 'Jest', 'Cypress', 'Jenkins', 'Elasticsearch', 'Grafana', 'Docker', 'MongoDB', 'Cassandra', 'Kafka', 'Redis', 'GitHub'],
  },
  {
    id: '2',
    company: 'Inovasyon Muhendislik',
    startDate: '07/2023',
    endDate: '10/2023',
    current: false,
    technologies: ['React', 'Redux', 'Python', 'Node.js', 'Microservices'],
  },
  {
    id: '3',
    company: 'SDU Bilgi Islem Daire Baskanligi',
    startDate: '09/2021',
    endDate: '10/2021',
    current: false,
    technologies: ['PuTTY', 'SSH', 'Network Infrastructure'],
  },
]

export default function ExperienceSection() {
  const { t } = useTranslation()
  
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-12 flex items-center gap-4">
            <span className="text-accent font-mono text-xl">03.</span>
            {t('experience.title')}
          </h2>

          <div className="space-y-8">
            {experienceData.map((exp, index) => {
              const expData = t(`experience.items.${exp.id}`, { returnObjects: true }) as any
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 border-l border-primary-lighter"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full" />
                  
                  <div className="mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h3 className="text-text-primary font-semibold text-lg">
                          {expData.position}
                        </h3>
                        <p className="text-accent font-mono text-sm">
                          {exp.company} • {expData.location}
                        </p>
                      </div>
                      <span className="text-text-tertiary text-sm font-mono">
                        {exp.startDate} - {exp.current ? t('experience.present') : exp.endDate}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 text-text-secondary">
                    {expData.description.map((item: string, i: number) => (
                      <p key={i} className="flex items-start gap-2">
                        <span className="text-accent mt-1">▹</span>
                        {item}
                      </p>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary-lighter text-accent rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

