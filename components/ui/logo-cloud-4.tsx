import type * as React from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
      className={cn(
        "relative w-full overflow-hidden bg-[#033163] py-8 md:py-10",
        className,
      )}
      {...props}
    >
      <InfiniteSlider gap={120} reverse duration={60} durationOnHover={100}>
        {logos.map((logo) => (
          <Link
            key={`logo-${logo.alt}`}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-opacity hover:opacity-75"
          >
            <Image
              alt={logo.alt}
              className="h-auto max-h-16 w-auto brightness-0 invert md:max-h-20 select-none pointer-events-auto cursor-pointer"
              loading="lazy"
              src={logo.src}
              width={logo.width}
              height={logo.height}
            />
          </Link>
        ))}
      </InfiniteSlider>

      {/* Edge shadow / gradient overlays with wider coverage */}


    </div>
  );
}
