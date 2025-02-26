"use client"
import { Link, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { GoGlobe } from "react-icons/go";

export function LanguageHeader() {
    const locale = useLocale()
    const pathname = usePathname()
    const href = pathname.replace(`/${locale}`, "") || "/"

    return <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <GoGlobe />
        <Link
        className={`flex items-center gap-2 hover:underline hover:underline-offset-4` + `${locale === 'en' && '  font-bold'}`}
        href={href}
        locale="en"
        >
        English
        </Link>
        {" | "}
        <Link
        className={`flex items-center gap-2 hover:underline hover:underline-offset-4` + `${locale === 'tr' && '  font-bold'}`}
        href={href}
        locale="tr"
        >
        Türkçe
        </Link>
        {" | "}
        <Link
        className={`flex items-center gap-2 hover:underline hover:underline-offset-4` + `${locale === 'de' && '  font-bold'}`}
        href={href}
        locale="de"
        >
        Deutsch
        </Link>
    </div>
}