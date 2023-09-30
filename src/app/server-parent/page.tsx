import ClientComponent from "./client-component";
import ServerComponent from "./server-component";
import ServerComponent2 from "./server-component-2";

const ServerParent = () => {
  console.log("Server Parent");
  return (
    <ServerComponent>
      <ClientComponent>
        <ServerComponent2 />
      </ClientComponent>
    </ServerComponent>
  );
};

export default ServerParent;
