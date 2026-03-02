import { ArrowRight } from "lucide-react"

export function ConocerMasButton({ textButton }: { textButton: string }) {
  return (
    <button
      className="
        group
        relative
        h-[48px]
        rounded-lg
        p-[1px]
        transition-opacity
        hover:opacity-90
        active:opacity-80
        cursor-pointer
      "
      style={{
        background: "linear-gradient(to right, #E5EEF5, #91D8F7)",
        borderRadius: "8px",
      }}
    >
      <div
        className="
          flex
          items-center
          justify-center
          gap-[10px]
          h-full
          rounded-[7px]
          px-6
          py-3
        "
        style={{
          backgroundColor: "rgba(229, 238, 245, 0.6)",
        }}
      >
        <span className="text-lg whitespace-nowrap font-bold cursor-pointer" style={{ color: "#006FC4" }}>
          {textButton}
        </span>
        <ArrowRight className="w-4 h-4" style={{ color: "#006FC4" }} />
      </div>
    </button>
  )
}
