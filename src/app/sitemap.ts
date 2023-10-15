import { TArticle } from "./(public)/blogs/type";

export default async function sitemap() {
  const articles: TArticle[] = await fetch(
    `${process.env.JSON_API_URL}/articles`,
    {
      next: {
        tags: ["blogs"],
      },
    },
  ).then((response) => response.json());

  const articleUrls =
    articles?.map((article) => {
      return {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/blogs/${article.id}`,
        lastModified: new Date(article.createdAt),
        changeFrequency: "weekly",
        priority: 1,
      };
    }) ?? [];

  return [
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/auth?page=login`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/auth?page=sign-up`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...articleUrls,
  ];
}
