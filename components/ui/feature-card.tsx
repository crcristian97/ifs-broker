import { ShieldCheck } from "lucide-react";

type FeatureCardProps = {
  text: string;
}

export const FeatureCard = ({ text }: FeatureCardProps) => {
  return (
    <div className="bg-[#E5EEF5]/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-[#E5EEF5] flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-[#033163]" />
          </div>
        </div>
        <p className="text-[#033163] leading-relaxed flex-1 font-regular" style={{ fontFamily: 'var(--font-noto-sans), sans-serif' }}>
          {text}
        </p>
      </div>
    </div>
  );
}
