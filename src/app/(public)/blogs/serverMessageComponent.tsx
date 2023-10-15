import { notFound } from "next/navigation";
import ClientOptimisticBlogs from "./clientOptimisticBlogs";
import { TArticle } from "./type";

const isEmptyObject = (obj: Object) => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
};

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getAllMessages() {
  await wait(4000);
  return await fetch(`${process.env.JSON_API_URL}/messages`, {
    next: {
      tags: ["messages"],
    },
  }).then((response) => response.json());
}

const ServerMessageComponent = async () => {
  const messages: TArticle[] = await getAllMessages();
  if (!messages || messages.length === 0 || isEmptyObject(messages))
    return notFound();
  return (
    <>
      {messages.map((message: any) => {
        return (
          <div
            className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg"
            key={message.id}
          >
            <div className="flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={message.attachmentUrl}
                alt={message.message}
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-6">
              <h3 className="mt-2 text-xl font-semibold capitalize">
                {message.email}
              </h3>
              <p className="text-base leading-6 text-slate-600">
                {message.message}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ServerMessageComponent;
