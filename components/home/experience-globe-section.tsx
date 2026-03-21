"use client";

import { useTranslations } from "next-intl";
import { geoGraticule, geoOrthographic, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { GeometryObject, Topology } from "topojson-specification";
import { useEffect, useRef } from "react";
import landTopology from "world-atlas/land-110m.json";
import { cn } from "@/lib/utils";

const SPEED = -1e-2;

const land = feature(
  landTopology as unknown as Topology,
  landTopology.objects.land as GeometryObject,
);

/** GeoJSON Sphere (d3-geo) */
const sphere = { type: "Sphere" as const };

const graticuleGenerator = geoGraticule();
const grid = graticuleGenerator();

/** Color del globo (marca) */
const GLOBE_LAND = "#91D8F7";

export function ExperienceGlobeSection() {
  const t = useTranslations("experienceGlobe");
  return (
    <section
      className="w-full min-h-[500px]"
      style={{
        background:
          "linear-gradient(135deg, #0a467e 0%, #033163 75%, #033163 100%)",
      }}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-6 py-12",
          "md:flex-row md:items-center md:gap-12 md:px-12 md:py-16",
          "lg:gap-16 lg:px-16",
        )}
      >
        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-regular tracking-widest text-[#91D8F7] leading-tight mb-4"
            style={{ fontFamily: '"Adagietto", "Zalando Sans"' }}
          >
            {t("title1")}{" "}
            <span className="text-[#FFFFFF]">{t("title2")}</span>
          </h2>

          <p
            className="text-base sm:text-lg text-[#FFFFFF] leading-relaxed mb-4"
            style={{ fontFamily: "var(--font-noto-sans)" }}
          >
            {t("description1")}
            <span className="text-[#91D8F7]">{t("description1highlight")}</span>
          </p>
          <p className="text-sm sm:text-base md:text-lg text-[#FFFFFF] leading-relaxed">
            {t("description2")}
          </p>
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-center md:justify-end">
          <div className="relative aspect-square w-full max-w-[min(100%,420px)] sm:max-w-[min(100%,480px)] md:max-w-[min(100%,520px)]">
            <Globe className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Globe({
  className,
  landColor = GLOBE_LAND,
}: {
  className?: string;
  /** Por defecto #91D8F7; dos pasadas con el mismo color mantienen el relieve por el recorte */
  landColor?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const startRef = useRef<number>(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let projection = geoOrthographic()
      .scale(1)
      .translate([0, 0])
      .precision(0.5);

    let path = geoPath(projection, ctx);
    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      projection = geoOrthographic()
        .scale(width / 2.1)
        .translate([width / 2, height / 2])
        .precision(0.5);
      path = geoPath(projection, ctx);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    window.addEventListener("resize", resize);

    let rafId = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      projection.rotate([
        SPEED * (Date.now() - startRef.current),
        -15,
      ]).clipAngle(90);

      ctx.beginPath();
      path(sphere);
      ctx.lineWidth = 0;
      ctx.strokeStyle = "transparent";
      ctx.stroke();
      ctx.fillStyle = "transparent";
      ctx.fill();

      projection.clipAngle(180);

      ctx.beginPath();
      path(land);
      ctx.fillStyle = landColor;
      ctx.fill();

      ctx.beginPath();
      path(grid);
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "rgba(119,119,119,0)";
      ctx.stroke();

      projection.clipAngle(90);

      ctx.beginPath();
      path(land);
      ctx.fillStyle = landColor;
      ctx.fill();
      ctx.lineWidth = 0;
      ctx.strokeStyle = "transparent";
      ctx.stroke();
    };

    const loop = () => {
      draw();
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [landColor]);

  return (
    <div
      ref={containerRef}
      className={cn("relative h-full w-full min-h-0 min-w-0", className)}
    >
      <canvas
        ref={canvasRef}
        className="size-full contain-[layout_paint_size]"
      />
    </div>
  );
}
