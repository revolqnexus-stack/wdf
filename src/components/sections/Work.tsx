'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { WORK } from '@/lib/data'
import SectionLabel from '@/components/ui/SectionLabel'
import styles from './Work.module.css'

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const cards = containerRef.current?.querySelectorAll('.workCard')
    if (!cards) return

    import('animejs').then(({ animate }) => {
      // Card entrance animation
      animate(cards, {
        opacity: [0, 1],
        y: [60, 0],
        delay: (el, i) => i * 150,
        duration: 700,
        ease: 'outExpo',
      })

      // Card hover effects
      cards.forEach((card) => {
        const img = card.querySelector('.workImage')
        
        const handleMouseEnter = () => {
          animate(card, {
            y: -8,
            duration: 300,
            ease: 'outQuad',
            composition: 'blend',
          })
          if (img) {
            animate(img, {
              scale: 1.04,
              duration: 400,
              ease: 'outQuad',
              composition: 'blend',
            })
          }
        }

        const handleMouseLeave = () => {
          animate(card, {
            y: 0,
            duration: 300,
            ease: 'outQuad',
            composition: 'blend',
          })
          if (img) {
            animate(img, {
              scale: 1,
              duration: 400,
              ease: 'outQuad',
              composition: 'blend',
            })
          }
        }

        card.addEventListener('mouseenter', handleMouseEnter)
        card.addEventListener('mouseleave', handleMouseLeave)

        return () => {
          card.removeEventListener('mouseenter', handleMouseEnter)
          card.removeEventListener('mouseleave', handleMouseLeave)
        }
      })

      // Stats counter animation for featured project
      const stats = containerRef.current?.querySelectorAll('.statCounter')
      if (stats) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const stat = entry.target as HTMLElement
                const target = parseInt(stat.dataset.target || '0')
                const suffix = stat.dataset.suffix || ''
                const counterObj = { val: 0 }

                animate(counterObj, {
                  val: target,
                  duration: 1500,
                  ease: 'outExpo',
                  round: 1,
                  onUpdate: () => {
                    stat.textContent = Math.round(counterObj.val) + suffix
                  },
                })

                observer.unobserve(stat)
              }
            })
          },
          { threshold: 0.5 }
        )

        stats.forEach((stat) => observer.observe(stat))
      }
    })
  }, [])

  return (
    <section className="section">
      <div className="container">
        <SectionLabel className="uppercase text-xs muted">
          SELECTED WORK
        </SectionLabel>
        <h2 className="text-display font-display">
          The work. <span className="italic accent">Built for real businesses.</span>
        </h2>
      </div>
      
      <div className={styles.workContainer}>
        <div ref={containerRef} className={styles.workGrid}>
          {WORK.map((project, index) => (
            <WorkCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface WorkCardProps {
  project: typeof WORK[0]
  index: number
}

function WorkCard({ project, index }: WorkCardProps) {
  const isFeatured = index === 0

  return (
    <div className={`workCard ${styles.workCard} ${isFeatured ? styles.featured : ''}`}>
      <div className={styles.workTag}>
        {project.category} · {project.location} · {project.year}
      </div>
      
      <h3 className={styles.workName}>
        {project.name}
        {project.byline && <span className={styles.byline}> {project.byline}</span>}
      </h3>
      
      <p className={styles.workDesc}>{project.description}</p>
      
      <div className={`${styles.workImage} workImage`} />
      
      {isFeatured && project.stats.length > 0 && (
        <div className={styles.workStats}>
          {project.stats.map((stat, statIndex) => (
            <div key={statIndex} className={styles.stat}>
              <span 
                className={`statCounter ${styles.statNumber}`}
                data-target={stat.value.replace(/\D/g, '')}
                data-suffix={stat.value.replace(/\d/g, '')}
              >
                {stat.value}
              </span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      )}
      
      <Link 
        href={project.url} 
        className={styles.workLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        VIEW LIVE PROJECT →
      </Link>
    </div>
  )
}
