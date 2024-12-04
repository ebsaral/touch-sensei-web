import type { MetadataRoute } from 'next'


export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://touch-sensei.saral.me',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://touch-sensei.saral.me/tr',
          de: 'https://touch-sensei.saral.me/de'
        },
      },
    },
    {
      url: 'https://touch-sensei.saral.me/en/notes',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://touch-sensei.saral.me/tr/notes',
          de: 'https://touch-sensei.saral.me/de/notes'
        },
      },
    }
  ]
}