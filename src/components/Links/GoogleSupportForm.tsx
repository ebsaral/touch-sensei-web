import { useTranslations } from "next-intl"

export function GoogleSupportForm() {
    const t = useTranslations()
    return <a
        className="hover:underline hover:underline-offset-4"
        href="https://forms.gle/igsapNH78uHYCbSG7"
        target="_blank"
        >
        {"<"}{t("PrivacyPolicyPage.googleForm")}{">"}
    </a>
}