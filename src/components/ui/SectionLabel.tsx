import { ReactNode } from 'react'
import styles from './SectionLabel.module.css'

interface SectionLabelProps {
  children: ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div className={`${styles.label} ${className}`}>
      {children}
    </div>
  )
}
