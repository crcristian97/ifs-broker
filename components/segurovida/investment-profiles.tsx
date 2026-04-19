"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { InvestmentProfileId } from "./investment-profile-logic";

export type InvestmentProfile = {
  id: InvestmentProfileId;
  title: string;
  description: string;
  cardBg: string;
  circleBg: string;
};

interface InvestmentProfilesProps {
  items: InvestmentProfile[];
  /** Resaltado según respuesta Q1 (porcentaje a invertir) */
  activeProfileId?: InvestmentProfileId | null;
}

export function InvestmentProfiles({
  items,
  activeProfileId = null,
}: InvestmentProfilesProps) {
  const hasSelection = activeProfileId != null;
  /** Una sola tarjeta (perfil elegido): sin atenuar otras */
  const singleCard = items.length === 1;

  return (
    <div className="mx-auto mt-10 w-full max-w-4xl space-y-6">
      {items.map((item, index) => {
        const isActive = hasSelection && item.id === activeProfileId;

        return (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: singleCard || !hasSelection ? 1 : isActive ? 1 : 0.45,
            y: 0,
            scale: singleCard || !hasSelection ? 1 : isActive ? 1.01 : 1,
          }}
          transition={{
            duration: 0.6,
            delay: singleCard ? 0 : index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={
            !singleCard && hasSelection && !isActive
              ? undefined
              : {
                  scale: 1.02,
                  y: -4,
                  transition: {
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }
          }
          className={cn(
            "group relative flex flex-col gap-2 overflow-hidden rounded-3xl px-6 py-6 md:px-8 md:py-7",
            isActive &&
              "shadow-[0_12px_40px_rgba(0,111,196,0.25)] ring-2 ring-[#006FC4]",
          )}
        >
          {/* Liquid background effect */}
          <div
            className={cn(
              "absolute inset-0 rounded-3xl border bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-md",
              isActive ? "border-[#006FC4]/50" : "border-white/30",
            )}
          />
          
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
            <p className="text-sm md:text-base text-[#033163]">
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
        );
      })}
    </div>
  );
}
