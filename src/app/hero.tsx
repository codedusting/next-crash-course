import Link from "next/link";
import Container from "./container";

const HomeHero = () => {
  return (
    <section
      id="#home"
      className="flex flex-col items-center justify-center py-56"
    >
      <Container classNames="flex flex-col items-center justify-center">
        <h1 className="mb-2 text-6xl font-bold text-slate-900">
          Find Meaning and Purpose in Your Life
        </h1>
        <p className="mt-1 text-2xl font-semibold text-slate-700">
          Discover your passions, connect with others, and make a difference
        </p>
        <Link
          href="/blogs"
          className="mt-6 rounded-md bg-slate-950 px-8 py-4 text-lg text-slate-50"
        >
          Go and read our blogs
        </Link>
      </Container>
    </section>
  );
};

export default HomeHero;
