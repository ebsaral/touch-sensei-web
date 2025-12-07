import { Analytics } from "@vercel/analytics/react"

import { LocalPromiseParams, type NextLayoutIntlayer, generateStaticParams } from "next-intlayer";
import { getHTMLTextDir, getIntlayer, getMultilingualUrls } from "intlayer";

import localFont from "next/font/local";

import "../globals.css";
import "../video-react.css";

import { Metadata } from "next";

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


export { generateStaticParams };

export const generateMetadata = async ({
  params,
}: LocalPromiseParams): Promise<Metadata> => {
  const { locale } = await params;

  const metadata = getIntlayer("page-metadata", locale);

  /**
   * Generates an object containing all url for each locale.
   *
   * Example:
   * ```ts
   *  getMultilingualUrls('/about');
   *
   *  // Returns
   *  // {
   *  //   en: '/about',
   *  //   fr: '/fr/about',
   *  //   es: '/es/about',
   *  // }
   * ```
   */
  
  const url = "https://touch-sensei-web.vercel.app";
  const multilingualUrls = getMultilingualUrls(url);

  return {
    ...metadata,
    alternates: {
      canonical: multilingualUrls[locale as keyof typeof multilingualUrls],
      languages: { ...multilingualUrls, "x-default": url },
    },
    openGraph: {
      ...metadata.openGraph,
      url: multilingualUrls[locale as keyof typeof multilingualUrls],
    },
  };
};

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params;
  return (
    <html lang={locale} dir={getHTMLTextDir(locale)} className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <meta name="robots" content="all" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
};

export default LocaleLayout;