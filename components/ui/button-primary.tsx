import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import type { MouseEvent } from "react";

type ButtonPrimaryProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  hover?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  target?: string;
  disabled?: boolean;
};

export const ButtonPrimary = ({ children, href, className, hover, onClick, target, disabled }: ButtonPrimaryProps) => {
  const baseClasses = cn(
    "inline-flex items-center justify-center rounded-lg border border-[#006fc4] bg-[#006fc4] px-5 py-2.5 text-sm sm:px-8 sm:py-3 sm:text-lg font-semibold text-white transition-colors cursor-pointer",
    hover,
    className,
    disabled && "cursor-not-allowed opacity-50",
  );

  if (href.startsWith("#") && onClick) {
    return (
      <button type="button" onClick={onClick} disabled={disabled} className={baseClasses}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={baseClasses} onClick={onClick} target={target} aria-disabled={disabled}>
      {children}
    </Link>
  );
};