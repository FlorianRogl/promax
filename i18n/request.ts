import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as 'de' | 'en')) {
    locale = routing.defaultLocale;
  }
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    onError(error) {
      // Ignore missing-message errors (the OLD app tolerated these); rethrow others.
      if (error.code === 'MISSING_MESSAGE') return;
      console.error(error);
    },
    getMessageFallback({ key }) {
      // Mimic react-i18next default: render the key path when a message is missing.
      return key;
    },
  };
});
