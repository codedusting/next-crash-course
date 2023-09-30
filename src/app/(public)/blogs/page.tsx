import Container from "@/app/container";
import { format } from "date-fns";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TArticle } from "./type";

const isEmptyObject = (obj: Object) => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
};

const Blogs = async () => {
  const articles: TArticle[] = await fetch(
    `${process.env.JSON_API_URL}/articles`,
  ).then((response) => response.json());
  if (!articles || articles.length === 0 || isEmptyObject(articles))
    return notFound();

  return (
    <Container>
      <section className="cards">
        {articles.map((article: TArticle) => {
          return (
            <div className="card" key={article.id}>
              <div className="card_image_container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.image}
                  alt={article.title}
                  className="card_image"
                />
              </div>
              <div className="card_content">
                <div className="card_date_category">
                  <span className="date">
                    {format(new Date(article.createdAt), "MMMM dd, yyyy")}
                  </span>
                  <span className="category">{article.category}</span>
                </div>
                <h3 className="title">{article.title}</h3>
                <p className="description">{article.description}</p>
                <Link href={`/blogs/${article.id}`} className="link">
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </Container>
  );
};

export default Blogs;
