"use client";

import type { ReactNode } from "react";

type InvestmentProfile = {
  title: string;
  description: string;
  cardBg: string;
  circleBg: string;
  icon?: ReactNode;
};

interface InvestmentProfilesProps {
  items: InvestmentProfile[];
}

export function InvestmentProfiles({ items }: InvestmentProfilesProps) {
  return (
    <div className="w-full max-w-4xl mx-auto mt-10 space-y-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between gap-6 rounded-3xl px-6 py-6 md:px-8 md:py-7 shadow-[0_18px_45px_rgba(15,35,80,0.08)]"
          style={{ backgroundColor: item.cardBg }}
        >
          <div className="max-w-xl">
            <h3 className="mb-2 text-lg md:text-xl font-semibold text-[#033163]">
              {item.title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-[#033163]">
              {item.description}
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div
              className="flex h-24 w-24 md:h-28 md:w-28 items-center justify-center rounded-full"
              style={{ backgroundColor: item.circleBg }}
            >
              {item.icon && (
                <span className="text-3xl md:text-4xl text-white">
                  {item.icon}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

