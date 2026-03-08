import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { routing } from '@/i18n/routing';

export default async function NotFound({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Get locale from params or use default
  const { locale } = await params;
  const validLocale = routing.locales.includes(locale as any) 
    ? locale 
    : routing.defaultLocale;
  
  const t = await getTranslations({ locale: validLocale, namespace: 'notFound' });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0a1628] via-[#033163] to-[#0a1628] px-4 py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
        {/* SVG Illustration */}
        <div className="mb-8 w-full max-w-2xl">
          <Image
            src="/404.svg"
            alt="404 Not Found"
            width={960}
            height={668}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h1 className="text-6xl font-bold text-white md:text-8xl" style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}>
            404
          </h1>
          
          <h2 className="text-3xl font-semibold text-white md:text-4xl" style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}>
            {t('title')}
          </h2>
          
          <p className="mx-auto max-w-md text-lg text-white/80 md:text-xl" style={{ fontFamily: 'var(--font-noto-sans), sans-serif' }}>
            {t('description')}
          </p>

          {/* Button */}
          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center rounded-lg bg-[#006FC4] px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-[#0059a3] hover:shadow-lg hover:shadow-[#006FC4]/50"
              style={{ fontFamily: 'var(--font-noto-sans), sans-serif' }}
            >
              {t('button')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
