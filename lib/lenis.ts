import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;
let removeTicker: (() => void) | null = null;

export function getLenis(): Lenis | null {
  return lenisInstance;
}

/**
 * Smooth scroll via Lenis + GSAP ticker. Call only in the browser.
 * Tears down any previous instance (e.g. React Strict Mode remount).
 */
export function initLenis(): Lenis | null {
  if (typeof window === "undefined") return null;

  teardownLenis();

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    smoothWheel: true,
  });

  lenisInstance = lenis;

  ScrollTrigger.scrollerProxy(document.documentElement, {
    scrollTop(value) {
      if (arguments.length && value !== undefined) {
        lenis.scrollTo(value, { immediate: true });
      }
      return lenis.scroll;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  lenis.on("scroll", ScrollTrigger.update);

  const tickerFn = (time: number) => {
    lenis.raf(time * 1000);
  };
  gsap.ticker.add(tickerFn);
  removeTicker = () => {
    gsap.ticker.remove(tickerFn);
    removeTicker = null;
  };
  gsap.ticker.lagSmoothing(0);

  ScrollTrigger.refresh();

  return lenis;
}

export function teardownLenis(): void {
  if (typeof window === "undefined") return;
  removeTicker?.();
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
  ScrollTrigger.scrollerProxy(document.documentElement);
  ScrollTrigger.refresh();
}
