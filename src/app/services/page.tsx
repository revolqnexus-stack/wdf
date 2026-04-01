import { SERVICES } from '@/lib/data'
import { Metadata } from 'next'
import styles from './ServicesPage.module.css'

export const metadata: Metadata = {
  title: 'Our Services - REVOLQ Digital Agency',
  description: 'Complete digital solutions including web development, AI automation, SEO, and brand strategy for Kerala businesses.',
}

export default function ServicesPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="text-display font-display">
          Our <span className="italic accent">Services.</span>
        </h1>
        <p className="text-xl muted" style={{ maxWidth: '600px', marginBottom: '60px' }}>
          From custom web applications to AI-powered automation, we provide end-to-end 
          digital solutions that drive real business growth.
        </p>
        
        <div className={styles.servicesGrid}>
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ServiceCard({ service }: { service: typeof SERVICES[0] }) {
  return (
    <div className={styles.serviceCard} id={service.slug}>
      <div className={styles.serviceHeader}>
        <span className={styles.serviceNumber}>{service.id}</span>
        <div className={styles.serviceInfo}>
          <h3 className={styles.serviceName}>{service.name}</h3>
          <p className={styles.serviceSub}>{service.sub}</p>
        </div>
      </div>
      
      <p className={styles.servicePitch}>{service.pitch}</p>
      <p className={styles.serviceBody}>{service.body}</p>
      
      <div className={styles.serviceTags}>
        {service.tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
