import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type ConocerMasButtonProps = {
  textButton: string
  size?: "sm" | "md"
  className?: string
  onClick?: () => void
  href?: string
}

export function ConocerMasButton({
  textButton,
  size = "md",
  className,
  onClick,
  href,
}: ConocerMasButtonProps) {
  const isSmall = size === "sm"

  const content = (
    <div
      className={cn(
        "flex items-center justify-center gap-[8px] h-full rounded-[7px]",
        isSmall ? "px-4 py-2" : "px-6 py-3",
      )}
      style={{
        backgroundColor: "rgba(229, 238, 245, 0.6)",
      }}
    >
      <span
        className={cn(
          "whitespace-nowrap font-bold cursor-pointer",
          isSmall ? "text-sm" : "text-lg",
        )}
        style={{ color: "#006FC4" }}
      >
        {textButton}
      </span>
      <ArrowRight
        className={cn(isSmall ? "w-3 h-3" : "w-4 h-4")}
        style={{ color: "#006FC4" }}
      />
    </div>
  )

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "group relative inline-flex items-stretch rounded-lg p-[1px] transition-opacity hover:opacity-90 active:opacity-80 cursor-pointer",
          isSmall ? "h-9" : "h-[48px]",
          className,
        )}
        style={{
          background: "linear-gradient(to right, #E5EEF5, #91D8F7)",
          borderRadius: "8px",
        }}
        onClick={onClick}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      className={cn(
        "group relative rounded-lg p-[1px] transition-opacity hover:opacity-90 active:opacity-80 cursor-pointer",
        isSmall ? "h-9" : "h-[48px]",
        className,
      )}
      onClick={onClick}
      style={{
        background: "linear-gradient(to right, #E5EEF5, #91D8F7)",
        borderRadius: "8px",
      }}
    >
      {content}
    </button>
  )
}
