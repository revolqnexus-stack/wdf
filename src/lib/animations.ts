export const ANIMATION_PRESETS = {
  // Entrance animations
  fadeInUp: {
    opacity: [0, 1],
    y: [40, 0],
    duration: 700,
    ease: 'outExpo',
  },
  fadeInLeft: {
    opacity: [0, 1],
    x: [-40, 0],
    duration: 700,
    ease: 'outExpo',
  },
  fadeInRight: {
    opacity: [0, 1],
    x: [40, 0],
    duration: 700,
    ease: 'outExpo',
  },
  scaleIn: {
    scale: [0.94, 1],
    opacity: [0, 1],
    duration: 600,
    ease: 'outBack(1.1)',
  },

  // Hover animations
  cardHover: {
    y: -8,
    duration: 300,
    ease: 'outQuad',
    composition: 'blend',
  },
  imageHover: {
    scale: 1.04,
    duration: 400,
    ease: 'outQuad',
    composition: 'blend',
  },

  // Stagger delays
  stagger: {
    small: 40,
    medium: 80,
    large: 150,
  },

  // Durations
  duration: {
    fast: 300,
    base: 600,
    slow: 1000,
  },
} as const

export const SCROLL_THRESHOLDS = {
  early: '90% bottom',
  default: '80% bottom',
  late: '60% bottom',
} as const
