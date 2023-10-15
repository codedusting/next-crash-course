"use client";

import { submitMessage } from "@/actions/message-form-submit";
import { useRef, useTransition } from "react";

const ClientMessageForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  return (
    <form
      ref={formRef}
      action={(formData: FormData) => {
        formRef.current?.reset();
        startTransition(() => {
          submitMessage(formData);
        });
      }}
      className="flex w-full max-w-xl flex-col gap-4"
    >
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Code Dusting"
          aria-required
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="codedusting@gmail.com"
          aria-required
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows={4}></textarea>
      </div>
      <div className="flex flex-col">
        <label htmlFor="attachment">Attachments</label>
        <input type="file" name="attachment" id="attachment" />
      </div>
      <div className="flex flex-col">
        <button
          type="submit"
          className="rounded-md bg-slate-950 px-4 py-3 text-slate-50"
        >
          {isPending ? "Sending message..." : "Send message"}
        </button>
      </div>
    </form>
  );
};

export default ClientMessageForm;
