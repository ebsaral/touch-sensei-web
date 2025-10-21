
import { useTranslations } from "next-intl";
import {getTranslations} from 'next-intl/server';
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import {Link} from '@/i18n/routing';
import { MdNoteAlt } from "react-icons/md";



export async function generateMetadata({params: {locale}}: {
  params: {locale: string},
}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('title'),
    description: t('description'),
    itunes: {
      appId: '6705136310',
    },
    appLinks: {
      ios: {
        url: 'https://touch-sensei-web.vercel.app',
        app_store_id: '6705136310'
      },
    }
  };
}

export default function Home({params: {locale}}: {
  params: {locale: string};
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  return (
    <>
      <div className="row-start-3 flex gap-6 text-4xl text-center font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
        {'Touch Sensei'}
      </div>
      {t("Link.expired")}
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center gap-2 h-10 sm:h-12 px-4 sm:px-5"
          href={t("Link.appStoreHref")}
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
      <br/>
      <div className="row-start-3 flex gap-6 text-2xl font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
        {t('HomePage.gameInfoTitle')}
      </div>
      <div className="row-start-3 flex gap-6 text-sm text-left font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
        {t('HomePage.gameInfo')}
      </div>
      <div className="hover:underline hover:underline-offset-4 row-start-3 flex gap-2 text-sm text-left items-center font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
        <MdNoteAlt size={16} />
        <Link href="/notes"><b>{t("Link.DetailsPage.name")}</b></Link>
      </div>
    </>
  );
}
