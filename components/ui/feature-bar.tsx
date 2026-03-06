import type { ReactNode } from "react";
import { ShieldCheck, Handshake, UserKey } from "lucide-react";
import { FadeInUp } from "./fade-in-up";

type FeatureItem = {
  icon: ReactNode;
  title: string;
};

export const defaultFeatures: FeatureItem[] = [
    {
    icon: <UserKey className="h-5 w-5 shrink-0 text-[#033163]" />,
        title: "Asesoramiento personalizado",
    },
    {
    icon: <Handshake className="h-5 w-5 shrink-0 text-[#033163]" />,
        title: "Relacion a largo plazo",
    },
    {
    icon: <ShieldCheck className="h-5 w-5 shrink-0 text-[#033163]" />,
        title: "Respaldo internacional",
    },
];

export const FeatureBar = ({
  features = defaultFeatures,
}: {
  features?: FeatureItem[];
}) => {
    return (
    <div className="flex w-full max-w-4xl flex-col items-stretch justify-center gap-4 rounded-xl bg-[#91D8F766] backdrop-blur-md px-6 py-4 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-6 md:px-10 md:py-5 md:gap-10">
      {features.map((feature, index) => (
        <FadeInUp key={index} delay={0.2 + index * 0.1}>
          <div className="flex w-full items-center justify-start gap-2.5">
            {feature.icon}
            <span className="text-sm sm:text-[18px] font-normal text-[#F3F3F3] text-left">
              {feature.title}
            </span>
          </div>
        </FadeInUp>
      ))}
    </div>
  );
};