import type { ReactNode } from "react";

const ProfileLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="border-4 border-blue-700">
      <article>Profile Sidebar</article>
      {children}
    </div>
  );
};

export default ProfileLayout;
