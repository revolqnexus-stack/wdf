'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { AGENCY } from '@/lib/data'
import styles from './Nav.module.css'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    // Entrance animation
    if (typeof window !== 'undefined') {
      import('animejs').then(({ animate }) => {
        animate(navRef.current!, {
          y: [-60, 0],
          opacity: [0, 1],
          duration: 800,
          ease: 'outExpo',
          delay: 1200,
        })
      })
    }

    // Scroll detection
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogoHover = () => {
    if (typeof window === 'undefined') return

    const logo = logoRef.current
    if (!logo) return

    // Wrap each letter in span
    const letters = logo.textContent!.split('')
    logo.innerHTML = letters.map(letter => `<span>${letter}</span>`).join('')

    import('animejs').then(({ animate }) => {
      animate(logo.querySelectorAll('span'), {
        scaleY: [1, 1.15, 1],
        color: ['#f0f0f0', '#e8ff00', '#f0f0f0'],
        delay: (el, i) => i * 40,
        duration: 400,
        ease: 'outBack(2)',
        complete: () => {
          logo.textContent = AGENCY.name
        },
      })
    })
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    
    if (!isMobileMenuOpen && typeof window !== 'undefined') {
      import('animejs').then(({ animate }) => {
        animate('.navMobileItem', {
          opacity: [0, 1],
          x: [-24, 0],
          delay: (el, i) => i * 60,
          duration: 400,
          ease: 'outExpo',
        })
      })
    }
  }

  return (
    <>
      <nav
        ref={navRef}
        className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}
      >
        <div className="container">
          <div className={styles.navContainer}>
            <Link
              ref={logoRef}
              href="/"
              className={styles.logo}
              onMouseEnter={handleLogoHover}
              data-cursor="pointer"
            >
              {AGENCY.name}
            </Link>

            {/* Desktop Navigation */}
            <div className={styles.navCenter}>
              <Link href="/work" className={styles.navLink}>
                WORK
              </Link>
              <Link href="/services" className={styles.navLink}>
                SERVICES
              </Link>
              <Link href="/about" className={styles.navLink}>
                ABOUT
              </Link>
            </div>

            {/* CTA Button */}
            <Link
              href={AGENCY.whatsapp}
              className={styles.navCta}
              data-cursor="pointer"
            >
              LET'S TALK
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className={styles.mobileToggle}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              data-cursor="pointer"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className="container">
            <nav className={styles.mobileNav}>
              <Link href="/work" className="navMobileItem" onClick={toggleMobileMenu}>
                WORK
              </Link>
              <Link href="/services" className="navMobileItem" onClick={toggleMobileMenu}>
                SERVICES
              </Link>
              <Link href="/about" className="navMobileItem" onClick={toggleMobileMenu}>
                ABOUT
              </Link>
              <Link
                href={AGENCY.whatsapp}
                className="navMobileItem"
                onClick={toggleMobileMenu}
              >
                LET'S TALK
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
