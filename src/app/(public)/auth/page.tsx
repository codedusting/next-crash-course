import { notFound } from "next/navigation";
import Login from "./login";
import SignUp from "./sign-up";

const Auth = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  if (searchParams?.page === "login") return <Login />;
  if (searchParams?.page === "sign-up") return <SignUp />;
  return notFound();
};

export default Auth;
