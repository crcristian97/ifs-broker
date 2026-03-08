import { routing } from '@/i18n/routing';
import NotFoundPage from './[locale]/not-found';

export default function GlobalNotFound() {
  return <NotFoundPage params={Promise.resolve({ locale: routing.defaultLocale })} />;
}
