import Container from "@/app/container";
import { format } from "date-fns";
import { TArticle } from "../type";
import { notFound } from "next/navigation";

const isEmptyObject = (obj: Object) => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
};

const SingleBlog = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const article: TArticle = await fetch(
    `${process.env.JSON_API_URL}/articles/${id}`,
  ).then((res) => res.json());
  if (!article || isEmptyObject(article)) return notFound();

  return (
    <Container>
      <div className="card_image_container">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={article.image} alt={article.title} className="card_image" />
      </div>
      <div className="card_content">
        <div className="card_date_category">
          <span className="date">
            {format(new Date(article.createdAt), "MMMM dd, yyyy")}
          </span>
          <span className="category">{article.category}</span>
        </div>
        <h3 className="title">{article.title}</h3>
        <p className="description">{article.content}</p>
      </div>
    </Container>
  );
};

export default SingleBlog;
