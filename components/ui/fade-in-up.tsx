"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

type FadeInUpProps = {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
};

export function FadeInUp({
  children,
  className,
  duration = 1,
  delay = 0,
}: FadeInUpProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!ref.current) return;

      gsap.from(ref.current, {
        y: 40,
        opacity: 0,
        duration,
        ease: "power4.out",
        delay,
      });
    }, ref);

    return () => ctx.revert();
  }, [duration, delay]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}

