import type { ReactNode } from "react";

const ServerComponent = ({ children }: { children?: ReactNode }) => {
  console.log("Server Component");
  return <div>{children}</div>;
};

export default ServerComponent;
