import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonSecondaryProps = {
    children: React.ReactNode;
    href: string;
    className?: string;
    hover?: string;
}

export const ButtonSecondary = ({ children, href, className, hover }: ButtonSecondaryProps) => {
    return (
        <Link 
            href={href} 
            className={cn(
                "inline-flex items-center justify-center rounded-lg bg-[#033163] px-8 py-3 text-lg font-semibold text-[#FEFEFE] transition-colors",
                hover, // hover ya debe incluir el prefijo hover: (ej: "hover:bg-[#033163] hover:text-[#FEFEFE]")
                className
            )}
        >
            {children}
        </Link>
    )
}