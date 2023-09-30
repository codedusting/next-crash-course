"use client";

import useHashPath from "@/hooks/useHashPath";
import Link from "next/link";
import { type ReactNode } from "react";

const ClientLink = ({
  children,
  href,
  classNames,
}: {
  children: ReactNode;
  href: string;
  classNames?: string;
}) => {
  const hashPathId = useHashPath();
  const hashHref = href.substring(1);
  const actualPathname = hashHref === "" ? hashPathId : `#${hashPathId}`;
  return (
    <>
      <Link
        href={href}
        className={`${classNames} ${
          hashHref === actualPathname ? "underline" : ""
        }`}
        onClick={() => (window.location.href = hashHref)}
      >
        {children}
      </Link>
    </>
  );
};

export default ClientLink;
