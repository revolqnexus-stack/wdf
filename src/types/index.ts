export interface Service {
  id: string
  slug: string
  name: string
  sub: string
  pitch: string
  body: string
  tags: string[]
}

export interface WorkItem {
  slug: string
  name: string
  byline?: string
  category: string
  location: string
  year: number
  url: string
  description: string
  stats: { value: string; label: string }[]
}

export interface PricingPlan {
  id: string
  name: string
  price: string
  popular: boolean
  tagline: string
  includes: string[]
  excludes: string[]
}

export interface TeamMember {
  name: string
  role: string
  title: string
  image: string
}

export interface AIStep {
  text: string
  number: string
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  service?: string
  projectDescription?: string
  budget?: string
}
