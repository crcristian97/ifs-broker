"use client";

import { useEffect, useId, useState } from "react";
import Script from "next/script";
import styles from "./particles-background.module.css";

declare global {
  interface Window {
    particlesJS?: (tagId: string, params: Record<string, unknown>) => void;
  }
}

/** Dark space theme (stars + white particles) */
const PARTICLES_CONFIG_DARK: Record<string, unknown> = {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    shape: {
      type: "circle",
      stroke: {
        width: 2,
        color: "#ffffff",
      },
      polygon: {
        nb_sides: 7,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 3,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 250,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 300,
        size: 70,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 500,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

/** Light theme: white / off-white background, subtle blue particles */
const PARTICLES_CONFIG_LIGHT: Record<string, unknown> = {
  ...PARTICLES_CONFIG_DARK,
  particles: {
    ...(PARTICLES_CONFIG_DARK.particles as object),
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 900,
      },
    },
    shape: {
      type: "circle",
      stroke: {
        width: 1,
        color: "#006FC4",
      },
      polygon: {
        nb_sides: 7,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.45,
      random: true,
      anim: {
        enable: false,
        speed: 3,
        opacity_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 180,
      color: "#006FC4",
      opacity: 0.22,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.8,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
};

type ParticlesSkyBackgroundProps = {
  className?: string;
  /** `light` = white bg + blue particles. `dark` = starfield + white particles. */
  variant?: "light" | "dark";
  /** When `false`, particles do not capture pointer events (e.g. site-wide fixed background). */
  interactive?: boolean;
  /** Show the demo instruction overlay (top-left). */
  showHeadline?: boolean;
  headline?: string;
};

export function ParticlesSkyBackground({
  className = "",
  variant = "light",
  interactive = true,
  showHeadline = false,
  headline = "Click anywhere to add more random constellations",
}: ParticlesSkyBackgroundProps) {
  const reactId = useId().replace(/:/g, "");
  const containerId = `particles-js-${reactId}`;
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.particlesJS) {
      setScriptReady(true);
    }
  }, []);

  const config =
    variant === "light" ? PARTICLES_CONFIG_LIGHT : PARTICLES_CONFIG_DARK;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!scriptReady || !window.particlesJS) return;

    const el = document.getElementById(containerId);
    if (!el) return;

    el.innerHTML = "";
    window.particlesJS(containerId, config);

    return () => {
      el.innerHTML = "";
    };
  }, [scriptReady, containerId, config, variant]);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
      />

      <article
        id="info"
        className={`pointer-events-none absolute inset-0 overflow-hidden ${
          variant === "light"
            ? "bg-white"
            : "bg-black"
        } ${className}`}
        aria-hidden
      >
        {variant === "dark" && (
          <header className="pointer-events-none absolute inset-0">
            <div className={styles.stars} />
            <div className={styles.twinkle} />
          </header>
        )}

        <div
          id={containerId}
          className={`${styles.particlesMount} ${interactive ? "pointer-events-auto" : "pointer-events-none"}`}
        />

        {showHeadline && (
          <div className={styles.head}>
            <h1>
              <strong>{headline}</strong>
            </h1>
          </div>
        )}
      </article>
    </>
  );
}
