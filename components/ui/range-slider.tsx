"use client"

import { useCallback, useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface RangeSliderProps {
  label: string
  min: number
  max: number
  step?: number
  value: number
  onChange: (value: number) => void
  unit?: string
}

export function RangeSlider({
  label,
  min,
  max,
  step = 1,
  value,
  onChange,
  unit = "",
}: RangeSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const percentage = ((value - min) / (max - min)) * 100

  const updateValue = useCallback(
    (clientX: number) => {
      if (!trackRef.current) return
      const rect = trackRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
      const ratio = x / rect.width
      const rawValue = min + ratio * (max - min)
      const steppedValue = Math.round(rawValue / step) * step
      const clampedValue = Math.max(min, Math.min(max, steppedValue))
      onChange(clampedValue)
    },
    [min, max, step, onChange]
  )

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      setIsDragging(true)
      updateValue(e.clientX)
    },
    [updateValue]
  )

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      setIsDragging(true)
      updateValue(e.touches[0].clientX)
    },
    [updateValue]
  )

  useEffect(() => {
    if (!isDragging) return

    const handleMouseMove = (e: MouseEvent) => {
      updateValue(e.clientX)
    }
    const handleTouchMove = (e: TouchEvent) => {
      updateValue(e.touches[0].clientX)
    }
    const handleEnd = () => {
      setIsDragging(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleEnd)
    window.addEventListener("touchmove", handleTouchMove)
    window.addEventListener("touchend", handleEnd)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleEnd)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleEnd)
    }
  }, [isDragging, updateValue])

  const displayValue = unit === "$"
    ? `$${value.toLocaleString()}`
    : unit === "%"
    ? `${value}%`
    : `${value}`

  return (
    <div className="flex flex-col gap-2">
      <label className="text-base text-[#000A15] leading-relaxed">
        {label}
      </label>
      <div className="relative pb-2">
        {/* Track */}
        <div
          ref={trackRef}
          className="relative h-2 w-full cursor-pointer rounded-full bg-secondary"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-label={label}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight" || e.key === "ArrowUp") {
              e.preventDefault()
              onChange(Math.min(max, value + step))
            } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
              e.preventDefault()
              onChange(Math.max(min, value - step))
            }
          }}
        >
          {/* Filled portion */}
          <div
            className="absolute top-0 left-0 h-full rounded-full bg-[#E5EEF5]"
            style={{ width: `${percentage}%` }}
          />
          {/* Thumb */}
          <div
            className={cn(
              "absolute top-1/2 -translate-y-1/2 -translate-x-1/2",
              "flex items-center justify-center rounded-full",
              "bg-[#003163] text-[#FEFEFE] font-bold",
              "shadow-md cursor-grab select-none transition-shadow",
              isDragging && "cursor-grabbing shadow-lg scale-110",
              displayValue.length > 3
                ? "h-9 min-w-9 px-2 text-[10px]"
                : "h-8 w-8 text-xs"
            )}
            style={{ left: `${percentage}%` }}
          >
            {displayValue}
          </div>
        </div>
      </div>
    </div>
  )
}
