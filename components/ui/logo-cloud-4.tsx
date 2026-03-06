import type * as React from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Image from "next/image";
import Link from "next/link";

type Logo = {
  src: string;
  alt: string;
  url: string;
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
      <InfiniteSlider gap={120} reverse duration={60} durationOnHover={100}>
        {logos.map((logo) => (
          <Link
            key={`logo-${logo.alt}`}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-opacity hover:opacity-80"
          >
            <Image
              alt={logo.alt}
              className="h-auto max-h-16 w-auto md:max-h-20 select-none pointer-events-auto cursor-pointer"
              loading="lazy"
              src={logo.src}
              width={logo.width}
              height={logo.height}
            />
          </Link>
        ))}
      </InfiniteSlider>

    </div>
  );
}
