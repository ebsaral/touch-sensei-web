import { t, type Dictionary } from "intlayer";

const pageContent = {
    key: "navigation",
    content: {
        home: t({
            en: "Home Page",
            tr: "Ana Sayfa",
            de: "Hauptseite"
        }),
        developer: t({
            en: "Developer",
            tr: "Geliştirici",
            de: "Entwickler"
        }),
        appStoreHref: t({
            en: "https://apps.apple.com/us/app/touch-sensei/id6705136310",
            tr: "https://apps.apple.com/tr/app/touch-sensei/id6705136310",
            de: "https://apps.apple.com/de/app/touch-sensei/id6705136310"
        }),
        detailsPage: t({
            en: "An explanation text from the developer",
            tr: "Geliştiriciden açıklama metni",
            de: "Ein Erklärungstext vom Entwickler (Auf Englisch)"
        }),
        expired: t({
            en: "Because Apple Developer License is expired, the game is currently not listed on App Store.",
            tr: "Apple Geliştirici Lisansı'nın süresi dolduğu için oyun şu anda App Store'da listelenmiyor.",
            de: "Da die Apple-Entwicklerlizenz abgelaufen ist, ist das Spiel derzeit nicht im App Store aufgeführt."
        })
    },
} satisfies Dictionary;

export default pageContent;
