import { Shield } from "lucide-react";

type FeatureCardProps = {
  text: string;
}

export const FeatureCard = ({ text }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-[#006fc4] flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed flex-1">
          {text}
        </p>
      </div>
    </div>
  );
}
