import { cn } from "@/lib/utils";
import Link from "next/link";
import type { MouseEvent } from "react";

type ButtonPrimaryProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  hover?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};

export const ButtonPrimary = ({ children, href, className, hover, onClick }: ButtonPrimaryProps) => {
  const baseClasses = cn(
    "inline-flex items-center justify-center rounded-lg border border-[#006fc4] bg-[#006fc4] px-8 py-3 text-lg font-semibold text-white transition-colors",
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
    <Link href={href} className={baseClasses} onClick={onClick}>
      {children}
    </Link>
  );
};