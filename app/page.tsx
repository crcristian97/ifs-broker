import { Navbar } from "@/components/layout/navbar"
import { HeroSection } from "@/components/home/hero-section"
import { WhatWeDoSection } from "@/components/home/what-we-do-section"
import ServiceSection from "@/components/home/service"
import { HeroPlanificacion } from "@/components/home/hero-planificacion"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <WhatWeDoSection />
      <ServiceSection />
      <HeroPlanificacion />
    </main>
  )
}
