import { IoDocumentTextOutline } from "react-icons/io5";
import Link from "./LocalizedLink";
import { useIntlayer } from "next-intlayer/server";

export function TermsLink() {
    const content = useIntlayer("terms-page");
    return <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/terms"
    >
        <IoDocumentTextOutline />
        {content.title}
    </Link>
}