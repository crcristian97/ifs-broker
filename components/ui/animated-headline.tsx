"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { cn } from "@/lib/utils"

type AnimatedHeadlineProps = {
    text: string
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    className?: string
    duration?: number
    delay?: number
    style?: React.CSSProperties
  }

export default function AnimatedHeadline({
  text,
  as: Tag = "h1",
  className = "",
  duration = 1.8,
  delay = 0,
  style = {},
}: AnimatedHeadlineProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!ref.current) return

      const spans = ref.current.querySelectorAll(".line span")
      if (!spans.length) return

      gsap.from(spans, {
        y: 100,
        opacity: 0,
        duration: duration,
        ease: "power4.out",
        skewY: 7,
        stagger: { amount: 0.3 },   
        delay: delay,
      })
    }, ref)

    return () => ctx.revert()
  }, [duration, delay])

  return (
    <div ref={ref}>
      <Tag className={cn("leading-[1.12]", className)} style={style}>
        <div className="line overflow-hidden leading-[inherit]">
          <span className="block">{text}</span>
        </div>
      </Tag>
    </div>
  )
}