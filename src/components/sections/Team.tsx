'use client'

import { useEffect, useRef } from 'react'
import { TEAM } from '@/lib/data'
import SectionLabel from '@/components/ui/SectionLabel'
import styles from './Team.module.css'

export default function Team() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const cards = containerRef.current?.querySelectorAll('.teamCard')
    if (!cards) return

    import('animejs').then(({ animate }) => {
      // Cards entrance from opposite sides
      animate(cards[0], {
        opacity: [0, 1],
        x: [-80, 0],
        duration: 700,
        ease: 'outExpo',
      })

      if (cards[1]) {
        animate(cards[1], {
          opacity: [0, 1],
          x: [80, 0],
          duration: 700,
          ease: 'outExpo',
        })
      }
    })
  }, [])

  return (
    <section className="section">
      <div className="container">
        <SectionLabel className="uppercase text-xs muted">
          THE TEAM
        </SectionLabel>
        <h2 className="text-display font-display">
          Two people. <span className="italic accent">One system.</span>
        </h2>
      </div>
      
      <div className="container">
        <div ref={containerRef} className={styles.teamGrid}>
          {TEAM.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
        
        <div className={styles.teamDesc}>
          <p>
            REVOLQ is two people in Kerala who got tired of watching great local businesses go invisible online. 
            We build the digital systems that change that.
          </p>
          <p className={styles.capacity}>
            Currently taking selected projects for Q4 2025
          </p>
        </div>
      </div>
    </section>
  )
}

interface TeamCardProps {
  member: typeof TEAM[0]
  index: number
}

function TeamCard({ member, index }: TeamCardProps) {
  return (
    <div className={`teamCard ${styles.teamCard}`}>
      <div className={styles.teamImage}>
        <img 
          src={member.image} 
          alt={member.name}
          className={styles.teamImg}
        />
      </div>
      <h3 className={styles.teamName}>{member.name}</h3>
      <div className={styles.teamRole}>{member.role}</div>
      <div className={styles.teamTitle}>{member.title}</div>
    </div>
  )
}
