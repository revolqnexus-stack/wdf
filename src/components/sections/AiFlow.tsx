'use client'

import { useEffect, useRef } from 'react'
import { AI_FLOW_STEPS, AI_STATS } from '@/lib/data'
import SectionLabel from '@/components/ui/SectionLabel'
import styles from './AiFlow.module.css'

export default function AiFlow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Animate flow steps
    const steps = containerRef.current?.querySelectorAll('.flowStep')
    const lines = containerRef.current?.querySelectorAll('.flowLine')

    if (steps && lines) {
      import('animejs').then(({ animate, onScroll }) => {
        // Steps entrance
        animate(steps, {
          opacity: [0, 1],
          x: [40, 0],
          delay: (el, i) => i * 100,
          duration: 500,
          ease: 'outExpo',
          autoplay: onScroll({ enter: '60% bottom' }),
        })

        // SVG line drawing animation
        lines.forEach((line) => {
          const svgLine = line as SVGPathElement
          const length = svgLine.getTotalLength()
          
          svgLine.style.strokeDasharray = length.toString()
          svgLine.style.strokeDashoffset = length.toString()

          animate(svgLine, {
            strokeDashoffset: [length, 0],
            duration: 600,
            ease: 'outExpo',
            delay: (el, i) => i * 150,
            autoplay: onScroll({ enter: '60% bottom' }),
          })
        })
      })
    }

    // Animate stats counters
    const statNumbers = statsRef.current?.querySelectorAll('.statNumber')
    if (statNumbers) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const stat = entry.target as HTMLElement
              const target = parseInt(stat.dataset.target || '0')
              const suffix = stat.dataset.suffix || ''
              const counterObj = { val: 0 }

              import('animejs').then(({ animate }) => {
                animate(counterObj, {
                  val: target,
                  duration: 1500,
                  ease: 'outExpo',
                  round: 1,
                  onUpdate: () => {
                    stat.textContent = Math.round(counterObj.val) + suffix
                  },
                })
              })

              observer.unobserve(stat)
            }
          })
        },
        { threshold: 0.5 }
      )

      statNumbers.forEach((stat) => observer.observe(stat))
    }
  }, [])

  return (
    <section className="section">
      <div className="container">
        <SectionLabel className="uppercase text-xs muted">
          AI AUTOMATION
        </SectionLabel>
        <h2 className="text-display font-display">
          Your business <span className="italic accent">at 3am.</span>
        </h2>
      </div>
      
      <div className={styles.aiSplit}>
        <div className={styles.aiLeft}>
          <div ref={statsRef} className={styles.aiStats}>
            {AI_STATS.map((stat, index) => (
              <div key={index} className={styles.aiStat}>
                <span 
                  className={`statNumber ${styles.aiStatNumber}`}
                  data-target={stat.value}
                  data-suffix={stat.suffix}
                >
                  {stat.label}
                </span>
                <span className={styles.aiStatLabel}>{stat.desc}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div ref={containerRef} className={styles.flowChart}>
          {AI_FLOW_STEPS.map((step, index) => (
            <div key={index} className={`flowStep ${styles.flowStep}`}>
              <div className={styles.flowNumber}>{step.number}</div>
              <div className={styles.flowText}>{step.text}</div>
              {index < AI_FLOW_STEPS.length - 1 && (
                <svg className={`flowLine ${styles.flowLine}`} width="2" height="16">
                  <path
                    d="M 1 0 L 1 16"
                    stroke="var(--border)"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
