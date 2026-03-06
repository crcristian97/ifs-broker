"use client";

type InvestmentProfile = {
  title: string;
  description: string;
  cardBg: string;
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
          className="flex flex-col gap-2 rounded-3xl px-6 py-6 md:px-8 md:py-7 shadow-[0_18px_45px_rgba(15,35,80,0.08)]"
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
        </div>
      ))}
    </div>
  );
}
