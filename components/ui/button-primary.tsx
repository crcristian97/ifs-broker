import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonPrimaryProps = {
    children: React.ReactNode;
    href: string;
    className?: string;
    hover?: string;
}

export const ButtonPrimary = ({ children, href, className, hover }: ButtonPrimaryProps) => {
    return (
        <Link 
            href={href} 
            className={cn(
                "inline-flex items-center justify-center rounded-lg border border-[#006fc4] bg-[#006fc4] px-8 py-3 text-lg font-semibold text-white transition-colors",
                hover, // hover ya debe incluir el prefijo hover: (ej: "hover:bg-[#033163] hover:text-[#FEFEFE]")
                className
            )}
        >
            {children}
        </Link>
    )
}