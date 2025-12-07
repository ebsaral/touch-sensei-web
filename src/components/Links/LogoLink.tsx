import { useLocale } from "next-intlayer/server"
import Image from "next/image"
import Link from "./LocalizedLink"

export function LogoLink(){
    const locale = useLocale()
    return (
        <Link
            href="/"
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