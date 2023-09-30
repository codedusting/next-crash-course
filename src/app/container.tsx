import type { ReactNode } from "react";

const Container = ({
  children,
  classNames,
}: {
  children: ReactNode;
  classNames?: string;
}) => {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 ${classNames}`}>
      {children}
    </div>
  );
};

export default Container;
