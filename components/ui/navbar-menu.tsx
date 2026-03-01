"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div 
      onMouseEnter={() => setActive(item)}
      onMouseLeave={() => setActive(null)}
      className="relative"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-[18px] font-normal text-[#FEFEFE] transition-colors hover:text-[#FEFEFE]/80"
        style={{ fontFamily: 'var(--font-noto-sans), sans-serif' }}
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
              className="bg-[#0a1628]/95 dark:bg-[#0a1628]/95 backdrop-blur-md rounded-2xl overflow-hidden border border-foreground/20 shadow-xl"
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
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl object-cover"
      />
      <div>
        <h4 
          className="text-[18px] font-normal mb-1 text-[#FEFEFE]"
          style={{ fontFamily: 'var(--font-noto-sans), sans-serif' }}
        >
          {title}
        </h4>
        <p 
          className="text-[18px] font-normal text-[#FEFEFE] max-w-40"
          style={{ fontFamily: 'var(--font-noto-sans), sans-serif' }}
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
