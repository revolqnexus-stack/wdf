'use client'

import { useState } from 'react'
import { AGENCY } from '@/lib/data'
import styles from './ContactPage.module.css'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  projectDescription: string
  budget: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    projectDescription: '',
    budget: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you for your message! We\'ll get back to you within 24 hours.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          projectDescription: '',
          budget: '',
        })
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.email && formData.projectDescription

  return (
    <div className={styles.contactSplit}>
      <div className={styles.contactInfo}>
        <h1 className="text-display font-display">
          Let's <span className="italic accent">Talk.</span>
        </h1>
        <p className="text-xl muted" style={{ marginBottom: '40px' }}>
          Ready to transform your digital presence? We're here to help you build 
          systems that work while you sleep.
        </p>
        
        <div className={styles.contactMethods}>
          <div className={styles.contactMethod}>
            <h3>WhatsApp</h3>
            <a 
              href={AGENCY.whatsapp} 
              className={styles.contactLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {AGENCY.phone1}
            </a>
            <p>Fastest response time</p>
          </div>
          
          <div className={styles.contactMethod}>
            <h3>Phone</h3>
            <a href={`tel:${AGENCY.phone1.replace(/\s/g, '')}`} className={styles.contactLink}>
              {AGENCY.phone1}
            </a>
            <a href={`tel:${AGENCY.phone2.replace(/\s/g, '')}`} className={styles.contactLink}>
              {AGENCY.phone2}
            </a>
            <p>Mon-Fri, 9AM-6PM</p>
          </div>
          
          <div className={styles.contactMethod}>
            <h3>Email</h3>
            <a href={`mailto:${AGENCY.email}`} className={styles.contactLink}>
              {AGENCY.email}
            </a>
            <p>Project inquiries</p>
          </div>
        </div>
        
        <div className={styles.responseInfo}>
          <h3>Response Times</h3>
          <ul>
            <li>WhatsApp: Within 30 minutes</li>
            <li>Phone: Immediate during business hours</li>
            <li>Email: Within 24 hours</li>
            <li>Form submissions: Within 2 hours</li>
          </ul>
        </div>
      </div>
      
      <div className={styles.contactForm}>
        <h2 className="text-lg font-display">Start Your Project</h2>
        
        {submitStatus === 'success' && (
          <div className={`${styles.message} ${styles.success}`}>
            {submitMessage}
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className={`${styles.message} ${styles.error}`}>
            {submitMessage}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
          </div>
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone (optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="service">Service Interest</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="">Select a service</option>
                <option value="web-development">Web Development</option>
                <option value="ai-automation">AI Automation</option>
                <option value="seo">SEO & Local Search</option>
                <option value="brand-strategy">Brand Strategy</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="projectDescription">Project Description *</label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              required
              rows={6}
              className={styles.textarea}
              placeholder="Tell us about your project, goals, and timeline..."
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="budget">Budget Range</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="">Select budget range</option>
              <option value="30k-50k">₹30,000 - ₹50,000</option>
              <option value="50k-75k">₹50,000 - ₹75,000</option>
              <option value="75k-100k">₹75,000 - ₹1,00,000</option>
              <option value="100k+">₹1,00,000+</option>
            </select>
          </div>
          
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={styles.submitButton}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  )
}
