import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type ConocerMasButtonProps = {
  textButton: string
  size?: "sm" | "md"
  /** default: fondo azul claro; onDark: blanco / negro, hover azul marca / blanco (p. ej. carrusel sobre fondo oscuro) */
  variant?: "default" | "onDark"
  className?: string
  onClick?: () => void
  href?: string
  target?: string
}

export function ConocerMasButton({
  textButton,
  size = "md",
  variant = "default",
  className,
  onClick,
  href,
  target,
}: ConocerMasButtonProps) {
  const isSmall = size === "sm"
  const isOnDark = variant === "onDark"

  const content = (
    <div
      className={cn(
        "flex h-full items-center justify-center gap-[8px] rounded-[7px]",
        isSmall ? "px-3 py-1.5" : "px-6 py-3",
        isOnDark
          ? "bg-white text-black transition-colors duration-200 group-hover:bg-[#006FC4] group-hover:text-white"
          : "",
      )}
      style={
        isOnDark
          ? undefined
          : { backgroundColor: "rgba(229, 238, 245, 0.6)" }
      }
    >
      <span
        className={cn(
          "cursor-pointer font-bold whitespace-nowrap",
          isSmall ? "text-xs" : "text-lg",
          isOnDark && "text-inherit",
        )}
        style={isOnDark ? undefined : { color: "#006FC4" }}
      >
        {textButton}
      </span>
      <ArrowRight
        className={cn(
          "shrink-0",
          isSmall ? "h-3 w-3" : "h-4 w-4",
          isOnDark && "text-inherit",
        )}
        style={isOnDark ? undefined : { color: "#006FC4" }}
      />
    </div>
  )

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={cn(
          "group relative flex w-[200px] cursor-pointer items-stretch rounded-lg p-[1px]",
          isOnDark
            ? "transition-colors"
            : "transition-opacity hover:opacity-90 active:opacity-80",
          isSmall ? "h-8" : "h-[48px]",
          className,
        )}
        style={{
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
        "group relative flex w-[200px] cursor-pointer items-stretch rounded-lg p-[1px]",
        isOnDark
          ? "transition-colors"
          : "transition-opacity hover:opacity-90 active:opacity-80",
        isSmall ? "h-8" : "h-[48px]",
        className,
      )}
      onClick={onClick}
     
    >
      {content}
    </button>
  )
}
