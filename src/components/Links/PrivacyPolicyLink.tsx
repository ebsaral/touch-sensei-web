import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { GoGlobe } from "react-icons/go";
import { MdOutlinePrivacyTip } from "react-icons/md";

export function PrivacyPolicyLink({page}: {page?: string}) {
    const t = useTranslations()
    return <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/privacy-policy"
    >
        <MdOutlinePrivacyTip />
        {t("PrivacyPolicyPage.title")}
    </Link>
}