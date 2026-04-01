'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { AGENCY } from '@/lib/data'
import Button from '@/components/ui/Button'
import DotGrid from '@/components/ui/DotGrid'
import styles from './Hero.module.css'

export default function Hero() {
  const tagRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLSpanElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)
  const line3Ref = useRef<HTMLSpanElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const botRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    import('animejs').then(({ createTimeline }) => {
      const tl = createTimeline({ defaults: { ease: 'outExpo' } })

      tl
        .add(tagRef.current!, { opacity: [0, 1], y: [20, 0], duration: 500 }, 0)
        .add(line1Ref.current!, { opacity: [0, 1], y: [100, 0], duration: 900 }, 200)
        .add(line2Ref.current!, { opacity: [0, 1], y: [100, 0], duration: 900 }, 380)
        .add(line3Ref.current!, { opacity: [0, 1], y: [100, 0], duration: 900 }, 520)
        .add(subRef.current!, { opacity: [0, 1], y: [30, 0], duration: 600 }, 700)
        .add(ctaRef.current!, { opacity: [0, 1], y: [20, 0], duration: 500 }, 850)
        .add(botRef.current!, { opacity: [0, 1], duration: 400 }, 1050)
    })
  }, [])

  return (
    <section className={styles.hero}>
      <DotGrid />
      <div className="container">
        <div className={styles.content}>
          <div ref={tagRef} className={styles.tag}>
            DIGITAL AGENCY · KERALA · INDIA
          </div>
          
          <h1 className={styles.title}>
            <span ref={line1Ref} className={styles.line}>
              REVOLQ
            </span>
            <span ref={line2Ref} className={`${styles.line} ${styles.accent}`}>
              Building systems
            </span>
            <span ref={line3Ref} className={`${styles.line} ${styles.italic}`}>
              that work.
            </span>
          </h1>
          
          <p ref={subRef} className={styles.sub}>
            Web development, AI automation, SEO, and brand strategy for Kerala businesses that refuse to be invisible.
          </p>
          
          <div ref={ctaRef} className={styles.cta}>
            <Link href="/contact" className={styles.primaryBtn}>
              START A PROJECT →
            </Link>
            <Link href="/work" className={styles.ghostBtn}>
              VIEW OUR WORK
            </Link>
          </div>
        </div>
        
        <div ref={botRef} className={styles.bottom}>
          <span>{AGENCY.phone1}</span>
          <span>SCROLL ↓</span>
        </div>
      </div>
    </section>
  )
}
