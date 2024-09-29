
import { useTranslations } from "next-intl";
import {getTranslations} from 'next-intl/server';
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import {Link} from '@/i18n/routing';



export async function generateMetadata({params: {locale}}: {
  params: {locale: string};
}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('title')
  };
}

export default function Home({params: {locale}}: {
  params: {locale: string};
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <Link
            className={`flex items-center gap-2 hover:underline hover:underline-offset-4` + `${locale === 'en' && '  font-bold'}`}
            href="/"
          >
            {t("Link.home")}
          </Link>
        </div>
        <Image
          className="rounded-3xl"
          src="/images/logo.png"
          alt="Touch Sensei logo"
          width={400}
          height={400}
          priority
        />
        <div className="row-start-3 flex gap-6 text-4xl text-center font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
        {t('TermsPage.title')}
        </div>
    
        <div className="row-start-3 flex gap-6 text-sm text-justify font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
        {t('TermsPage.text')}
        </div>
        <div className="row-start-3 flex gap-6 text-sm text-justify font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
        <a
          className="hover:underline hover:underline-offset-4"
          href="https://www.saral.me"
          target="_blank"
        >
          {"<"}{t("PrivacyPolicyPage.devWebsite")}{">"}
        </a>
        
        <a
          className="hover:underline hover:underline-offset-4"
          href="https://forms.gle/igsapNH78uHYCbSG7"
          target="_blank"
        >
          {"<"}{t("PrivacyPolicyPage.googleForm")}{">"}
        </a>
        </div>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/privacy-policy"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          {t("PrivacyPolicyPage.title")}
        </Link>
      </footer>
    </div>
  );
}
