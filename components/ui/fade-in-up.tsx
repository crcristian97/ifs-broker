"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FadeInUpProps = {
  children: ReactNode;
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
  void duration;
  void delay;
  void y;

  return (
    <div className={cn(className)}>
      {children}
    </div>
  );
}

