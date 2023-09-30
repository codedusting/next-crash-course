import type { ReactNode } from "react";

const ServerComponent2 = ({ children }: { children?: ReactNode }) => {
  console.log("Server Component 2");
  return <div>{children}</div>;
};

export default ServerComponent2;
