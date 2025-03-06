import type { MetadataRoute } from 'next'


export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://touch-sensei-web.vercel.app',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://touch-sensei-web.vercel.app/tr',
          de: 'https://touch-sensei-web.vercel.app/de'
        },
      },
    },
    {
      url: 'https://touch-sensei-web.vercel.app/en/notes',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://touch-sensei-web.vercel.app/tr/notes',
          de: 'https://touch-sensei-web.vercel.app/de/notes'
        },
      },
    }
  ]
}