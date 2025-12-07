import Image from "next/legacy/image"
import { IntlayerServerProvider } from "next-intlayer/server";
import { IntlayerClientProvider } from "next-intlayer";
import { LogoLink } from "./Links/LogoLink";
import { PrivacyPolicyLink } from "./Links/PrivacyPolicyLink";
import { TermsLink } from "./Links/TermsLink";
import { DeveloperLink } from "./Links/DeveloperLink";
import { LocalesValues } from "intlayer";
import { LanguageHeader } from "./LanguageHeader";



export default function PageInnerLayout({children, params}: {
    children: React.ReactNode;
    params: {locale: LocalesValues; intlayerKey: string};
  }) {
    
    return (
        <IntlayerServerProvider locale={params.locale}>
            <IntlayerClientProvider locale={params.locale}>
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
            </IntlayerClientProvider>
        </IntlayerServerProvider>
    )}