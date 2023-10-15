import type { ReactNode } from "react";

const DashboardLayout = ({
  blogs,
  profile,
}: {
  blogs: ReactNode;
  profile: ReactNode;
}) => {
  return (
    <div className="flex items-start justify-between">
      {blogs}
      {profile}
    </div>
  );
};

export default DashboardLayout;
