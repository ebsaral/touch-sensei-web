import { useIntlayer, useLocale } from "next-intlayer/server";

import Image from "next/image";
import { MdNoteAlt } from "react-icons/md";
import Link from "./Links/LocalizedLink";
import Video from "./Video";

const HomePageContent = () => {
  const content = useIntlayer("main-page"); 
  const navigation = useIntlayer("navigation"); 
  const { locale } = useLocale();

  return (
    <>
    <div className="row-start-3 flex gap-6 text-4xl text-center font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
        {'Touch Sensei'}
      </div>
      {navigation.expired}
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center gap-2 h-10 sm:h-12 px-4 sm:px-5"
          href={navigation.appStoreHref.value}
          target="_blank"
        >
          <Image
            src={`images/apple-store-${locale}.svg`}
            alt="App Store logo"
            width={200}
            height={100}
            priority
          />
        </a>
      </div>
      <Video />
      <div className="row-start-3 flex gap-6 text-sm text-left font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
        {content.gameInfo}
      </div>
      <div className="hover:underline hover:underline-offset-4 row-start-3 flex gap-2 text-sm text-left items-center font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
        <MdNoteAlt size={16} />
        <Link href="/notes"><b>{navigation.detailsPage}</b></Link>
      </div>
    </>
  )
}

export default HomePageContent;