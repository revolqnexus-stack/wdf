'use client'

import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleMouseMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX - 5}px`
        dotRef.current.style.top = `${e.clientY - 5}px`
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${e.clientX - 20}px`
        ringRef.current.style.top = `${e.clientY - 20}px`
      }
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.getAttribute('data-cursor') === 'pointer') {
        if (ringRef.current) {
          ringRef.current.style.transform = 'translate(-50%, -50%) scale(2)'
          ringRef.current.style.opacity = '0.4'
        }
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.getAttribute('data-cursor') === 'pointer') {
        if (ringRef.current) {
          ringRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
          ringRef.current.style.opacity = '1'
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseEnter)
    window.addEventListener('mouseout', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseEnter)
      window.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className={styles.cursor} />
      <div ref={ringRef} className={styles.cursorRing} />
    </>
  )
}
