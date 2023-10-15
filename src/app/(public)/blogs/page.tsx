import Container from "@/app/container";
import { notFound } from "next/navigation";
import { TArticle } from "./type";
import ClientButton from "./ClientButton";
import ClientOptimisticBlogs from "./clientOptimisticBlogs";
import type { Metadata } from "next";
import { Suspense } from "react";
import ServerBlogComponent from "./serverBlogComponent";
import ServerMessageComponent from "./serverMessageComponent";

const isEmptyObject = (obj: Object) => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
};

export const metadata: Metadata = {
  title: "All Blogs",
};

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Blogs = async () => {
  return (
    <Container classNames="my-12">
      <h1 className="mb-6 text-4xl font-bold">All Blogs</h1>
      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <ServerBlogComponent />
        <hr />
        <hr />
        <hr />
        <Suspense fallback={"Loading messages..."}>
          <ServerMessageComponent />
        </Suspense>
      </section>
    </Container>
  );
};

export default Blogs;
