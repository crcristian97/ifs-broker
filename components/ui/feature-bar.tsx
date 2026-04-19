"use client";

import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { ShieldCheck, Handshake, UserKey } from "lucide-react";
import { FadeInUp } from "./fade-in-up";

type FeatureItem = {
  icon: ReactNode;
  title: string;
};

/** Brand blue for all Lucide icons in the bar (overrides per-icon `text-*` on SVG). */
const iconShellClassName =
  "inline-flex shrink-0 text-[#033163] [&_svg]:h-5 [&_svg]:w-5 [&_svg]:shrink-0 [&_svg]:text-[#033163]";

export function FeatureBar({
  features,
  /** `false` skips scroll-driven animation (e.g. footer: FadeInUp can stay at opacity 0 if ScrollTrigger never fires). */
  animate = true,
  className,
}: {
  features?: FeatureItem[];
  animate?: boolean;
  className?: string;
}) {
  const t = useTranslations("featureBar");
  const defaultFeatures: FeatureItem[] = [
    { icon: <UserKey className="h-5 w-5 shrink-0" />, title: t("personalized") },
    { icon: <Handshake className="h-5 w-5 shrink-0" />, title: t("longTerm") },
    { icon: <ShieldCheck className="h-5 w-5 shrink-0" />, title: t("international") },
  ];
  const items = features ?? defaultFeatures;

  const row = (feature: FeatureItem) => (
    <div className="flex min-w-0 items-center justify-start gap-2.5">
      <span className={iconShellClassName}>{feature.icon}</span>
      <span className="text-sm sm:text-[18px] font-normal text-[#F3F3F3] text-left">
        {feature.title}
      </span>
    </div>
  );

  return (
    <div
      className={`flex w-full max-w-4xl flex-col items-stretch justify-center gap-4 rounded-xl bg-[#91D8F766] backdrop-blur-md px-6 py-4 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-6 md:px-10 md:py-5 md:gap-10 ${className ?? ""}`}
    >
      {items.map((feature, index) =>
        animate ? (
          <FadeInUp key={index} delay={0.2 + index * 0.1}>
            {row(feature)}
          </FadeInUp>
        ) : (
          <div key={index}>{row(feature)}</div>
        ),
      )}
    </div>
  );
}