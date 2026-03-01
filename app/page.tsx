import { Navbar } from "@/components/layout/navbar"
import { HeroSection } from "@/components/home/hero-section"
import { WhatWeDoSection } from "@/components/home/what-we-do-section"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <WhatWeDoSection />
    </main>
  )
}
