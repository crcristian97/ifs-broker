import type { ReactNode } from "react";
import { ShieldCheck, Handshake, UserKey } from "lucide-react";

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
    <div className="flex w-full max-w-4xl flex-wrap md:flex-nowrap items-stretch justify-between gap-6 rounded-xl bg-[#91D8F766] backdrop-blur-md px-10 py-5 md:gap-10">
            {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-1 min-w-32 items-center justify-center gap-2.5"
        >
                    {feature.icon}
          <span className="text-[18px] font-normal text-[#F3F3F3] text-center md:whitespace-nowrap">
            {feature.title}
          </span>
                </div>    
            ))}
        </div>
  );
};