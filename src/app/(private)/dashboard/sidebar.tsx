import Link from "next/link";

const DashboardSidebar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="profile">Profile</Link>
        </li>
        <li>
          <Link href="blogs">Blogs</Link>
        </li>
      </ul>
    </nav>
  );
};
export default DashboardSidebar;
