/**
 * Gutters y ancho máximo compartidos (Navbar, hero, secciones).
 * Un solo lugar para mantener márgenes horizontales coherentes.
 */
export const sitePaddingX = "px-4 md:px-8 lg:px-8";

export const siteContainer =
  "mx-auto w-full max-w-[1400px] " + sitePaddingX;

/**
 * El panel del hero con video empieza justo debajo del pill del Navbar (mismo max-w-[1400px] y sitePaddingX).
 * Cálculo: nav pt-4/md:pt-6 + bar py-4 + logo h-16/sm:h-18/md:h-20 + respiro 6px.
 */
export const heroVideoOffsetBelowNavbar =
  "pt-[calc(1rem+2rem+4rem+0.375rem)] sm:pt-[calc(1rem+2rem+4.5rem+0.375rem)] md:pt-[calc(1.5rem+2rem+5rem+0.375rem)]";
