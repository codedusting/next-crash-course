import { notFound } from "next/navigation";
import ClientOptimisticBlogs from "./clientOptimisticBlogs";
import { TArticle } from "./type";

const isEmptyObject = (obj: Object) => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
};

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getAllBlogs() {
  await wait(2000);
  // throw new Error("Cannot fetch the blogs. Please try again");
  return await fetch(`${process.env.JSON_API_URL}/articles`, {
    next: {
      tags: ["blogs"],
    },
  }).then((response) => response.json());
}

const ServerBlogComponent = async () => {
  const articles: TArticle[] = await getAllBlogs();
  if (!articles || articles.length === 0 || isEmptyObject(articles))
    return notFound();
  return <ClientOptimisticBlogs articles={articles} />;
};

export default ServerBlogComponent;
