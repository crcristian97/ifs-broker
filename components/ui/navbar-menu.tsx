"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  className,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const activeBg = "bg-[#006FC4]";
  return (
    <div
      onMouseEnter={() => setActive(item)}
      onMouseLeave={() => setActive(null)}
      className={cn(
        "relative rounded-lg transition-colors duration-200",
        active === item && cn("px-3 py-2", activeBg),
      )}
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className={cn(
          "nav-link cursor-pointer text-[18px] font-normal transition-colors",
          active === item
            ? "text-[#FEFEFE]"
            : className?.trim()
              ? className
              : "text-[#FEFEFE] hover:text-[#FEFEFE]/80",
        )}
        style={{ fontFamily: "var(--font-noto-sans), sans-serif" }}
      >
        {item}
      </motion.p>
      {active === item && (
        <>
          {/* Invisible bridge to prevent gap between text and dropdown */}
          <div className="absolute top-full left-0 right-0 h-5" />
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={transition}
            onMouseEnter={() => setActive(item)}
            onMouseLeave={() => setActive(null)}
            className="absolute top-[calc(100%+1.2rem)] left-1/2 transform -translate-x-1/2 z-50"
          >
            <motion.div
              transition={transition}
              layoutId="active" // layoutId ensures smooth animation
              className="overflow-hidden rounded-2xl border border-[#006FC4]/40 bg-[#006FC4] shadow-xl"
            >
              <motion.div
                layout // layout ensures smooth animation
                className="w-max h-full p-4"
              >
                {children}
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative">
      {children}
    </div>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex gap-3 rounded-xl border border-transparent bg-transparent p-3 outline-none transition-all duration-200 ease-out",
        "hover:border-[#FEFEFE]/45 hover:bg-[#0058a0]/90",
        "focus-visible:border-[#FEFEFE]/55 focus-visible:bg-[#0058a0]/90 focus-visible:ring-2 focus-visible:ring-[#FEFEFE]/25",
      )}
    >
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md object-cover shadow-2xl ring-1 ring-black/10"
      />
      <div className="min-w-0">
        <h4
          className="mb-1 text-[16px] font-normal text-[#FEFEFE]"
          style={{ fontFamily: "var(--font-noto-sans), sans-serif" }}
        >
          {title}
        </h4>
        <p
          className="max-w-40 text-[12px] font-normal text-[#FEFEFE]/95"
          style={{ fontFamily: "var(--font-noto-sans), sans-serif" }}
        >
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-foreground/70 hover:text-foreground transition-colors"
    >
      {children}
    </Link>
  );
};
