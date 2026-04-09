import dynamic from "next/dynamic";
import { HeroSection } from "@/components/home/hero-section";
import { WhatWeDoSection } from "@/components/home/what-we-do-section";
import { HeroPlanificacion } from "@/components/home/hero-planificacion";
import LogoCloudSection from "@/components/home/logo-cloud-demo";
import BlogSection from "@/components/home/blog-section";
import { Footer } from "@/components/layout/footer";
import { StickyScrollArticle, StickyScrollPanel } from "@/components/ui/smooth-scroll";
import { cn } from "@/lib/utils";
import { siteContainer } from "@/lib/site-layout";

// Heavy sections deferred — d3-geo (~120KB) and particles.js split into separate chunks
const HowWeWork = dynamic(() => import("@/components/home/how-we-work"));
const ExperienceGlobeSection = dynamic(
  () => import("@/components/home/experience-globe-section").then((m) => ({ default: m.ExperienceGlobeSection })),
);

type HomeHeroLayoutProps = {
  allianceText?: string;
};

export function HomeHeroLayout({ allianceText = "" }: HomeHeroLayoutProps) {
  return (
    <>
      <StickyScrollArticle>
        <StickyScrollPanel layer={1}>
          <HeroSection />
        </StickyScrollPanel>
        <StickyScrollPanel layer={2} variant="raised">
          <WhatWeDoSection />
        </StickyScrollPanel>
      </StickyScrollArticle>
      <HeroPlanificacion />
      <HowWeWork />
      <LogoCloudSection />
      <div className="w-full bg-[#e6f3fa]">
        <div className={cn(siteContainer, "py-4 md:py-5")}>
          <div className="flex w-full items-center justify-center rounded bg-transparent py-2 text-center">
            <p className="max-w-5xl text-xl font-medium  text-[#000000] sm:text-2xl md:text-2xl lg:text-3xl">
              {allianceText}
            </p>
          </div>
        </div>
      </div>
      <ExperienceGlobeSection />
      <BlogSection />
      <Footer />
    </>
  );
}
