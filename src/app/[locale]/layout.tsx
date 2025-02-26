import { Analytics } from "@vercel/analytics/react"
import localFont from "next/font/local";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {unstable_setRequestLocale} from 'next-intl/server';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

import "../globals.css";
import { PrivacyPolicyLink } from "@/components/Links/PrivacyPolicyLink";
import { TermsLink } from "@/components/Links/TermsLink";
import { DeveloperLink } from "@/components/Links/DeveloperLink";
import { LanguageHeader } from "@/components/LanguageHeader";
import { LogoLink } from "@/components/Links/LogoLink";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
        <NextIntlClientProvider messages={messages}>
          <div className="grid grid-rows items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center">
              <LanguageHeader />
              <LogoLink />
              {children}
            </main>
          
            <div className="row-start-3 flex flex-wrap items-center justify-center">
              <hr className="h-px w-60 my-8 bg-gray-200 border-0" />
            </div>
            
            <footer className="row-start-4 flex gap-6 flex-wrap items-center justify-center">
              <PrivacyPolicyLink />
              <TermsLink />
              <DeveloperLink />
            </footer>
            <div className="row-start-5 flex flex-wrap items-center justify-center pt-10">© {new Date().getFullYear()}</div>
          </div>
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
