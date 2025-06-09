import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/fun`,
      lastModified: new Date(),
    },
    // {
    //   url: `${SITE_URL}/blog/...`,
    //   lastModified: new Date(),
    // },
  ]
}
