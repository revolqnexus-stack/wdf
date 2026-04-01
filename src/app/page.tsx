import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import Services from '@/components/sections/Services'
import Work from '@/components/sections/Work'
import AiFlow from '@/components/sections/AiFlow'
import Pricing from '@/components/sections/Pricing'
import Team from '@/components/sections/Team'
import Cta from '@/components/sections/Cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <AiFlow />
      <Pricing />
      <Team />
      <Cta />
    </>
  )
}
