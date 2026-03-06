"use client";

import Image from "next/image";
import { ButtonPrimary } from "@/components/ui/button-primary";
import { ConocerMasButton } from "@/components/ui/button-terciary";

export function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden h-[1020px]">
      {/* Fondo con imagen suavemente desenfocada y overlay */}
      <div className="absolute inset-0">
        <Image
          src="/seguro/fondo-seguro-de-vida.webp"
          alt="Familia viajando en auto"
          fill
          priority
          className="object-cover opacity-80"
        />
      </div>

      {/* Contenido principal - Centrado vertical y horizontal */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] h-full min-h-[520px] flex-col items-center justify-center px-6 md:flex-row md:items-center md:justify-center md:px-12 lg:px-16">
        {/* Columna izquierda: título + CTAs */}
        <div className="flex flex-1 flex-col justify-center gap-8 items-center md:items-start">
          <h1
            className="max-w-xl text-4xl font-regular leading-tight tracking-[0.08em] text-[#033163] md:text-5xl"
            style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}
          >
            SEGURO DE VIAJES
          </h1>

          <div className="relative flex flex-col gap-4 items-center md:items-start">
            {/* Botón principal con badge circular arriba a la izquierda */}
            <div className="relative inline-flex w-full max-w-xs">
              <ButtonPrimary
                href="#contacto"
                className="w-full justify-center rounded-[14px] px-6 py-3  font-semibold"
              >
                Hablar con un asesor
              </ButtonPrimary>
            </div>

            <div className="inline-flex w-full max-w-xs">
              <ConocerMasButton
                textButton="Agendá una reunión"
                size="md"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Columna derecha: tarjeta de texto flotante */}
        <div className="flex flex-1 items-center justify-center md:justify-end">
          <div className="w-full max-w-2xl rounded-[40px] bg-white/90 p-10 shadow-[0_30px_100px_rgba(0,77,159,0.25)] backdrop-blur-lg md:p-14">
            <p
              className="text-xl leading-relaxed text-[#006FC4] md:text-2xl font-semibold"
              style={{ fontFamily: "var(--font-noto-sans), sans-serif" }}
            >
              Cobertura integral para viajes nacionales e internacionales que protege ante emergencias médicas, cancelaciones, pérdidas de equipaje y otros imprevistos,
              <span className="block mt-2">
                brindando tranquilidad durante el viaje.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;

