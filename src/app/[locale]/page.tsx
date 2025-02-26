
import { useTranslations } from "next-intl";
import {getTranslations} from 'next-intl/server';
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import {Link} from '@/i18n/routing';
import { LanguageHeader } from "@/components/LanguageHeader";
import { PrivacyPolicyLink } from "@/components/Links/PrivacyPolicyLink";
import { TermsLink } from "@/components/Links/TermsLink";
import { DeveloperLink } from "@/components/Links/DeveloperLink";


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
        url: 'https://touch-sensei.saral.me',
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
      {t("HomePage.soon")}
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
      <div className="row-start-3 flex gap-6 text-2xl text-center font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
        {t('HomePage.gameInfoTitle')}
      </div>
      <div className="row-start-3 flex gap-6 text-sm text-center font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
        {t('HomePage.gameInfo')}
      </div>
      <div className="hover:underline hover:underline-offset-4 row-start-3 flex gap-6 text-sm text-left font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
      <Image
            src={`images/link.svg`}
            alt="Link icon"
            width={16}
            height={16}
            priority
          />
        <Link href="/notes"><b>{t("Link.DetailsPage.name")}</b></Link>
      </div>
    </>
  );
}
