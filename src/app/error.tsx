"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // log the error somewhere
    console.error(error.message);
  }, [error]);

  return (
    <section>
      <h1>Something went wrong</h1>
      <button onClick={() => reset()}>Try again!</button>
    </section>
  );
}
