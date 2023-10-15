import type { ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="botton-0 absolute  left-0 right-0 top-0 flex h-full w-full items-center justify-center bg-slate-500">
      {children}
    </div>
  );
};

export default Modal;
