import { Navbar } from "@/components/layout/navbar"
import { HeroSection } from "@/components/home/hero-section"
import { WhatWeDoSection } from "@/components/home/what-we-do-section"
import ServiceSection from "@/components/home/service"
import { HeroPlanificacion } from "@/components/home/hero-planificacion"
import LogoCloudSection from "@/components/home/logo-cloud-demo"
import { ExperienceGlobeSection } from "@/components/home/experience-globe-section"
import Footer from "@/components/layout/footer"
import BlogSection from "@/components/home/blog-section"
import HowWeWork from "@/components/home/how-we-work"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <WhatWeDoSection />
      <ServiceSection />
      <HeroPlanificacion />
      <HowWeWork />
      <LogoCloudSection />
      <div className=" w-full bg-[#e6f3fa]">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-8">
          <div className="w-full min-h-[120px] rounded  bg-transparent px-4 py-6 text-center flex items-center justify-center">
            <p className="text-[#1163b2] text-2xl font-regular leading-snug max-w-3xl mx-auto">
              Estas alianzas garantizan seguridad financiera en cada solución implementada, brindando un entorno de confianza y respaldo institucional a largo plazo.
            </p>
          </div>
        </div>
      </div>
      <ExperienceGlobeSection />
    <BlogSection />
    <Footer />
    </main>
  )
}
