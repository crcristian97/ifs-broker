import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonSecondaryProps = {
    children: React.ReactNode;
    href: string;
    className?: string;
}

export const ButtonSecondary = ({ children, href, className }: ButtonSecondaryProps) => {
    return (
        <Link href={href} className={cn("inline-flex items-center justify-center rounded-lg bg-[#033163] px-8 py-3 text-sm font-semibold text-[#FEFEFE] transition-colors hover:bg-[#033163]/90", className)}>
            {children}
        </Link>
    )
}