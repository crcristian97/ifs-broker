import { Navbar } from "@/components/layout/navbar"
import HomeHeroLayout from "@/components/layout/hero-section"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HomeHeroLayout />
    </main>
  )
}
