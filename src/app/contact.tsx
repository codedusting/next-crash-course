import ClientMessageForm from "./client-message-form";
import Container from "./container";

const HomeContact = () => {
  return (
    <section
      id="#contact"
      className="flex flex-col items-center justify-center py-56"
    >
      <Container classNames="flex flex-col items-center justify-center">
        <h2 className="mb-8 mt-8 text-6xl">Contact Us</h2>
        <ClientMessageForm />
      </Container>
    </section>
  );
};

export default HomeContact;
