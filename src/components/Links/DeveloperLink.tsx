import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { MdDeveloperMode } from "react-icons/md";

export function DeveloperLink() {
    const t = useTranslations()
    return <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://0.1234S.org"
    >
        <MdDeveloperMode />
        {t("Link.developer")}
    </Link>
}