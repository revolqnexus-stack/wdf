'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Loader.module.css'

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true)
  const loaderRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    import('animejs').then(({ animate }) => {
      // Counter animation
      const counterObj = { val: 0 }
      animate(counterObj, {
        val: 100,
        duration: 1000,
        ease: 'inOutExpo',
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.round(counterObj.val) + '%'
          }
        },
        complete: () => {
          // Slide loader up after counter completes
          setTimeout(() => {
            if (loaderRef.current) {
              animate(loaderRef.current, {
                y: [0, '-100%'],
                duration: 700,
                ease: 'inExpo',
                complete: () => {
                  setIsVisible(false)
                },
              })
            }
          }, 100)
        },
      })
    })
  }, [])

  if (!isVisible) return null

  return (
    <div ref={loaderRef} className={styles.loader}>
      <div className={styles.content}>
        <h1 className={styles.title}>REVOLQ</h1>
        <span ref={counterRef} className={styles.counter}>
          0%
        </span>
      </div>
    </div>
  )
}
