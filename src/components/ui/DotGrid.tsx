'use client'

import { useEffect, useRef } from 'react'
import styles from './DotGrid.module.css'

interface DotGridProps {
  className?: string
}

export default function DotGrid({ className = '' }: DotGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const dotsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const container = containerRef.current
    if (!container) return

    // Create grid of dots
    const cols = 28
    const rows = 28
    const dots: HTMLDivElement[] = []

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const dot = document.createElement('div')
        dot.className = styles.dot
        container.appendChild(dot)
        dots.push(dot)
      }
    }

    dotsRef.current = dots

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const cellWidth = rect.width / cols
      const cellHeight = rect.height / rows
      const col = Math.floor(x / cellWidth)
      const row = Math.floor(y / cellHeight)

      // Find nearest dots (12 nearest)
      const nearestDots: HTMLDivElement[] = []
      for (let r = Math.max(0, row - 1); r <= Math.min(rows - 1, row + 1); r++) {
        for (let c = Math.max(0, col - 1); c <= Math.min(cols - 1, col + 1); c++) {
          const index = r * cols + c
          if (dots[index]) {
            nearestDots.push(dots[index])
          }
        }
      }

      // Animate nearest dots
      import('animejs').then(({ animate }) => {
        animate(nearestDots, {
          scale: [1, 3, 1],
          backgroundColor: ['#1e1e1e', '#e8ff00', '#1e1e1e'],
          duration: 700,
          ease: 'outElastic(1, 0.5)',
          composition: 'blend',
        })
      })
    }

    container.addEventListener('mousemove', handleMouseMove)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      // Clean up dots
      dots.forEach(dot => dot.remove())
    }
  }, [])

  return (
    <div ref={containerRef} className={`${styles.container} ${className}`} />
  )
}
