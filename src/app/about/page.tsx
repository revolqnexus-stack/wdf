import { TEAM, AGENCY } from '@/lib/data'
import { Metadata } from 'next'
import styles from './AboutPage.module.css'

export const metadata: Metadata = {
  title: 'About Us - REVOLQ Digital Agency',
  description: 'Meet the team behind REVOLQ. Two founders in Kerala building digital systems that help businesses thrive online.',
}

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="text-display font-display">
          About <span className="italic accent">REVOLQ.</span>
        </h1>
        <p className="text-xl muted" style={{ maxWidth: '600px', marginBottom: '60px' }}>
          We're two people in Kerala who got tired of watching great local businesses 
          go invisible online. We build the digital systems that change that.
        </p>
        
        <div className={styles.story}>
          <h2 className="text-lg font-display">Our Story</h2>
          <p className={styles.storyText}>
            Founded in {AGENCY.founded}, REVOLQ was born from a simple observation: 
            Kerala businesses deserve better digital solutions. Too many companies were 
            stuck with generic templates, slow websites, and ineffective online presence.
          </p>
          <p className={styles.storyText}>
            We set out to change that by building custom digital systems that actually work— 
            systems that generate leads, automate processes, and grow businesses while you sleep.
          </p>
          <p className={styles.storyText}>
            Today, we're proud to have helped businesses across Kerala establish their 
            digital dominance, from bridal studios to dental clinics, each with their own 
            unique challenges and solutions.
          </p>
        </div>
        
        <div className={styles.teamSection}>
          <h2 className="text-lg font-display">The Team</h2>
          <div className={styles.teamGrid}>
            {TEAM.map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
        </div>
        
        <div className={styles.capacity}>
          <h2 className="text-lg font-display">Current Capacity</h2>
          <p className={styles.capacityText}>
            We're currently taking selected projects for Q4 2025. We believe in quality over quantity, 
            which means we work with a limited number of clients at any given time to ensure 
            each project gets the attention it deserves.
          </p>
          <div className={styles.capacityHighlight}>
            Interested in working together? 
            <a href="/contact" className={styles.contactLink}>
              Let's talk about your project.
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function TeamMember({ member }: { member: typeof TEAM[0] }) {
  return (
    <div className={styles.teamCard}>
      <div className={styles.teamImage} />
      <h3 className={styles.teamName}>{member.name}</h3>
      <div className={styles.teamRole}>{member.role}</div>
      <div className={styles.teamTitle}>{member.title}</div>
    </div>
  )
}
