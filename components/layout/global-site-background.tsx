"use client";

import type { ReactNode } from "react";
import { usePathname } from "@/i18n/navigation";
import { ParticlesSkyBackground } from "@/components/ui/particles-sky-background";

export function GlobalSiteBackground({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const showParticles =
    !pathname.includes("/blog/") &&
    !pathname.includes("/politica-de-privacidad") &&
    !pathname.includes("/terminos-y-condiciones");

  return (
    <>
      {showParticles && (
        <div
          className="pointer-events-none fixed inset-0 z-0 isolate min-h-[100dvh] w-full"
          aria-hidden
        >
          <ParticlesSkyBackground className="z-0" interactive={false} />
        </div>
      )}
      <div className="relative z-[1]">{children}</div>
    </>
  );
}
