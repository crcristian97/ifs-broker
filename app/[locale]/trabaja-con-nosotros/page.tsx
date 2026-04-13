import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HubSpotForm } from "@/components/layout/hubspot-form";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ifsbroker.com";
  const title = locale === "es" ? "Trabajá con nosotros | IFS Broker" : "Work With Us | IFS Broker";
  const description = locale === "es"
    ? "Sumate al equipo de IFS Broker. Completá el formulario y nos ponemos en contacto."
    : "Join the IFS Broker team. Fill out the form and we'll get in touch.";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/trabaja-con-nosotros`,
      type: "website",
      siteName: "IFS Broker",
      locale: locale === "es" ? "es_AR" : "en_US",
      images: [{ url: `${baseUrl}/ifs_insurance.png`, width: 512, height: 512, alt: "IFS Broker" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/ifs_insurance.png`],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/trabaja-con-nosotros`,
      languages: {
        es: `${baseUrl}/es/trabaja-con-nosotros`,
        en: `${baseUrl}/en/trabaja-con-nosotros`,
      },
    },
  };
}

export default async function TrabajaConNosotrosPage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F4F8FC] flex flex-col items-center justify-center px-4 py-32">
        <div className="w-full max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#003163] text-center mb-4">
            {locale === "es" ? "Trabajá con nosotros" : "Work With Us"}
          </h1>
          <p className="text-lg text-[#006FC4] text-center mb-12">
            {locale === "es"
              ? "Completá el formulario y nos ponemos en contacto."
              : "Fill out the form and we'll get in touch."}
          </p>
          <HubSpotForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
