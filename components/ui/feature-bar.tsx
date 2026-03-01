import { ShieldCheck, Handshake, UserKey   } from "lucide-react"

export const features = [
    {
        icon: <UserKey className="h-5 w-5 shrink-0 text-[#033163] " />,
        title: "Asesoramiento personalizado",
    },
    {
        icon: <Handshake className="h-5 w-5 shrink-0 text-[#033163] " />,
        title: "Relacion a largo plazo",
    },
    {
        icon: <ShieldCheck className="h-5 w-5 shrink-0 text-[#033163] " />,
        title: "Respaldo internacional",
    },
]       

export const FeatureBar = () => {
    return (
        <div className="inline-flex flex-wrap items-center justify-center gap-6 rounded-xl bg-[#91D8F766] backdrop-blur-md px-8 py-4  md:gap-10">
            {features.map((feature) => (
                <div key={feature.title} className="flex items-center gap-2.5 ">
                    {feature.icon}
                    <span className="text-[18px] font-normal text-[#F3F3F3]">{feature.title}</span>
                </div>
            ))}
        </div>
    )
}