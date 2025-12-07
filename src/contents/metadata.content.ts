import { type Dictionary, t } from "intlayer";
import { Metadata } from "next";

const metadataContent = {
  key: "page-metadata",
  content: {
    title: t({
      en: "Touch Sensei | mobile game",
      tr: "Touch Sensei | mobil oyun",
      de: "Touch Sensei | handyspiel"
    }),
    description: t({
      en: "Join Touch Sensei on an emotional journey! Move your finger to unlock feelings, discover secrets, and explore a world of unique textures. Try it now.",
      tr: "Touch Sensei ile duygusal bir yolculuğa katılın! Duyguları açmak, sırları keşfetmek ve eşsiz dokularla dolu bir dünyayı keşfetmek için parmağınızı hareket ettirin. Hemen deneyin.",
      de: "Tritt mit Touch Sensei auf eine emotionale Reise ein! Bewege deinen Finger, um Gefühle zu entfalten, Geheimnisse zu entdecken und eine Welt einzigartiger Texturen zu erkunden. Probiere es jetzt aus."
    }),
    applicationName: "Touch Sensei",
    authors: [
      {
        name: "Emin Buğra Saral",
        url: "https://0.1234s.org"
      }
    ],
    generator: "Next.js",
    keywords: t({
      en: "touch sensei, mobile game",
      tr: "touch sensei, mobil oyun",
    }),
    referrer: "origin",
    creator: "touch-sensei-web.vercel.app",
    publisher: "Emin Buğra Saral",
    robots: {
      index: true,
      follow: true
    },
    icons: {
      icon: "https://touch-sensei-web.vercel.app/icon.png",
      apple: "https://touch-sensei-web.vercel.app/apple-icon.png"
    },
    manifest: "https://touch-sensei-web.vercel.app/manifest.webmanifest",
    openGraph: {
      type: "website",
      images: [
        { 
          url: "http://touch-sensei-web.vercel.app/logos/logo-og.png",
          secureUrl: "https://touch-sensei-web.vercel.app/logos/logo-og.png"
        }
      ]
    },
    twitter: {
      card: "summary_large_image"
    },
    verification: {},
    appleWebApp: {
      capable: true,
      title: "Touch Sensei",
    },
    pinterest: { richPin: true }
  },
} satisfies Dictionary<Metadata>;

export default metadataContent;
