import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [
      Locales.ENGLISH,
      Locales.TURKISH,
      Locales.GERMAN,
    ],
    defaultLocale: Locales.ENGLISH
  },
  routing: {
    mode: "prefix-all",
  },
  log: {
    mode: "verbose"
  },
  build: {
    importMode: "dynamic",
  },
};

export default config;