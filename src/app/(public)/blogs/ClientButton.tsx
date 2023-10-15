import { createNewBlog } from "@/actions/add-new-blog";
import { revalidatePath, revalidateTag } from "next/cache";

const ClientButton = ({ addNewArticle }: { addNewArticle: any }) => {
  return (
    <form
      action={(formData: FormData) => {
        const title = formData.get("title");
        const description = formData.get("description");
        const image = formData.get("image");
        const category = formData.get("category");
        const content = formData.get("content");
        const createdAt = formData.get("createdAt");
        const data = {
          title,
          description,
          image,
          category,
          content,
          createdAt,
        };
        addNewArticle(data);
        createNewBlog(data);
      }}
    >
      <input type="hidden" name="title" value="New Blog 1" />
      <input type="hidden" name="createdAt" value="2023-09-29T14:20:51.271Z" />
      <input
        type="hidden"
        name="description"
        value="At nemo cupiditate exercitationem consequuntur."
      />
      <input
        type="hidden"
        name="content"
        value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque exercitationem laudantium odit nemo. Dicta molestias sit atque magni dolores vel a ex. Laborum quia fuga consequuntur quod! Nesciunt voluptatem in quia nam itaque esse iste ab et ipsum velit! Facere!"
      />
      <input
        type="hidden"
        name="image"
        value="/images/articles/article-1.jpg"
      />
      <input type="hidden" name="category" value="facilis" />
      <button className="mt-6 rounded-lg bg-slate-950 px-6 py-4 text-slate-50">
        Add a new blog
      </button>
    </form>
  );
};

export default ClientButton;
