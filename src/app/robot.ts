import { FE_URL } from "@/constant";

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${FE_URL}/sitemap.xml`,
  };
}
