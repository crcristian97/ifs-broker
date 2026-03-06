"use client";

import { motion } from "framer-motion";

type InvestmentProfile = {
  title: string;
  description: string;
  cardBg: string;
  circleBg: string;
};

interface InvestmentProfilesProps {
  items: InvestmentProfile[];
}

export function InvestmentProfiles({ items }: InvestmentProfilesProps) {
  return (
    <div className="w-full max-w-4xl mx-auto mt-10 space-y-6">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            scale: 1.02,
            y: -4,
            transition: {
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="relative flex flex-col gap-2 rounded-3xl px-6 py-6 md:px-8 md:py-7 overflow-hidden group"
        >
          {/* Liquid background effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-md border border-white/30 rounded-3xl" />
          
          {/* Animated liquid shimmer */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            animate={{
              background: [
                "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.3) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 max-w-xl">
            <motion.h3
              className="mb-2 text-lg md:text-xl font-semibold text-[#033163]"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              {item.title}
            </motion.h3>
            <p className="text-sm md:text-base leading-relaxed text-[#033163]">
              {item.description}
            </p>
          </div>
          
          {/* Liquid shadow effect */}
          <motion.div
            className="absolute inset-0 rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.08)]"
            animate={{
              boxShadow: [
                "0_18px_45px_rgba(15,35,80,0.08)",
                "0_25px_60px_rgba(15,35,80,0.12)",
                "0_18px_45px_rgba(15,35,80,0.08)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
