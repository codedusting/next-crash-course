import type { ReactNode } from "react";
import DashboardSidebar from "./sidebar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="border-4 border-green-700">
      <DashboardSidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
