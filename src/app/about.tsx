import Container from "./container";

const HomeAbout = () => {
  return (
    <section
      id="#about"
      className="flex flex-col items-center justify-center bg-slate-950 py-12 text-slate-50"
    >
      <Container classNames="flex flex-col  justify-center">
        <h2 className="mb-8 text-4xl  font-semibold tracking-wide text-slate-50">
          About Crafters
        </h2>
        <div className="flex flex-col gap-4 text-lg text-slate-300">
          <p>
            At Crafter, we believe that everyone has a unique talent and passion
            to share with the world. We&apos;re here to help you discover your
            passions, connect with others, and make a difference in your own
            unique way.
          </p>
          <p>
            Whether you&apos;re a seasoned crafter or just starting out, we have
            something for everyone. Our blog posts offer inspiration, guidance,
            and support for all levels of crafters. We also have a thriving
            community of crafters who are always willing to share their tips and
            tricks.
          </p>
          <p>
            We believe that crafting is more than just a hobby. It&apos;s a way
            to express yourself, connect with others, and create something
            beautiful. We&apos;re here to help you find your own meaning and
            purpose through crafting.
          </p>
          <p>
            So if you&apos;re ready to start your crafting journey, or if
            you&apos;re just looking for some inspiration, come join us at
            Crafter. We&apos;re here to help you create something amazing!
          </p>
        </div>
      </Container>
    </section>
  );
};

export default HomeAbout;
