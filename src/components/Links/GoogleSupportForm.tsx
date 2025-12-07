import { useIntlayer } from "next-intlayer/server"

export function GoogleSupportForm() {
    const content = useIntlayer("privacy-page");
    return <a
        className="hover:underline hover:underline-offset-4"
        href="https://forms.gle/igsapNH78uHYCbSG7"
        target="_blank"
        >
        {"<"}{content.googleForm}{">"}
    </a>
}