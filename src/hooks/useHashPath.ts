"use client";

import { useEffect, useState } from "react";

const getHashPath = () =>
  typeof window !== "undefined"
    ? decodeURIComponent(window.location.hash.replace("#", ""))
    : undefined;

const useHashPath = () => {
  const [hashPath, setHashPath] = useState(getHashPath());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const hashPathChangeHandler = () => {
      setHashPath(getHashPath());
    };
    window.addEventListener("hashchange", hashPathChangeHandler);

    return () => {
      window.removeEventListener("hashchange", hashPathChangeHandler);
    };
  }, []);

  return isClient ? hashPath : null;
};

export default useHashPath;
