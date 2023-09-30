import Link from "next/link";
import Container from "./container";

const Header = () => {
  return (
    <header className="bg-slate-950 py-6 text-slate-50">
      <Container classNames="flex justify-between items-center">
        <div className="flex items-center justify-center gap-6">
          <Link href="/" className="text-lg font-bold">
            Crafters
          </Link>
          <nav>
            <ul className="flex items-center justify-start gap-2">
              <li>
                <Link href="/#home">Home</Link>
              </li>
              <li>
                <Link href="/#about">About</Link>
              </li>
              <li>
                <Link href="/#contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center justify-end">
          <Link
            href="/login"
            className="flex items-center rounded-sm px-4 py-2 text-lg text-slate-50"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
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
