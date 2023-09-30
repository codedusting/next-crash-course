import Container from "./container";

const Footer = () => {
  return (
    <footer className="mt-auto bg-slate-950 py-6 text-slate-50">
      <Container classNames="flex justify-center items-center">
        <p className="text-xl">
          Copyright &copy; {new Date().getFullYear()} Code Dusting | All rights
          reserved
        </p>
      </Container>
    </footer>
  );
};
export default Footer;
