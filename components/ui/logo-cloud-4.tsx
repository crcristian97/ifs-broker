import type * as React from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Image from "next/image";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ logos, className, ...props }: LogoCloudProps) {
  return (
    <div
      className="relative w-full py-6"
      {...props}
    >
      <InfiniteSlider gap={72} reverse duration={40} durationOnHover={80}>
        {logos.map((logo) => (
          <Image
            alt={logo.alt}
            className="pointer-events-none h-auto max-h-16 w-auto md:max-h-20 select-none"
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
            width={logo.width}
            height={logo.height}
          />
        ))}
      </InfiniteSlider>

      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 left-0 h-full w-[160px]"
        direction="left"
      />
      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 right-0 h-full w-[160px]"
        direction="right"
      />
    </div>
  );
}
