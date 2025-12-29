import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'
import I18nProvider from '@/components/I18nProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const firaCode = Fira_Code({ 
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Furkan Süpürenel | Full-Stack Web Developer',
  description: 'Experienced Full-Stack Web Developer with over 3 years of hands-on development. Proficient in building scalable, high-performance web applications using modern technologies.',
  keywords: ['Full-Stack Web Developer', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'MongoDB', 'Docker'],
  authors: [{ name: 'Furkan Süpürenel' }],
  openGraph: {
    title: 'Furkan Süpürenel | Full-Stack Web Developer',
    description: 'Experienced Full-Stack Web Developer with over 3 years of hands-on development experience',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} antialiased`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
