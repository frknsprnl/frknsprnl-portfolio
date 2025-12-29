'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import type { Skill } from '@/types'

const skills: Skill[] = [
  // Frontend
  { name: 'HTML / CSS / JS', category: 'frontend', proficiency: 'advanced' },
  { name: 'React', category: 'frontend', proficiency: 'advanced' },
  { name: 'Next.js', category: 'frontend', proficiency: 'advanced' },
  { name: 'TypeScript', category: 'frontend', proficiency: 'advanced' },
  { name: 'Redux', category: 'frontend', proficiency: 'advanced' },
  { name: 'Tailwind / Bootstrap', category: 'frontend', proficiency: 'advanced' },
  { name: 'Jest / Cypress', category: 'frontend', proficiency: 'advanced' },
  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 'advanced' },
  { name: 'Python', category: 'backend', proficiency: 'advanced' },
  { name: 'SQL', category: 'backend', proficiency: 'advanced' },
  { name: 'MongoDB', category: 'backend', proficiency: 'advanced' },
  { name: 'Kafka', category: 'backend', proficiency: 'advanced' },
  { name: 'Redis', category: 'backend', proficiency: 'advanced' },
  { name: 'RabbitMQ', category: 'backend', proficiency: 'advanced' },
  
  
  // Tools & DevOps
  { name: 'Git', category: 'tools', proficiency: 'advanced' },
  { name: 'Docker', category: 'tools', proficiency: 'advanced' },
  { name: 'Jenkins', category: 'tools', proficiency: 'advanced' },
  { name: 'ElasticSearch', category: 'tools', proficiency: 'advanced' },
  { name: 'Grafana', category: 'tools', proficiency: 'advanced' },
]

export default function Skills() {
  const { t } = useTranslation()
  
  const categories = {
    frontend: t('skills.frontend'),
    backend: t('skills.backend'),
    tools: t('skills.tools'),
  }

  const groupedSkills = {
    frontend: skills.filter(s => s.category === 'frontend'),
    backend: skills.filter(s => s.category === 'backend'),
    tools: skills.filter(s => s.category === 'tools'),
  }

  return (
    <section className="section-padding bg-primary-light/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-12 flex items-center gap-4">
            <span className="text-accent font-mono text-xl">02.</span>
            {t('skills.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-primary rounded-lg p-6 border border-primary-lighter"
              >
                <h3 className="font-semibold text-lg mb-4 text-accent">
                  {categories[category as keyof typeof categories]}
                </h3>
                <ul className="space-y-2">
                  {categorySkills.map((skill, index) => (
                    <li
                      key={skill.name}
                      className="text-text-secondary text-sm flex items-center gap-2"
                    >
                      <span className="text-accent">▹</span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

