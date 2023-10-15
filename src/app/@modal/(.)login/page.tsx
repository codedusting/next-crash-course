import Modal from "@/app/Modal";
import Container from "@/app/container";

const Login = () => {
  const handleLogin = async () => {
    "use server";
  };

  return (
    <Modal>
      <h2 className="mb-8 w-full max-w-xl  text-left text-4xl font-bold tracking-wide">
        Login
      </h2>
      <form
        action={handleLogin}
        className="flex w-full max-w-xl flex-col gap-4"
      >
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="codedusting@gmail.com"
            aria-required
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*******"
            aria-required
            required
          />
        </div>
        <div className="flex flex-col">
          <button
            type="submit"
            className="rounded-md bg-slate-950 px-4 py-3 text-slate-50"
          >
            Login
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Login;
