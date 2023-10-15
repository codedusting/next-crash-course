import Link from "next/link";
import Container from "./container";

const HomeHero = () => {
  return (
    <section
      id="#home"
      className="flex flex-col items-center justify-center py-12 lg:py-56"
    >
      <Container classNames="flex flex-col justify-center">
        <h1 className="mb-2 text-4xl font-bold text-slate-900 lg:text-6xl">
          Find Meaning and Purpose in Your Life
        </h1>
        <p className="mt-1 text-lg font-semibold text-slate-700 lg:text-2xl">
          Discover your passions, connect with others, and make a difference
        </p>
        <Link
          id="articles"
          href="/blogs"
          className="mt-6 w-max rounded-md bg-slate-950 px-8 py-4 text-lg text-slate-50"
        >
          Go and read our blogs
        </Link>
      </Container>
    </section>
  );
};

export default HomeHero;
