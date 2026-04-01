# REVOLQ Digital Agency Website

A production-ready Next.js 15 website for REVOLQ, a digital agency based in Kerala, India. Built with anime.js v4 for animations and featuring a brutalist design system.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.x
- **Animation**: anime.js v4 (sole animation engine)
- **Styling**: CSS Modules + PostCSS
- **Fonts**: Bebas Neue + Space Grotesk (via next/font)
- **Icons**: Lucide React
- **Utilities**: clsx

## 📋 Features

- ✅ Fully responsive design (320px → 1920px)
- ✅ Advanced anime.js animations (loader, scroll reveals, interactions)
- ✅ Custom cursor with magnetic button effects
- ✅ Interactive dot grid background
- ✅ Service accordion with smooth animations
- ✅ Work portfolio with stats counters
- ✅ AI automation flow visualization
- ✅ Pricing cards with popular highlighting
- ✅ Contact form with API route
- ✅ SEO optimized with metadata and JSON-LD
- ✅ Accessibility features (reduced motion, semantic HTML)
- ✅ Performance optimized (intersection observer, will-change)

## 🛠 Installation

```bash
# Clone the repository
git clone <repository-url>
cd revolq

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Start development server
npm run dev
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Homepage (all sections)
│   ├── work/              # Work listing page
│   ├── services/          # Services detail page
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   └── api/contact/       # Contact form API route
├── components/
│   ├── layout/            # Nav, Footer
│   ├── sections/          # Homepage sections
│   └── ui/                # Reusable components
├── hooks/                 # Custom React hooks
├── lib/                   # Data and utilities
└── types/                 # TypeScript interfaces
```

## 🎨 Design System

### Colors
- `--bg`: #0a0a0a (near-black)
- `--accent`: #e8ff00 (electric yellow)
- `--text`: #f0f0f0 (primary text)
- `--muted`: #888888 (secondary text)

### Typography
- Display: Bebas Neue (headlines)
- Body: Space Grotesk (content)
- Mono: JetBrains Mono (code, tags)

### Scale
- Fluid type using clamp()
- Responsive spacing system
- Component-based architecture

## 🎬 Animations

All animations use **anime.js v4** exclusively:

- **Loader**: Counter 0→100% with slide-up exit
- **Hero**: Staggered timeline with dot grid interaction
- **Navigation**: Entrance + scroll-based background
- **Sections**: Scroll-triggered reveals
- **Interactive**: Hover states, magnetic buttons, counters

## 📱 Pages

- **/**: Homepage with all sections
- **/work**: Portfolio showcase
- **/services**: Service details
- **/about**: Team and story
- **/contact**: Contact form and information

## 🔧 Configuration

### Environment Variables
```env
CONTACT_EMAIL=hello@revolq.in
GOOGLE_ANALYTICS_ID=
VERCEL_ANALYTICS_ID=
```

### Build Commands
```bash
npm run build      # Production build
npm run start       # Start production server
npm run lint        # Run ESLint
npm run type-check  # TypeScript checking
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main

### Other Platforms
```bash
npm run build
# Deploy the .next/public folder
```

## 🎯 Key Implementation Details

### anime.js Integration
- Dynamic imports in useEffect (SSR-safe)
- Ref-based targeting (no CSS selectors)
- Cleanup on unmount (.cancel())
- Intersection Observer for scroll triggers

### Performance
- `will-change` on animated elements
- Intersection Observer instead of scroll events
- Font loading with `display: swap`
- Image optimization with Next.js Image

### Accessibility
- Reduced motion support
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation
- Screen reader friendly

## 📄 License

© 2026 REVOLQ. All rights reserved.

---

Built with ❤️ by REVOLQ in Kerala, India.
