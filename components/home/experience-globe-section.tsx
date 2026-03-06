"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  // Markers only in LATAM and USA
  markers: [
    { location: [19.4326, -99.1332], size: 0.05 },
    { location: [4.711, -74.0721], size: 0.05 },
    { location: [-34.6037, -58.3816], size: 0.05 },
    { location: [-31.4201, -64.1888], size: 0.05 },
    { location: [-32.9442, -60.6505], size: 0.05 },
    { location: [-32.8895, -68.8458], size: 0.05 },
    { location: [-23.5505, -46.6333], size: 0.05 },
    { location: [-22.9068, -43.1729], size: 0.05 },
    { location: [-15.7942, -47.8822], size: 0.05 },
    { location: [-19.9167, -43.9345], size: 0.05 },
    { location: [-30.0346, -51.2177], size: 0.05 },
    { location: [-33.4489, -70.6693], size: 0.05 },
    { location: [25.7617, -80.1918], size: 0.06 },
    { location: [40.7128, -74.006], size: 0.06 },
    { location: [29.7604, -95.3698], size: 0.06 },
    { location: [34.0522, -118.2437], size: 0.06 },
    { location: [41.8781, -87.6298], size: 0.06 },
    { location: [37.7749, -122.4194], size: 0.06 },
    { location: [42.3601, -71.0589], size: 0.06 },
    { location: [33.749, -84.388], size: 0.06 },
  ],
};

export function ExperienceGlobeSection() {
  return (
    <section
      className="w-full min-h-[500px]"
      style={{
        background:
          "linear-gradient(135deg, #0a467e 0%, #033163 75%, #033163 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col md:flex-row items-center gap-12 px-6 md:px-12 lg:px-16">
        <div className="flex flex-1 flex-col justify-center py-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-regular tracking-tight text-[#91D8F7] leading-tight mb-4"
            style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}
          >
            EXPERIENCIA{" "}
            <span className="text-[#FFFFFF]">QUE GENERA CONFIANZA</span>
          </h2>

          <p
            className="text-base sm:text-lg text-[#FFFFFF] leading-relaxed mb-4"
            style={{ fontFamily: "var(--font-noto-sans), sans-serif" }}
          >
            Nuestro equipo está conformado por profesionales con más de 20 años
            de experiencia en la industria financiera y aseguradora, con
            trayectoria en{" "}
            <span className="text-[#91D8F7]">
              compañías líderes a nivel internacional.
            </span>
          </p>
          <p className="text-sm sm:text-base md:text-lg text-[#FFFFFF] leading-relaxed">
            Ese recorrido nos permite acompañar decisiones complejas con
            criterio, claridad y responsabilidad.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center py-12">
          <div className="relative h-[220px] sm:h-[260px] md:h-[320px] w-full max-w-[360px] sm:max-w-[420px] md:max-w-[480px]">
            <Globe />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [r, setR] = useState(0);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      setR(delta / 200);
    }
  };

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005;
      state.phi = phi + r;
      state.width = width * 2;
      state.height = width * 2;
    },
    [r],
  );

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 0);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [config, onRender]);

  return (
    <div
      className={cn(
        "mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}