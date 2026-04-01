import { WORK } from '@/lib/data'
import Link from 'next/link'
import { Metadata } from 'next'
import styles from './WorkPage.module.css'

export const metadata: Metadata = {
  title: 'Our Work - REVOLQ Digital Agency',
  description: 'Explore our portfolio of web development, AI automation, and digital transformation projects for Kerala businesses.',
}

export default function WorkPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="text-display font-display">
          Our <span className="italic accent">Work.</span>
        </h1>
        <p className="text-xl muted" style={{ maxWidth: '600px', marginBottom: '60px' }}>
          Real results for real businesses. From bridal studios to dental clinics, 
          we've helped Kerala companies establish their digital presence and scale their operations.
        </p>
        
        <div className={styles.workGrid}>
          {WORK.map((project) => (
            <WorkCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

function WorkCard({ project }: { project: typeof WORK[0] }) {
  return (
    <div className={styles.workCard}>
      <div className={styles.workTag}>
        {project.category} · {project.location} · {project.year}
      </div>
      
      <h3 className={styles.workName}>
        {project.name}
        {project.byline && <span className={styles.byline}> {project.byline}</span>}
      </h3>
      
      <p className={styles.workDesc}>{project.description}</p>
      
      <div className={styles.workImage} />
      
      {project.stats.length > 0 && (
        <div className={styles.workStats}>
          {project.stats.map((stat, index) => (
            <div key={index} className={styles.stat}>
              <span className={styles.statNumber}>{stat.value}</span>
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
