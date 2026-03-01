import { ShieldCheck } from "lucide-react";

type FeatureCardProps = {
  text: string;
}

export const FeatureCard = ({ text }: FeatureCardProps) => {
  return (
    <div className="bg-[#E5EEF5]/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <div className="flex flex-col items-start gap-4">
        <div className="shrink-0">
          <div className="w-12 h-12 rounded-full bg-[#E5EEF5] flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-[#033163]" />
          </div>
        </div>
        <p className="text-[#000a15] text-xl leading-relaxed font-regular text-left flex-1" style={{ fontFamily: 'var(--font-noto-sans), sans-serif' }}>
          {text}
        </p>
      </div>
    </div>
  );
}
