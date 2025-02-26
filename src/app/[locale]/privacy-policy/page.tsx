
import { GoogleSupportForm } from "@/components/Links/GoogleSupportForm";
import { useTranslations } from "next-intl";
import {getTranslations} from 'next-intl/server';
import { unstable_setRequestLocale } from "next-intl/server";

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
    <>
      <div className="row-start-3 flex gap-6 text-4xl text-center font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
      {t('PrivacyPolicyPage.title')}
      </div>
  
      <div className="row-start-3 flex gap-6 text-sm text-justify font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
      {t('PrivacyPolicyPage.text')}
      
      </div>
      <div className="row-start-3 flex gap-6 text-sm text-justify font-[family-name:var(--font-geist-mono)] whitespace-pre-line">      
      <GoogleSupportForm />
      </div>
    </>
  );
}
