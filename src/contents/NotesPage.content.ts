import { t, type Dictionary } from "intlayer";

const pageContent = {
    key: "notes-page",
    content: {
        title: t({
            en: "Developer Notes",
            tr: "Geliştirici Notları",
            de: "Entwicklernotizen"
        })
    },
} satisfies Dictionary;

export default pageContent;
