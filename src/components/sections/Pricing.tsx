'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { PRICING } from '@/lib/data'
import SectionLabel from '@/components/ui/SectionLabel'
import styles from './Pricing.module.css'

export default function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const cards = containerRef.current?.querySelectorAll('.pricingCard')
    if (!cards) return

    import('animejs').then(({ animate, onScroll }) => {
      // Card entrance animation
      animate(cards, {
        scale: [0.94, 1],
        opacity: [0, 1],
        delay: (el, i) => i * 100,
        duration: 600,
        ease: 'outBack(1.1)',
        autoplay: onScroll({ enter: '70% bottom' }),
      })

      // Popular card pulsing glow
      const popularCard = containerRef.current?.querySelector('.popularCard')
      if (popularCard) {
        animate(popularCard, {
          boxShadow: [
            '0 0 0 1px rgba(232,255,0,0.3)',
            '0 0 0 1px rgba(232,255,0,0.7)',
            '0 0 0 1px rgba(232,255,0,0.3)',
          ],
          duration: 2000,
          loop: true,
          ease: 'inOutSine',
        })
      }
    })
  }, [])

  return (
    <section className="section">
      <div className="container">
        <SectionLabel className="uppercase text-xs muted">
          INVESTMENT
        </SectionLabel>
        <h2 className="text-display font-display">
          Transparent pricing. <span className="italic accent">No surprises.</span>
        </h2>
      </div>
      
      <div className={styles.pricingGrid}>
        <div ref={containerRef} className={styles.pricingContainer}>
          {PRICING.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
      
      <div className="container">
        <div className={styles.aiPricing}>
          <h3 className={styles.aiPricingName}>AI Automation System</h3>
          <div className={styles.aiPricingPrice}>
            ₹25,000 Setup + ₹10,000/month maintenance
          </div>
          <p className={styles.aiPricingDesc}>
            Complete WhatsApp AI agent with CRM integration and 24/7 automation
          </p>
        </div>
      </div>
    </section>
  )
}

interface PricingCardProps {
  plan: typeof PRICING[0]
}

function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className={`pricingCard ${styles.pricingCard} ${plan.popular ? styles.popular + ' popularCard' : ''}`}>
      {plan.popular && (
        <div className={styles.popularBadge}>POPULAR</div>
      )}
      
      <h3 className={styles.pricingName}>{plan.name}</h3>
      <div className={styles.pricingPrice}>{plan.price}</div>
      <p className={styles.pricingDesc}>{plan.tagline}</p>
      
      <ul className={styles.pricingFeatures}>
        {plan.includes.map((feature, index) => (
          <li key={index} className={styles.feature}>
            {feature}
          </li>
        ))}
        {plan.excludes.map((feature, index) => (
          <li key={index} className={`${styles.feature} ${styles.excluded}`}>
            {feature}
          </li>
        ))}
      </ul>
      
      <Link href="/contact" className={styles.pricingButton}>
        GET STARTED
      </Link>
    </div>
  )
}
