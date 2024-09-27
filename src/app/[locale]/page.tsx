
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
          <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
          />
          <Link
            className={`flex items-center gap-2 hover:underline hover:underline-offset-4` + `${locale === 'en' && '  font-bold'}`}
            href="/"
            locale="en"
          >
            English
          </Link>
          {" | "}
          <Link
            className={`flex items-center gap-2 hover:underline hover:underline-offset-4` + `${locale === 'tr' && '  font-bold'}`}
            href="/"
            locale="tr"
          >
            Türkçe
          </Link>
          {" | "}
          <Link
            className={`flex items-center gap-2 hover:underline hover:underline-offset-4` + `${locale === 'de' && '  font-bold'}`}
            href="/"
            locale="de"
          >
            Deutsch
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
          {'Touch Sensei'}
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center gap-2 h-10 sm:h-12 px-4 sm:px-5"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
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
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/terms"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          {t("TermsPage.title")}
        </Link>
      </footer>
    </div>
  );
}
