"use server";

import { revalidatePath } from "next/cache";

export const createNewBlog = async (data: any) => {
  try {
    await fetch(`${process.env.JSON_API_URL}/articles`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        image: data.image,
        description: data.description,
        category: data.category,
        content: data.content,
        createdAt: data.createdAt,
      }),
    });
    await fetch(`${process.env.JSON_API_URL}/messages`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "lololagu@mailinator.com",
        message: "Dolore dolor molliti",
        attachmentUrl: "/images/messages/user- (11).jpg",
      }),
    });
    //   revalidateTag("blogs");
    revalidatePath("/blogs");
  } catch (e) {
    console.error(e);
  }
};
