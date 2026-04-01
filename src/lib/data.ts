import type { Service, WorkItem, PricingPlan, TeamMember, AIStep } from '@/types'

export const AGENCY = {
  name: 'REVOLQ',
  tagline: 'We build digital systems that work while you sleep.',
  location: 'Kerala, India',
  founded: 2025,
  phone1: '+91 79956 17374',
  phone2: '+91 73060 85895',
  whatsapp: 'https://wa.me/917995617374',
  domain: 'revolq.in',
  email: 'hello@revolq.in',
}

export const SERVICES: Service[] = [
  {
    id: '01',
    slug: 'web-development',
    name: 'Digital Ecosystem Architecture',
    sub: 'Custom Web Development & Platform Design',
    pitch: 'Templates bleed revenue. We engineer bespoke Next.js applications built strictly for millisecond load times and relentless conversion.',
    body: 'Your website stops being a brochure and becomes a high-yielding asset.',
    tags: [
      'Custom Next.js App Router',
      'React Server Components',
      'Vercel Edge Deployment',
      'Lighthouse 95+ Guarantee',
    ],
  },
  {
    id: '02',
    slug: 'seo-gbp',
    name: 'Algorithmic Positioning',
    sub: 'Technical SEO & Local Search Dominance',
    pitch: 'Being on page two is mathematically identical to not existing. We dominate the search algorithm through technical precision.',
    body: 'Securing the top position through semantic markup and aggressive local authority.',
    tags: [
      'JSON-LD Schema Engineering',
      'GBP Optimization & Management',
      'Technical Crawl Audits',
      'Competitor Gap Analysis',
    ],
  },
  {
    id: '03',
    slug: 'ai-automation',
    name: 'Autonomous Operations',
    sub: 'AI Agents & Workflow Automation',
    pitch: 'Human response times kill deals. We build digital systems that work while you sleep — capturing leads and closing sales 24/7.',
    body: 'Integrating LLMs with custom n8n workflows for unstoppable automation.',
    tags: [
      'WhatsApp AI Voice Agents',
      'n8n CRM Integrations',
      'Automated Lead Routing',
      '24/7 Uptime Monitoring',
    ],
  },
  {
    id: '04',
    slug: 'brand-strategy',
    name: 'Brand Brutalism',
    sub: 'Visual Identity & Market Positioning',
    pitch: 'Polite brands get ignored. We engineer visual identities that cut through the noise and position you as the undisputed authority.',
    body: 'High-contrast visual systems to uncompromising market positioning.',
    tags: [
      'Strategic Positioning Protocol',
      'Typography & Color Systems',
      'Digital Brand Guidelines',
      'Competitor Contrast Analysis',
    ],
  },
  {
    id: '05',
    slug: 'conversion',
    name: 'Conversion Telemetry',
    sub: 'UX Copywriting & Flow Optimization',
    pitch: 'Traffic is useless if it bounces. We map user psychology and eliminate structural friction to turn visitors into high-ticket clients.',
    body: 'Combining benefit-driven copywriting with behavioral tracking.',
    tags: [
      'High-Intent UX Copywriting',
      'Behavioral Flow Mapping',
      'Friction Reduction Audits',
      'Conversion Rate Optimization',
    ],
  },
  {
    id: '06',
    slug: 'retainer',
    name: 'Continuous Iteration',
    sub: 'Monthly Retainer & Ecosystem Management',
    pitch: 'Digital dominance requires relentless iteration. We act as your off-site engineering team, outpacing the market month over month.',
    body: 'Continuously monitoring, updating, and scaling your digital ecosystem.',
    tags: [
      'Proactive Technical Maintenance',
      'Monthly Algorithmic Adjustments',
      'Ongoing AI Agent Training',
      'Priority Engineering Support',
    ],
  },
]

