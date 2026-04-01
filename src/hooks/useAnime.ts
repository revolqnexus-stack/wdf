'use client'

import { useEffect, useRef } from 'react'

export function useAnime() {
  const animeRef = useRef<typeof import('animejs') | null>(null)

  useEffect(() => {
    import('animejs').then(mod => {
      animeRef.current = mod
    })
  }, [])

  return animeRef
}
