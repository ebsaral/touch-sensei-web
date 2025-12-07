
import { MdOutlinePrivacyTip } from "react-icons/md";
import Link from "./LocalizedLink";
import { useIntlayer } from "next-intlayer/server";

export function PrivacyPolicyLink() {
    const content = useIntlayer("privacy-page")
    return <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/privacy-policy"
    >
        <MdOutlinePrivacyTip />
        {content.title}
    </Link>
}