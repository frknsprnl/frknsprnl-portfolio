'use client'

import { motion } from 'framer-motion'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const projectsData = [
  {
    id: '1',
    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/frknsprnl/coffee-shop',
    liveUrl: 'https://thecoffeeshopfs.netlify.app/',
    image: 'thecoffeeshop.png',
    featured: true,
  },
  {
    id: '2',
    techStack: ['React', 'Next.js', 'Tailwind CSS'],
    liveUrl: 'https://goldsol.vercel.app/',
    image: 'goldsol.png',
    featured: true,
  },
  {
    id: '3',
    techStack: ['React', 'Tailwind CSS', 'Vite', 'Scraper API'],
    liveUrl: 'https://eskisehirnobetcieczane.netlify.app/',
    image: 'eskisehirnobetcieczane.png',
    featured: true,
  },
]

export default function Projects() {
  const { t } = useTranslation()
  const featuredProjects = projectsData.filter(p => p.featured)

  return (
    <section id="projects" className="section-padding bg-primary-light/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4 flex items-center gap-4">
            <span className="text-accent font-mono text-xl">04.</span>
            {t('projects.title')}
          </h2>
          <p className="text-text-secondary mb-12 max-w-2xl">
            {t('projects.description')}
          </p>

          <div className="space-y-24">
            {featuredProjects.map((project, index) => {
              const projectData = t(`projects.items.${project.id}`, { returnObjects: true }) as any
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'md:grid-flow-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-accent/20 rounded-lg blur-xl group-hover:blur-2xl transition-all" />
                      <div className="relative bg-primary-lighter rounded-lg overflow-hidden border border-primary-lighter">
                        <Image
                          src={`/assets/${project.image || 'project-placeholder.png'}`}
                          alt={projectData.title}
                          width={600}
                          height={400}
                          className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                    <div className="space-y-4">
                      <div>
                        <p className="text-accent font-mono text-sm mb-2">{t('projects.featured')}</p>
                        <h3 className="text-2xl font-bold text-text-primary mb-3">
                          {projectData.title}
                        </h3>
                        <p className="text-text-secondary leading-relaxed">
                          {projectData.longDescription}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-text-tertiary font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 pt-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-tertiary hover:text-accent transition-colors"
                            aria-label="View code on GitHub"
                          >
                            <HiCode size={20} />
                          </a>
                        )}
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-tertiary hover:text-accent transition-colors"
                          aria-label="View live project"
                        >
                          <HiExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <a
              href="https://github.com/frknsprnl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors font-mono text-sm"
            >
              {t('projects.viewMore')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
