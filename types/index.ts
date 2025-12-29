export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  techStack: string[]
  challenges: string[]
  solutions: string[]
  impact?: string
  githubUrl?: string
  liveUrl: string
  image?: string
  featured?: boolean
}

export interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string | null
  current: boolean
  description: string[]
  achievements: string[]
  technologies: string[]
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'other'
  proficiency?: 'expert' | 'advanced' | 'intermediate'
}

