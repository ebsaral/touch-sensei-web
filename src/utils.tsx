import { getIntlayer, getMultilingualUrls, LocalesValues } from "intlayer";
import { Metadata } from "next";

export function getPageMetadata ({locale, customPageKey}: {locale: LocalesValues, customPageKey?: string}): Metadata {
    const metadata = getIntlayer("page-metadata", locale);
    let path = '/';
    let imageSrc = "/images/logo.png";
    let title = metadata.title;
    let description = metadata.description;

    let customContent = undefined;
    if(customPageKey){
        customContent = getIntlayer(customPageKey, locale);
        path = customContent.href;
        imageSrc = customContent.image.src;
        title = customContent.title;
        description = customContent.description;
    }

    const url = `https://touch-sensei-web.vercel.app${path}`;
    const multilingualUrls = getMultilingualUrls(url);

    const imageUrl = `http://touch-sensei-web.vercel.app${imageSrc}`;
    const secureImageUrl = `https://touch-sensei-web.vercel.app${imageSrc}`

    return {
        ...metadata,
        alternates: {
            canonical: multilingualUrls[locale as keyof typeof multilingualUrls],
            languages: { ...multilingualUrls, "x-default": url },
        },
        openGraph: {
            ...metadata.openGraph,
            url: multilingualUrls[locale as keyof typeof multilingualUrls],
            images: [
                {
                    url: imageUrl,
                    secureUrl: secureImageUrl
                }
            ]
        },
        title,
        description
    };
}