'use client'

import { useEffect, useRef, RefObject } from 'react'
import Link from 'next/link'
import { AGENCY } from '@/lib/data'
import Button from '@/components/ui/Button'
import DotGrid from '@/components/ui/DotGrid'
import { useMagneticButton } from '@/hooks/useMagneticButton'
import styles from './Cta.module.css'

export default function Cta() {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const button1Ref = useRef<HTMLAnchorElement>(null)
  const button2Ref = useRef<HTMLAnchorElement>(null)

  // Magnetic button effects
  useMagneticButton(button1Ref as RefObject<HTMLElement>)
  useMagneticButton(button2Ref as RefObject<HTMLElement>)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const headline = headlineRef.current
    if (!headline) return

    // Split headline into words for staggered animation
    const words = headline.textContent!.split(' ')
    headline.innerHTML = words
      .map((word, i) => `<span class="word" style="--i: ${i}">${word}</span>`)
      .join(' ')

    const wordSpans = headline.querySelectorAll('.word')

    import('animejs').then(({ animate, onScroll }) => {
      // Headline entrance
      animate(wordSpans, {
        opacity: [0, 1],
        y: [60, 0],
        delay: (el, i) => i * 80,
        duration: 700,
        ease: 'outExpo',
        autoplay: onScroll({ enter: '80% bottom' }),
      })

      // Dot grid ripple effect on scroll
      const dots = document.querySelectorAll('.ctaDotGrid .dot')
      if (dots.length > 0) {
        const cols = 28
        const rows = 28
        const centerCol = Math.floor(cols / 2)
        const centerRow = Math.floor(rows / 2)

        // Calculate distance from center for each dot
        const dotDistances: number[] = []
        dots.forEach((dot, index) => {
          const col = index % cols
          const row = Math.floor(index / cols)
          const distance = Math.sqrt(
            Math.pow(col - centerCol, 2) + Math.pow(row - centerRow, 2)
          )
          dotDistances.push(distance)
        })

        // Animate dots from center outward
        animate(dots, {
          scale: [1, 2, 1],
          backgroundColor: ['#1e1e1e', '#e8ff00', '#1e1e1e'],
          duration: 800,
          delay: (el, i) => dotDistances[i] * 30,
          ease: 'outElastic(1, 0.5)',
          autoplay: onScroll({ enter: '70% bottom' }),
        })
      }
    })
  }, [])

  return (
    <section className={styles.cta}>
      <DotGrid className="ctaDotGrid" />
      <div className="container">
        <h2 ref={headlineRef} className={styles.headline}>
          Let's build legacy.
        </h2>
        
        <p className={styles.sub}>
          Your competitors are online. Your customers are searching. 
          Let's make sure they find you.
        </p>
        
        <div className={styles.ctaButtons}>
          <Link
            ref={button1Ref}
            href="/contact"
            className={`${styles.ctaButton} ${styles.primary}`}
          >
            START A PROJECT
          </Link>
          
          <Link
            ref={button2Ref}
            href={AGENCY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.ctaButton} ${styles.ghost}`}
          >
            WHATSAPP US
          </Link>
        </div>
      </div>
    </section>
  )
}
