import { useState, useEffect } from 'react'

/**
 * Hook to prevent hydration mismatches by ensuring content only renders after mount
 * This is useful for i18n content that might differ between server and client
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}

