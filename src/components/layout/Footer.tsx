import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'
import { AGENCY, SERVICES } from '@/lib/data'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Column 1: Brand */}
          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>{AGENCY.name}</h4>
            <p className={styles.brandDesc}>{AGENCY.tagline}</p>
            <p className={styles.brandLocation}>
              {AGENCY.location} · {AGENCY.founded}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>Navigate</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/work">Work</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.linkList}>
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.slug}`}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.linkList}>
              <li>
                <a href={`tel:${AGENCY.phone1.replace(/\s/g, '')}`}>
                  <Phone size={16} style={{ marginRight: '8px' }} />
                  {AGENCY.phone1}
                </a>
              </li>
              <li>
                <a href={`tel:${AGENCY.phone2.replace(/\s/g, '')}`}>
                  <Phone size={16} style={{ marginRight: '8px' }} />
                  {AGENCY.phone2}
                </a>
              </li>
              <li>{AGENCY.location}</li>
              <li>
                <a href={AGENCY.whatsapp} className={styles.whatsappLink}>
                  WHATSAPP US →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© 2026 {AGENCY.name}. All rights reserved.</span>
          <span>Designed & built by {AGENCY.name}</span>
        </div>
      </div>
    </footer>
  )
}
