import ClientMessageForm from "./client-message-form";
import Container from "./container";

const HomeContact = () => {
  return (
    <section
      id="#contact"
      className="flex flex-col items-center justify-center py-12"
    >
      <Container classNames="flex flex-col justify-center">
        <h2 className="mb-8 text-4xl  font-bold tracking-wide">Contact Us</h2>
        <ClientMessageForm />
      </Container>
    </section>
  );
};

export default HomeContact;
