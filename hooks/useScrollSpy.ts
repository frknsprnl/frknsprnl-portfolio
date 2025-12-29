'use client'

import { useEffect } from 'react'

const sections = ['about', 'experience', 'projects', 'contact']

export function useScrollSpy() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const viewportHeight = window.innerHeight
      const viewportCenter = scrollPosition + viewportHeight / 2

      // If we're at the top of the page (Hero section), clear the hash
      if (scrollPosition < 100) {
        if (window.location.hash) {
          window.history.replaceState(null, '', window.location.pathname)
        }
        return
      }

      // Find the section that is most visible in the viewport
      let currentSection = ''
      let maxVisibility = 0

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + scrollPosition
          const elementBottom = elementTop + rect.height

          // Calculate how much of the section is visible in viewport
          const visibleTop = Math.max(scrollPosition, elementTop)
          const visibleBottom = Math.min(scrollPosition + viewportHeight, elementBottom)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)
          const visibility = visibleHeight / Math.min(viewportHeight, rect.height)

          // Check if viewport center is within this section
          const isCenterInSection = viewportCenter >= elementTop && viewportCenter <= elementBottom

          // Prefer section that contains viewport center, or has highest visibility
          if (isCenterInSection || (visibility > maxVisibility && visibility > 0.3)) {
            if (isCenterInSection || visibility > maxVisibility) {
              currentSection = sectionId
              maxVisibility = visibility
            }
          }
        }
      }

      // Update hash if we found a section and it's different from current hash
      if (currentSection && window.location.hash !== `#${currentSection}`) {
        window.history.replaceState(null, '', `#${currentSection}`)
      }
    }

    // Handle initial hash if present
    const handleInitialHash = () => {
      if (window.location.hash) {
        const hash = window.location.hash.substring(1)
        if (sections.includes(hash)) {
          const element = document.getElementById(hash)
          if (element) {
            // Small delay to ensure page is fully rendered
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 100)
          }
        }
      }
    }

    // Initial check after a small delay to ensure DOM is ready
    const initialTimeout = setTimeout(() => {
      handleInitialHash()
      handleScroll()
    }, 100)

    // Throttle scroll events for better performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })

    return () => {
      clearTimeout(initialTimeout)
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [])
}

