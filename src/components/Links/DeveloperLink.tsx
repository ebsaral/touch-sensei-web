import { useIntlayer } from "next-intlayer/server";
import Link from "next/link";
import { MdDeveloperMode } from "react-icons/md";

export function DeveloperLink() {
    const content = useIntlayer("navigation");
    return <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://0.1234S.org"
    >
        <MdDeveloperMode />
        {content.developer}
    </Link>
}