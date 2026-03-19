import { cn } from "@/lib/utils";
import Link from "next/link";
import type { MouseEvent } from "react";

type ButtonSecondaryProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  hover?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  target?: string;
};

export const ButtonSecondary = ({ children, href, className, hover, onClick, target }: ButtonSecondaryProps) => {
  const baseClasses = cn(
    "inline-flex items-center justify-center rounded-lg bg-[#033163] px-8 py-3 text-lg font-semibold text-[#FEFEFE] transition-colors cursor-pointer",
    hover,
    className,
  );

  if (href.startsWith("#") && onClick) {
    return (
      <button type="button" onClick={onClick} className={baseClasses}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={baseClasses} onClick={onClick} target={target}>
      {children}
    </Link>
  );
};