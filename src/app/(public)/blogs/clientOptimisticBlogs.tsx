"use client";

import Link from "next/link";
import { TArticle } from "./type";
import { format } from "date-fns";
import { experimental_useOptimistic as useOptimistic } from "react";
import ClientButton from "./ClientButton";
import Image from "next/image";

const ClientOptimisticBlogs = ({ articles }: { articles: TArticle[] }) => {
  const [optimisticArticles, addNewArticle] = useOptimistic(
    articles,
    (state: any, newArticle: any) => {
      return [...state, newArticle];
    },
  );
  return (
    <>
      {optimisticArticles.map((article: TArticle, index: number) => {
        return (
          <div
            className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg"
            key={article.id}
          >
            <div className="flex-shrink-0">
              <Image
                src={article.image}
                alt={article.title}
                className="h-48 w-full object-cover"
                priority={index === 0}
                width={384}
                height={192}
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-6">
              <div className="flex items-center justify-start gap-4 text-sm font-medium leading-5 text-slate-600">
                <span className="rounded-md bg-red-700 px-2 py-1 capitalize text-red-50">
                  {format(new Date(article.createdAt), "MMMM dd, yyyy")}
                </span>
                <span className="rounded-md bg-purple-700 px-2 py-1 capitalize text-purple-50">
                  {article.category}
                </span>
              </div>
              <h3 className="mt-2 text-xl font-semibold capitalize">
                {article.title}
              </h3>
              <p className="text-base leading-6 text-slate-600">
                {article.description}
              </p>
              <Link
                href={`/blogs/${article.id}`}
                className="w-max rounded-md bg-slate-950 px-4 py-2 capitalize text-slate-50"
              >
                Read More
              </Link>
            </div>
          </div>
        );
      })}

      <ClientButton addNewArticle={addNewArticle} />
    </>
  );
};

export default ClientOptimisticBlogs;
