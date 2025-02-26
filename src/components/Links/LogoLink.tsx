import Image from "next/image"
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";

export function LogoLink(){
    const locale = useLocale()
    return (
        <Link
            href="/"
            locale={locale as "en" | "tr" | "de"}
        >
            <Image
                className="rounded-3xl"
                src="/images/logo.png"
                alt="Touch Sensei logo"
                width={400}
                height={400}
                priority
            />
        </Link>
    )
}