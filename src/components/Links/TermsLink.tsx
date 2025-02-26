import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { IoDocumentTextOutline } from "react-icons/io5";

export function TermsLink() {
    const t = useTranslations()
    return <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/terms"
    >
        <IoDocumentTextOutline />
        {t("TermsPage.title")}
    </Link>
}