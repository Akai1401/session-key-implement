import { FE_URL } from '@/constant';
import { fetchProduct } from '@/fetching/server/serverAction';

export default async function sitemap() {
  const productData = await fetchProduct();
  // Error to fetch data
  if (!productData)
    return [
      {
        url: `${FE_URL}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
    ];

  // fetch data success
  const sitemapArray = productData?.data?.map((item: any) => ({
    url: `${FE_URL}/product/${item?._id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
  return [
    {
      url: `${FE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...sitemapArray,
  ];
}
