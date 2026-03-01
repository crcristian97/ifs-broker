"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

type AnimatedHeadlineProps = {
    text: string
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    className?: string
    duration?: number
    delay?: number
  }

export default function AnimatedHeadline({
  text,
  as: Tag = "h1",
  className = "",
  duration = 1.8,
  delay = 0,
}: AnimatedHeadlineProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current?.querySelectorAll(".line span"), {
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
      <Tag className={className}>
        <div className="line overflow-hidden">
          <span className="block">{text}</span>
        </div>
      </Tag>
    </div>
  )
}