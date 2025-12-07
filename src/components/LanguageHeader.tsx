"use client"

import {
  getLocaleName,
  getLocalizedUrl,
} from "intlayer";

import { useIntlayer, useLocale, useLocaleCookie } from "next-intlayer";
import Link from "next/link";
import { GoGlobe } from "react-icons/go";

export function LanguageHeader({targetId=""} :{className?: string, targetId?: string}) {
    const { locale, pathWithoutLocale, availableLocales } = useLocale();
    const content = useIntlayer("main-page");
    const { setLocaleCookie } = useLocaleCookie();
    return <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <GoGlobe />
      {availableLocales.map((localeItem) => (
        <div key={localeItem} className="flex flex-row items-center justify-center gap-2">
          <p>{content.flags[localeItem]}</p>
          <Link
            className={`flex items-center gap-2 hover:underline hover:underline-offset-4` + `${locale === localeItem && ' font-bold'}`}
            href={getLocalizedUrl(pathWithoutLocale, localeItem)}
            hrefLang={localeItem}
            aria-current={locale === localeItem ? "page" : undefined}
            onClick={() => setLocaleCookie(localeItem)}
            itemID={targetId}
          >
              {getLocaleName(localeItem)}
          </Link>
        </div>
        ))}
    </div>
}