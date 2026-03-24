"use client";

import { ShieldCheck } from "lucide-react";
import * as React from "react";

type FeatureCardProps = {
  text: string;
};

export const FeatureCard = ({ text }: FeatureCardProps) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((y - centerY) / centerY) * -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className="relative [perspective:1200px]">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bg-gradient-to-br from-[#E5EEF5] to-[#E5EEF5] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full min-h-[220px] sm:min-h-[240px] flex flex-col backdrop-blur-md border border-white/40"
      >
        <div className="flex flex-col items-start gap-4">
          <div className="shrink-0">
            <div className="w-12 h-12 rounded-full bg-[#E5EEF5] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[#033163]" />
            </div>
          </div>
          <p
            className="text-[#000a15] text-xl leading-relaxed font-regular text-left flex-1"
            style={{ fontFamily: "var(--font-noto-sans), sans-serif" }}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
