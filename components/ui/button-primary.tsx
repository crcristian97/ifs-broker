import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonPrimaryProps = {
    children: React.ReactNode;
    href: string;
    className?: string;
}

export const ButtonPrimary = ({ children, href, className }: ButtonPrimaryProps) => {
    return (
        <Link href={href} className={cn("inline-flex items-center justify-center rounded-lg bg-[#006fc4] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#006fc4]/90", className)}>
            {children}
        </Link>
    )
}