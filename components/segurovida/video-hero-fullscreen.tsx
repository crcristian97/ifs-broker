import { cn } from "@/lib/utils";

type VideoHeroFullscreenProps = {
  /** Ruta en /public, ej: /seguro/hero-seguros-vida.mp4 */
  videoSrc: string;
  posterSrc?: string;
  className?: string;
};

/**
 * Hero con video de fondo (altura más baja que viewport completo).
 * Colocá el archivo en `public` (ej. `public/seguro/hero-seguros-vida.mp4`).
 */
function videoMimeType(src: string) {
  if (src.endsWith(".webm")) return "video/webm";
  if (src.endsWith(".mp4")) return "video/mp4";
  return "video/mp4";
}

export function VideoHeroFullscreen({
  videoSrc,
  posterSrc,
  className,
}: VideoHeroFullscreenProps) {
  return (
    <section
      className={cn(
        "relative isolate min-h-[80vh] w-full overflow-hidden sm:min-h-[75vh] rounded-b-4xl ",
        className,
      )}
    >
      <video
        className="absolute inset-0 z-0 h-full min-h-full w-full object-cover"
        poster={posterSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={videoSrc} type={videoMimeType(videoSrc)} />
      </video>
      
    </section>
  );
}
