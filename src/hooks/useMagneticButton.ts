'use client'

import { useEffect, useRef, RefObject } from 'react'

export function useMagneticButton(elementRef: RefObject<HTMLElement>) {
  const animationRef = useRef<any>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const dx = e.clientX - centerX
      const dy = e.clientY - centerY
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 80) {
        // Only animate within 80px radius
        if (!animationRef.current) {
          import('animejs').then(({ createAnimatable }) => {
            animationRef.current = createAnimatable(element, { x: 0, y: 0 })
          })
        }

        if (animationRef.current) {
          animationRef.current.x = dx * 0.35
          animationRef.current.y = dy * 0.35
        }
      }
    }

    const handleMouseLeave = () => {
      if (animationRef.current) {
        animationRef.current.x = 0
        animationRef.current.y = 0
      }
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)
    element.setAttribute('data-cursor', 'pointer')

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
      element.removeAttribute('data-cursor')
    }
  }, [elementRef])

  return {
    onMouseMove: () => {},
    onMouseLeave: () => {},
  }
}
