'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { SERVICES } from '@/lib/data'
import SectionLabel from '@/components/ui/SectionLabel'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './Services.module.css'

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleServiceClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  useEffect(() => {
    if (openIndex === null) return

    const panels = containerRef.current?.querySelectorAll<HTMLDivElement>('.servicePanel')
    const arrows = containerRef.current?.querySelectorAll<SVGElement>('.serviceArrow')

    if (!panels || !arrows) return

    const newPanel = panels[openIndex]
    const newArrow = arrows[openIndex]
    const prevPanel = openIndex !== null ? panels[openIndex] : null

    if (prevPanel && openIndex === null) {
      // Closing panel
      import('animejs').then(({ animate }) => {
        animate(prevPanel, {
          maxHeight: [prevPanel.scrollHeight, 0],
          opacity: [1, 0],
          duration: 400,
          ease: 'inQuad',
        })
        animate(arrows[openIndex], {
          rotate: [45, 0],
          duration: 300,
          ease: 'outQuad',
        })
      })
    } else if (newPanel) {
      // Opening panel
      import('animejs').then(({ animate }) => {
        animate(newPanel, {
          maxHeight: [0, newPanel.scrollHeight],
          opacity: [0, 1],
          duration: 500,
          ease: 'outQuad',
        })
        animate(newArrow, {
          rotate: [0, 45],
          duration: 300,
          ease: 'outQuad',
        })
      })
    }
  }, [openIndex])

  return (
    <section className="section">
      <div className="container">
        <SectionLabel className="uppercase text-xs muted">
          WHAT WE DO
        </SectionLabel>
        <h2 className="text-display font-display">
          Diagnosis & <span className="italic accent">Unrivaled Cure.</span>
        </h2>
      </div>
      
      <div className="container" ref={containerRef}>
        {SERVICES.map((service, index) => (
          <ServiceRow
            key={service.id}
            service={service}
            index={index}
            isOpen={openIndex === index}
            onClick={() => handleServiceClick(index)}
          />
        ))}
      </div>
    </section>
  )
}

interface ServiceRowProps {
  service: typeof SERVICES[0]
  index: number
  isOpen: boolean
  onClick: () => void
}

function ServiceRow({ service, index, isOpen, onClick }: ServiceRowProps) {
  const rowRef = useScrollReveal<HTMLDivElement>(
    (entry) => {
      import('animejs').then(({ animate }) => {
        animate(entry.target, {
          opacity: [0, 1],
          x: [-40, 0],
          duration: 700,
          ease: 'outExpo',
        })
      })
    },
    { threshold: 0.1 }
  )

  return (
    <div ref={rowRef} className={styles.serviceRow}>
      <button className={styles.serviceHeader} onClick={onClick}>
        <div className={styles.serviceLeft}>
          <span className={styles.serviceNumber}>{service.id}</span>
          <div className={styles.serviceName}>
            <h3 className={styles.serviceTitle}>{service.name}</h3>
            <div className={styles.serviceSub}>{service.sub}</div>
          </div>
        </div>
        <ChevronRight className={`serviceArrow ${styles.serviceArrow}`} />
      </button>
      
      <div
        className={`servicePanel ${styles.serviceContent}`}
        style={{
          maxHeight: isOpen ? 'none' : '0',
          opacity: isOpen ? '1' : '0',
        }}
      >
        <p className={styles.serviceDescription}>{service.pitch}</p>
        <div className={styles.serviceTags}>
          {service.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
