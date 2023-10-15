import Link from "next/link";
import Container from "./container";
import Hamburger from "./hamburger";
import AuthIcon from "./auth-icon";

const Header = () => {
  return (
    <header className="bg-slate-950 py-6 text-slate-50">
      <Container classNames="flex justify-between items-center">
        <div className="flex items-center justify-center gap-6">
          <Link href="/" className="z-10 text-xl font-bold">
            Crafters
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex h-full w-full flex-col items-start justify-center gap-2 text-xl lg:flex-row lg:items-center lg:justify-start lg:text-base">
              <li className="w-full text-center lg:w-max">
                <Link
                  href="/#home"
                  className="inline-block w-[110px] text-left lg:w-max"
                >
                  Home
                </Link>
              </li>
              <li className="w-full text-center lg:w-max">
                <Link
                  href="/#about"
                  className="inline-block w-[110px] text-left  lg:w-max"
                >
                  About
                </Link>
              </li>
              <li className="w-full text-center lg:w-max">
                <Link
                  href="/#contact"
                  className="inline-block w-[110px] text-left  lg:w-max"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center justify-end gap-4 lg:hidden">
          <AuthIcon />
          <Hamburger />
        </div>
        <div className="hidden items-center justify-end lg:flex">
          <Link
            href="/login"
            className="flex items-center rounded-sm px-4 py-2 text-lg text-slate-50"
          >
            Login
          </Link>
          <Link
            href="/auth?page=sign-up"
            className="flex items-center rounded-sm bg-slate-50 px-4 py-3 text-lg text-slate-950"
          >
            Sign-up
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
