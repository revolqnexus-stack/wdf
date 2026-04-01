'use client'

import { useEffect, useRef } from 'react'
import styles from './Marquee.module.css'

export default function Marquee() {
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    import('animejs').then(({ animate }) => {
      const row1Anim = animate(row1Ref.current!, {
        translateX: [0, '-50%'],
        duration: 20000,
        loop: true,
        ease: 'linear',
      })

      const row2Anim = animate(row2Ref.current!, {
        translateX: ['-50%', 0],
        duration: 16000,
        loop: true,
        ease: 'linear',
      })

      const handleMouseEnter = () => {
        row1Anim.pause()
        row2Anim.pause()
      }

      const handleMouseLeave = () => {
        row1Anim.play()
        row2Anim.play()
      }

      const container = row1Ref.current!.parentElement
      container?.addEventListener('mouseenter', handleMouseEnter)
      container?.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        container?.removeEventListener('mouseenter', handleMouseEnter)
        container?.removeEventListener('mouseleave', handleMouseLeave)
        row1Anim.cancel()
        row2Anim.cancel()
      }
    })
  }, [])

  const row1Text = 'WEB DEVELOPMENT · AI AUTOMATION · SEO · BRAND STRATEGY · NEXT.JS · '
  const row2Text = 'KERALA · AUTONOMOUS OPERATIONS · n8n WORKFLOWS · CONVERSION · '

  return (
    <section className={styles.marquee}>
      <div className={styles.container}>
        <div ref={row1Ref} className={styles.row}>
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className={styles.text}>
              {row1Text}
            </span>
          ))}
        </div>
        <div ref={row2Ref} className={styles.row}>
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className={styles.text}>
              {row2Text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
