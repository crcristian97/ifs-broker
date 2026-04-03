"use client";

import * as React from "react";
import { motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export type FocusRailItem = {
  id: string | number;
  title: string;
  description?: string;
  imageSrc?: string;
  href?: string;
  meta?: string;
  content?: React.ReactNode;
};

interface FocusRailProps {
  items: FocusRailItem[];
  initialIndex?: number;
  loop?: boolean;
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

/**
 * Helper to wrap indices (e.g., -1 becomes length-1)
 */
function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

/**
 * Physics Configuration
 * Base spring for spatial movement (x/z)
 */
const BASE_SPRING = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 1,
};

/**
 * Scale Spring
 * Bouncier spring specifically for the visual "Click/Tap" feedback on the center card
 */
const TAP_SPRING = {
  type: "spring",
  stiffness: 450,
  damping: 18, // Lower damping = subtle overshoot/wobble "tap"
  mass: 1,
};

export function FocusRail({
  items,
  initialIndex = 0,
  loop = true,
  autoPlay = true,
  interval = 3000,
  className,
}: FocusRailProps) {
  const [active, setActive] = React.useState(initialIndex);
  const [isHovering, setIsHovering] = React.useState(false);

  const count = items.length;

  // --- NAVIGATION HANDLERS ---
  const handlePrev = React.useCallback(() => {
    if (!loop && active === 0) return;
    setActive((p) => p - 1);
  }, [loop, active]);

  const handleNext = React.useCallback(() => {
    if (!loop && active === count - 1) return;
    setActive((p) => p + 1);
  }, [loop, active, count]);

  // Navegación solo por tiempo (autoPlay), flechas, teclado y arrastre — sin rueda del ratón / scroll.

  // Autoplay logic
  React.useEffect(() => {
    if (!autoPlay || isHovering || items.length <= 1) return;
    const timer = setInterval(() => handleNext(), interval);
    return () => clearInterval(timer);
  }, [autoPlay, isHovering, handleNext, interval, items.length]);

  // Keyboard navigation
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  // --- SWIPE / DRAG LOGIC ---
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const onDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      handleNext();
    } else if (swipe > swipeConfidenceThreshold) {
      handlePrev();
    }
  };

  const visibleIndices = [-2, -1, 0, 1, 2];

  return (
    <div
      className={cn(
        "group relative flex h-[600px] w-full flex-col overflow-hidden  text-white outline-none select-none overflow-x-hidden",
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div className="relative z-10 flex flex-1 flex-col justify-center px-4 md:px-8">
        <motion.div
          className="relative mx-auto flex h-[360px] w-full max-w-6xl items-center justify-center perspective-[1200px] cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={onDragEnd}
        >
          {visibleIndices.map((offset) => {
            const absIndex = active + offset;
            const index = wrap(0, count, absIndex);
            const item = items[index];

            if (!loop && (absIndex < 0 || absIndex >= count)) return null;

            const isCenter = offset === 0;
            const dist = Math.abs(offset);

            // Dynamic transforms
            const xOffset = offset * 320;
            const zOffset = -dist * 180;
            const scale = isCenter ? 1 : 0.85;
            const rotateY = offset * -20;

            const opacity = isCenter ? 1 : Math.max(0.1, 1 - dist * 0.5);
            const blur = isCenter ? 0 : dist * 6;
            const brightness = isCenter ? 1 : 0.5;

            return (
              <motion.div
                key={absIndex}
                className={cn(
                  "absolute aspect-[3/4] w-[260px] md:w-[320px] rounded-2xl bg-[#033163] transition-shadow duration-300",
                  // Sombras solo con marca #033163 (rgb 3, 49, 99)
                  isCenter
                    ? "z-20 shadow-[0_18px_45px_rgba(3,49,99,0.28)]"
                    : "z-10 shadow-[0_10px_36px_rgba(3,49,99,0.42)]"
                )}
                initial={false}
                animate={{
                  x: xOffset,
                  z: zOffset,
                  scale: scale,
                  rotateY: rotateY,
                  opacity: opacity,
                }}
                transition={(val: string) => {
                    if (val === "scale") return TAP_SPRING;
                    return BASE_SPRING;
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                onClick={() => {
                  if (offset !== 0) setActive((p) => p + offset);
                }}
              >
                {item.content ? (
                  <div className="h-full w-full rounded-2xl overflow-hidden bg-[#033163] text-[#FEFEFE] pointer-events-none">
                    {item.content}
                  </div>
                ) : (
                  <Image
                    src={item.imageSrc ?? ""}
                    alt={item.title}
                    className="rounded-2xl object-cover pointer-events-none"
                    width={600}
                    height={600}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Navigation arrows */}
        {items.length > 1 && (
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:px-8">
            <button
              type="button"
              onClick={handlePrev}
              className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#033163] text-[#FEFEFE] shadow-md transition hover:bg-[#033163]/80"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#033163] text-[#FEFEFE] shadow-md transition hover:bg-[#033163]/80"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}