export const WORK: WorkItem[] = [
  {
    slug: 'nixtudio',
    name: 'NIXTUDIO',
    byline: 'by Nikita Liby',
    category: 'BRIDAL STUDIO',
    location: 'PALA, KERALA',
    year: 2025,
    url: 'https://nixtudio.in',
    description:
      'Redefining the digital presence for Kerala\'s premier bridal studio. Complete web, SEO, and AI automation system built from the ground up.',
    stats: [
      { value: '464+', label: 'Google Reviews' },
      { value: '4.9★', label: 'Client Rating' },
      { value: '124%', label: 'Traffic Growth' },
      { value: '3.2k', label: 'Monthly Bookings' },
    ],
  },
  {
    slug: 'holy-family-dental',
    name: 'Holy Family Dental',
    category: 'DENTAL CLINIC',
    location: 'KOTTAYAM',
    year: 2025,
    url: 'https://holy-family-dental-clinic.vercel.app',
    description: 'Modern dental clinic with comprehensive patient management and booking system.',
    stats: [],
  },
  {
    slug: 'honeys-bridal',
    name: 'Honeys Bridal Studio',
    category: 'BRIDAL STUDIO',
    location: 'KERALA',
    year: 2025,
    url: 'https://honeysbridal.vercel.app',
    description: 'Elegant bridal studio with integrated AI-powered consultation scheduling.',
    stats: [],
  },
]

export const PRICING: PricingPlan[] = [
  {
    id: 'presence',
    name: 'PRESENCE',
    price: '₹38,000',
    popular: false,
    tagline: 'Professional website that establishes your digital presence',
    includes: [
      'Custom Next.js website (up to 5 pages)',
      'Mobile-first responsive design',
      'Basic SEO setup',
      'Google Analytics integration',
      'Contact form setup',
      '1 month post-launch support',
    ],
    excludes: ['Custom animations', 'Advanced SEO features', 'Content creation'],
  },
  {
    id: 'signal',
    name: 'SIGNAL',
    price: '₹55,000',
    popular: true,
    tagline: 'Complete digital system with SEO and automation',
    includes: [
      'Custom Next.js website (unlimited pages)',
      'Advanced SEO & schema markup',
      'Google Business Profile optimization',
      'WhatsApp AI agent setup',
      'Custom animations & interactions',
      '3 months post-launch support',
      'Content strategy & copywriting',
      'Performance optimization',
      'Monthly reporting for 3 months',
    ],
    excludes: [],
  },
  {
    id: 'orbit',
    name: 'ORBIT',
    price: '₹1,20,000',
    popular: false,
    tagline: 'Premium digital ecosystem with ongoing management',
    includes: [
      'Everything in SIGNAL',
      '6 months monthly retainer included',
      'Advanced automation workflows',
      'Custom brand identity development',
      'Professional photography coordination',
      'Video content creation',
      'Social media management',
      'Paid advertising strategy',
      'Conversion rate optimization',
    ],
    excludes: [],
  },
]

export const TEAM: TeamMember[] = [
  { 
    name: 'EATHEN BABY', 
    role: 'Founder', 
    title: 'CO-FOUNDER',
    image: '/images/founder-1.jpg'
  },
  { 
    name: 'AJMAL MULLAPATI', 
    role: 'Founder', 
    title: 'CO-FOUNDER',
    image: '/images/founder-2.jpg'
  },
]

export const AI_FLOW_STEPS: AIStep[] = [
  { text: 'Customer sends WhatsApp message', number: '①' },
  { text: 'GPT-4 AI reads intent', number: '②' },
  { text: 'n8n checks availability', number: '③' },
  { text: 'Booking confirmed + payment link sent', number: '④' },
  { text: 'Staff gets WhatsApp alert', number: '⑤' },
  { text: 'Dashboard updated + calendar sync', number: '⑥' },
  { text: 'Auto review request sent', number: '⑦' },
]

export const AI_STATS = [
  { label: '24/7', value: 24, suffix: '/7', desc: 'AI Agent Active' },
  { label: '3min', value: 3, suffix: 'min', desc: 'Avg Response Time' },
  { label: '40%', value: 40, suffix: '%', desc: 'More Repeat Clients' },
]
