"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type FadeInUpProps = {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  y?: number;
};

export function FadeInUp({
  children,
  className,
  duration = 0.8,
  delay = 0,
  y = 40,
}: FadeInUpProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y,
        opacity: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
    // Props are static at call sites — no need to re-run on prop changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}

