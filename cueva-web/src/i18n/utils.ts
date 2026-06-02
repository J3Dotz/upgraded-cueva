import { ui, defaultLang, type Lang, type UIKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'es') return 'es';
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang][key] ?? ui[defaultLang][key]) as string;
  };
}

/** Returns the path prefix for a given language. EN has no prefix. */
export function prefix(lang: Lang): string {
  return lang === 'es' ? '/es' : '';
}

/** Translate a field that may be a localeString object {en, es} or a plain string. */
export function loc(
  field: { en?: string; es?: string } | string | undefined,
  lang: Lang
): string {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[lang] ?? field[defaultLang] ?? '';
}

/** Translate a localeText / localeBlock field (returns the array or string for the given lang). */
export function locArr(
  field: { en?: unknown; es?: unknown } | undefined,
  lang: Lang
): unknown {
  if (!field) return null;
  return field[lang] ?? field[defaultLang] ?? null;
}

/** Format a Sanity date string for display */
export function formatDate(dateStr: string, lang: Lang): string {
  return new Date(dateStr).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
