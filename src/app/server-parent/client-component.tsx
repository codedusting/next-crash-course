"use client";

import type { ReactNode } from "react";
const ClientComponent = ({ children }: { children?: ReactNode }) => {
  console.log("Client Component");
  return <div>{children}</div>;
};

export default ClientComponent;
