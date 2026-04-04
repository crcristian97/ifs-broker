"use client";

import { useEffect } from "react";
import { initLenis, teardownLenis } from "@/lib/lenis";

/**
 * Initializes Lenis once on the client and wires it to GSAP's ticker + ScrollTrigger.
 */
export function LenisSmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    initLenis();
    return () => teardownLenis();
  }, []);

  return null;
}
