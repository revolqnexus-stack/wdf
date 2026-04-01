'use client'

import { useEffect, useRef, RefObject } from 'react'

interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useScrollReveal<T extends HTMLElement>(
  callback: (entry: IntersectionObserverEntry) => void,
  options: ScrollRevealOptions = {}
): RefObject<T> {
  const { threshold = 0.1, rootMargin = '0px', once = true } = options
  const elementRef = useRef<T>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(entry)
            if (once) {
              observer.unobserve(element)
            }
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [callback, threshold, rootMargin, once])

  return elementRef as RefObject<T>
}
