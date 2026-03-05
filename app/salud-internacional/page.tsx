import { Navbar } from "@/components/layout/navbar";
import BannerSection from "@/components/saludinternacional/banner-section";
import { SaludTimelineDemo } from "@/components/saludinternacional/salud-timeline-demo";

export default function SaludInternacionalPage() {
  return (
    <>
      <Navbar />
      <BannerSection />
      <SaludTimelineDemo />
    </>
  );
}
