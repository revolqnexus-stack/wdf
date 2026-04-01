'use client'

import { useEffect, useRef } from 'react'
import styles from './RevealText.module.css'

interface RevealTextProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function RevealText({ children, delay = 0, className = '' }: RevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const element = containerRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            import('animejs').then(({ animate }) => {
              animate(element, {
                opacity: [0, 1],
                y: [20, 0],
                duration: 600,
                delay,
                ease: 'outExpo',
              })
            })
            observer.unobserve(element)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [delay])

  return (
    <div ref={containerRef} className={`${styles.container} ${className}`}>
      {children}
    </div>
  )
}
