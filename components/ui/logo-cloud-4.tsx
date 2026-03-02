import type * as React from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
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
      className="relative w-full py-6 overflow-hidden"
      {...props}
    >
      <InfiniteSlider gap={72} reverse duration={60} durationOnHover={100}>
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

      <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-r from-background via-background/0 to-background" />
    </div>
  );
}
