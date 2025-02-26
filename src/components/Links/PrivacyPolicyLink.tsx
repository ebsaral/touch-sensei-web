import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { MdOutlinePrivacyTip } from "react-icons/md";

export function PrivacyPolicyLink() {
    const t = useTranslations()
    return <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/privacy-policy"
    >
        <MdOutlinePrivacyTip />
        {t("PrivacyPolicyPage.title")}
    </Link>
}